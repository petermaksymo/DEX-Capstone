import React, { useState } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import CoinPickerDialog from "./coinPickerDialog"
import Coin from "./coin"
import { force_decimal } from "../utils/functions"
import {AuthContext} from "./authContext";

export default function LiquidityAddWithdrawCard({ currencies, setRefreshing }) {
  const { authedFetch } = React.useContext(AuthContext)
  const [addMode, setAddMode] = useState(true)
  const [coin1DialogOpen, setCoin1DialogOpen] = useState(false)
  const [coin1, setCoin1] = useState("coin_a")
  const [coin1Value, _setCoin1Value] = useState("")
  const [coin2DialogOpen, setCoin2DialogOpen] = useState(false)
  const [coin2, setCoin2] = useState("coin_b")
  const [coin2Value, _setCoin2Value] = useState("")

  const [netWorthAdded, setNetWorthAdded] = useState("0")
  const [newShare, setNewShare] = useState("0")
  const [newLP, setNewLP] = useState("0")

  const setCoin1Value = (value) => {
    getequivalent("coin1", value)
    _setCoin1Value(value)
  }

  const setCoin2Value = (value) => {
    getequivalent("coin2", value)
    _setCoin2Value(value)
  }

  const sendpost = async ()=>{
    const formdata = new FormData()
    formdata.append('action', addMode ? "add" : "remove")
    formdata.append('coin1', coin1)
    formdata.append('amount', coin1Value)
    formdata.append('coin2', coin2)

    const sendpooldata = await authedFetch("/pool", {
      method: "POST",
      body: formdata,
    })
    _setCoin1Value("")
    _setCoin2Value("")
    setRefreshing(true)
  }

  const getequivalent = async (coin, value="0")=>{
    const query = new URLSearchParams()
    query.append("format", "equivalentamt")
    query.append("coin1type", coin1)
    query.append("coin2type", coin2)
    query.append(coin === "coin1" ? "coin1added" : "coin2added", value)
    query.append(coin === "coin1" ? "coin2added" : "coin1added", "0")

    const res = await authedFetch(`/pool?${query.toString()}`)
    setNetWorthAdded(res.newvalue)
    setNewShare(res.newshare)
    setNewLP(res.newlp)
    coin === "coin1" ? _setCoin2Value(res.equivalent) : _setCoin2Value(res.equivalent)
  }

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: { xs: 425, md: "100%" },
        mx: "auto",
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
              placeholder="0.00"
              value={coin1Value}
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
              placeholder="0.00"
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr",
            minWidth: { xs: "100%", md: 0 },
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
            onClick={sendpost}
          >
            {addMode ? "Add" : "Withdraw"}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "100%", md: 34 }, height: { xs: 13, md: "100%" } }}
      >
        &nbsp;
      </Box>
    </Paper>
  )
}
