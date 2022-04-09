import React, { useState } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Slider from "@mui/material/Slider"

import CoinPickerDialog from "./coinPickerDialog"
import Coin from "./coin"
import { force_decimal } from "../utils/functions"
import { AuthContext } from "./authContext"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import CircularProgress from "@mui/material/CircularProgress"
import Dialog from "@mui/material/Dialog"

export default function LiquidityAddWithdrawCard({
  currencies,
  poolData,
  setRefreshing,
}) {
  const { authedFetch } = React.useContext(AuthContext)
  const [addMode, setAddMode] = useState(true)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const [coin1DialogOpen, setCoin1DialogOpen] = useState(false)
  const [coin1, _setCoin1] = useState("coin_a")
  const [coin1Value, _setCoin1Value] = useState("")
  const [coin2DialogOpen, setCoin2DialogOpen] = useState(false)
  const [coin2, _setCoin2] = useState("coin_b")
  const [coin2Value, _setCoin2Value] = useState("")

  const [withdrawPool, setWithdrawPool] = useState("ab")
  const [withdrawPercent, _setWithdrawPercent] = useState(0)
  const [withdrawValue, setWithdrawValue] = useState(0)

  const [netWorthAdded, setNetWorthAdded] = useState("0")
  const [newShare, setNewShare] = useState("0")
  const [newLP, setNewLP] = useState("0")

  const setCoin1Value = (value) => {
    if (value === "") return resetState()
    getequivalent("coin1", value)
    _setCoin1Value(value)
  }

  const setCoin2Value = (value) => {
    if (value === "") return resetState()
    getequivalent("coin2", value)
    _setCoin2Value(value)
  }

  const setCoin1 = (value) => {
    _setCoin1(value)
    resetState()
  }

  const setCoin2 = (value) => {
    _setCoin2(value)
    resetState()
  }

  const setWithdrawPercent = (value) => {
    _setWithdrawPercent(value)

    const updateStats = async ()  => {
      const pool = poolData[`pool_${withdrawPool}`].stats
      const total_lp = parseInt(pool.totallp)
      const user_lp = parseInt(pool.userlp)

      const withdraw_amt = value/100.0*user_lp
      const new_lp = user_lp - withdraw_amt

      setNetWorthAdded((withdraw_amt/total_lp*parseFloat(pool.pool_size)).toFixed(2))
      setNewShare((new_lp/total_lp*100).toFixed(3))
      setNewLP(withdraw_amt.toFixed(0))
      setWithdrawValue(withdraw_amt)
    }
    updateStats()
  }

  const resetState = () => {
    _setCoin1Value("")
    _setCoin2Value("")
    _setWithdrawPercent(0)
    setWithdrawValue(0)
    setNetWorthAdded("0")
    setNewShare("0")
    setNewLP("0")
    setConfirmDialogOpen(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    setConfirmDialogOpen(true)
  }

  const handleSubmit = async () => {
    setConfirmLoading(true)
    const swapOrder = coin1.slice(-1) > coin2.slice(-1)

    const formdata = new FormData()
    if (addMode) {
      formdata.append("action", "add")
      formdata.append("coin1", swapOrder ? coin2 : coin1)
      formdata.append("amount", swapOrder ? coin2Value : coin1Value)
      formdata.append("coin2", swapOrder ? coin1 : coin2)
    } else {
      formdata.append("action", "remove")
      formdata.append("coin1", `coin_${withdrawPool[0]}`)
      formdata.append("amount", withdrawValue)
      formdata.append("coin2", `coin_${withdrawPool[1]}`)
    }

    await authedFetch("/pool", {
      method: "POST",
      body: formdata,
    })

    resetState()
    setRefreshing(true)
    setConfirmLoading(false)
  }

  const getequivalent = async (coin, value = "0") => {
    const swapOrder = coin1.slice(-1) > coin2.slice(-1)

    const query = new URLSearchParams()
    query.append("format", "equivalentamt")
    query.append("coin1type", swapOrder ? coin2 : coin1)
    query.append("coin2type", swapOrder ? coin1 : coin2)
    query.append("coin1added", (coin === "coin1") === !swapOrder ? value : "0")
    query.append("coin2added", (coin === "coin1") === !swapOrder ? "0" : value)

    const res = await authedFetch(`/pool?${query.toString()}`)
    setNetWorthAdded(res.newvalue)
    setNewShare(res.newshare)
    setNewLP(res.newlp)
    coin === "coin1"
      ? _setCoin2Value(res.equivalent)
      : _setCoin1Value(res.equivalent)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { xs: "100%", sm: 525, md: "100%" },
          mx: "auto",
          minHeight: 118,
        }}
        elevation={4}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            borderRight: { xs: "none", md: "1px solid white" },
            borderBottom: { xs: "1px solid white", md: "none" },
          }}
        >
          <Button
            color="inherit"
            sx={{
              flex: 1,
              bgcolor: addMode ? "#E37065 !important;" : "background.paper",
              borderRadius: "10px 0 0 0",
              color: addMode ? "background.paper" : "#E37065",
            }}
            onClick={() => setAddMode(true)}
          >
            Add
          </Button>
          <Button
            color="inherit"
            sx={{
              flex: 1,
              bgcolor: !addMode ? "#E37065 !important;" : "background.paper",
              borderRadius: { xs: "0 10px 0 0", md: "0 0 0 10px" },
              color: !addMode ? "background.paper" : "#E37065",
            }}
            onClick={() => setAddMode(false)}
          >
            Withdraw
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            bgcolor: "#E37065",
            color: "background.paper",
            gap: 3,
            alignItems: "center",
            width: "100%",
            borderRadius: { xs: "0 0 10px 10px", md: "0 10px 10px 0" },
            justifyContent: "space-around",
            p: 2,
          }}
        >
          {addMode ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                minWidth: { xs: "100%", md: 0 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    minWidth: 120,
                  }}
                  onClick={() => setCoin1DialogOpen(true)}
                >
                  <Coin width={32}>{currencies[coin1].short_name}</Coin>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {currencies[coin1].name}
                    <ExpandMoreIcon />
                  </Typography>
                </Box>
                <TextField
                  variant="outlined"
                  placeholder="0"
                  value={coin1Value}
                  type="number"
                  required
                  inputProps={{ min: 1 }}
                  onChange={(e) => setCoin1Value(force_decimal(e.target.value))}
                />
                <CoinPickerDialog
                  currencies={currencies}
                  open={coin1DialogOpen}
                  onClose={() => setCoin1DialogOpen(false)}
                  setCoin={setCoin1}
                  currentCoins={[coin1, coin2]}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    minWidth: 120,
                  }}
                  onClick={() => setCoin2DialogOpen(true)}
                >
                  <Coin width={32}>{currencies[coin2].short_name}</Coin>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {currencies[coin2].name}
                    <ExpandMoreIcon />
                  </Typography>
                </Box>
                <TextField
                  variant="outlined"
                  placeholder="0"
                  type="number"
                  required
                  inputProps={{ min: 1 }}
                  value={coin2Value}
                  onChange={(e) => setCoin2Value(force_decimal(e.target.value))}
                />
                <CoinPickerDialog
                  currencies={currencies}
                  open={coin2DialogOpen}
                  onClose={() => setCoin2DialogOpen(false)}
                  setCoin={setCoin2}
                  currentCoins={[coin1, coin2]}
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                justifyContent: "space-between",
                width: { xs: "100%", md: "unset" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <strong>&nbsp;Liquidity Pool:</strong>
                <TextField
                  sx={{ minWidth: 150 }}
                  select
                  SelectProps={{ native: true }}
                  value={withdrawPool}
                  onChange={(e) => setWithdrawPool(e.target.value)}
                >
                  <option value="ab">Coin A - Coin B</option>
                  <option value="ac">Coin A - Coin C</option>
                  <option value="ad">Coin A - USD</option>
                  <option value="bc">Coin B - Coin C</option>
                  <option value="bd">Coin B - USD</option>
                  <option value="cd">Coin C - USD</option>
                </TextField>
              </Box>
              <Slider
                sx={{ minWidth: 100 }}
                onChange={(e) => setWithdrawPercent(e.target.value)}
                value={withdrawPercent}
                valueLabelDisplay="on"
                valueLabelFormat={(s) => `${s}%`}
              />
            </Box>
          )}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr 1fr",
              minWidth: { xs: "100%", md: 0 },
              maxWidth: 360,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Net Worth {addMode ? "Added" : "Withdrawn"}:
            </Typography>
            <Typography sx={{ textAlign: "right" }}>{netWorthAdded}</Typography>
            <Typography sx={{ fontWeight: "bold", ml: 1 }}>USD</Typography>

            <Typography sx={{ fontWeight: "bold" }}>New Pool Share:</Typography>
            <Typography sx={{ textAlign: "right" }}>{newShare}</Typography>
            <Typography sx={{ fontWeight: "bold", ml: 1 }}>%</Typography>

            <Typography sx={{ fontWeight: "bold" }}>
              LP Tokens {addMode ? "Received" : "Consumed"}:
            </Typography>
            <Typography sx={{ textAlign: "right" }}>{newLP}</Typography>
            <Typography sx={{ fontWeight: "bold", ml: 1 }}>Tokens</Typography>
          </Box>
          <Box sx={{ minWidth: { xs: "100%", md: 95 }, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{ width: "100%" }}
              type="submit"
            >
              {addMode ? "Add" : "Withdraw"}
            </Button>
          </Box>
        </Box>
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle>Please confirm your action</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="span">
              Please click "confirm" below to confirm that you are&nbsp;
              {addMode ? (
                <>
                  supplying{" "}
                  <strong>
                    {coin1Value} {currencies[coin1].name}
                  </strong>{" "}
                  and{" "}
                  <strong>
                    {coin2Value} {currencies[coin2].name}
                  </strong>{" "}
                  in liquidity.
                </>
              ) : (
                <>
                  trading in <strong>{withdrawValue} LP tokens</strong> for the
                  respective liquidity from <strong>pool {withdrawPool}</strong>
                  .
                </>
              )}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              onClick={handleSubmit}
              disabled={confirmLoading}
            >
              {confirmLoading ? <CircularProgress /> : "Confirm"}
            </Button>
            <Button
              color="secondary"
              onClick={() => setConfirmDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Box
          sx={{ width: { xs: "100%", md: 34 }, height: { xs: 13, md: "100%" } }}
        >
          &nbsp;
        </Box>
      </Paper>
    </form>
  )
}
