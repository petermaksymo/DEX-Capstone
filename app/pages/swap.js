import React, { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import get from "lodash/get"

import { useTheme } from "@mui/material"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import { getCoinData } from "../lib/api/coins"
import Coin from "../src/coin"
import Logo from "../src/logo"
import CoinPickerDialog from "../src/coinPickerDialog"
import { useWidth } from "../utils/hooks"
import { force_decimal } from "../utils/functions"
import HeaderText from "../src/headerText"
import { AuthContext } from "../src/authContext"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import CircularProgress from "@mui/material/CircularProgress"
import Dialog from "@mui/material/Dialog"

export default function Swap({ currencies }) {
  const router = useRouter()
  const theme = useTheme()
  const { isAuthed, isAuthLoading, authedFetch } = React.useContext(AuthContext)
  const [coinData, setCoinData] = useState(null)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const [coin1, setCoin1] = useState("coin_a")
  const [coin1Value, _setCoin1Value] = useState("")
  const [coin1DialogOpen, setCoin1DialogOpen] = useState(false)
  const [coin2, setCoin2] = useState("coin_d")
  const [coin2Value, _setCoin2Value] = useState("")
  const [coin2DialogOpen, setCoin2DialogOpen] = useState(false)
  const [swapRotation, setSwapRotation] = useState(180)

  const setCoin1Value = (value) => {
    if (value === "") return resetState()
    getEquivalent("coin1", value)
    _setCoin1Value(value)
  }

  const setCoin2Value = (value) => {
    if (value === "") return resetState()
    getEquivalent("coin2", value)
    _setCoin2Value(value)
  }

  const fetchData = React.useCallback(async () => {
    if (!isAuthed && !isAuthLoading) await router.push("/")

    const data = await authedFetch("/wallet")
    setCoinData(data)
  }, [isAuthed, isAuthLoading, authedFetch, router])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const resetState = () => {
    _setCoin1Value("")
    _setCoin2Value("")
    setConfirmDialogOpen(false)
    setConfirmLoading(false)
  }

  const setMax = () => setCoin1Value(get(coinData, `${coin1}.balance`, 0))

  const swapCoins = () => {
    const swap_button = document.getElementById("swap-button")
    swap_button.style.transform = `rotate(-${swapRotation}deg)`
    setSwapRotation(swapRotation + 180)

    setCoin1(coin2)
    _setCoin1Value(coin2Value)
    setCoin2(coin1)
    _setCoin2Value(coin1Value)
  }

  const executeExchange = async () => {
    setConfirmLoading(true)

    const formdata = new FormData()

    formdata.append("from", coin1)
    formdata.append("to", coin2)
    formdata.append("amt", coin1Value)

    await authedFetch("/exchange", {
      method: "POST",
      body: formdata,
    })
    resetState()
    fetchData()
  }

  const getEquivalent = async (coin, value = "0") => {
    const swapOrder = coin1.slice(-1) > coin2.slice(-1)

    const query = new URLSearchParams()
    query.append("format", "equivalentamt")
    query.append("coin1type", swapOrder ? coin2 : coin1)
    query.append("coin2type", swapOrder ? coin1 : coin2)
    query.append("coin1added", (coin === "coin1") === !swapOrder ? value : "0")
    query.append("coin2added", (coin === "coin1") === !swapOrder ? "0" : value)
    query.append("includeCommission", "true")

    const res = await authedFetch(`/pool?${query.toString()}`)
    coin === "coin1"
      ? _setCoin2Value(res.equivalent)
      : _setCoin1Value(res.equivalent)
  }

  const MiddleBar = () => {
    const width = useWidth()
    const onMobile = ["xs", "sm"].includes(width)

    const SwapButton = () => (
      <Button
        variant="contained"
        color="inherit"
        disableElevation
        sx={{
          borderRadius: "25px",
          my: "10px",
          minWidth: { xs: 165, md: 270 },
          py: 1,
          textAlign: "center",
          cursor: "pointer",
          bgcolor: "background.paper",
        }}
        onClick={() => setConfirmDialogOpen(true)}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Swap
        </Typography>
      </Button>
    )

    return (
      <Box
        fullWidth
        sx={{ background: theme.palette.background.paper, height: 10 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              position: "absolute",
              top: -30,
              left: 0,
              display: "flex",
              justifyContent: { xs: "space-around", md: "space-between" },
              width: "100%",
            }}
          >
            {onMobile ? (
              <SwapButton />
            ) : (
              <>
                <Box sx={{ flex: 1 }} />
                <Box
                  sx={{
                    width: 71,
                    height: 71,
                    background: theme.palette.background.paper,
                    borderRadius: "50%",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  onClick={swapCoins}
                >
                  <Logo
                    id="swap-button"
                    className="swap"
                    size={71}
                    style={{ margin: "auto" }}
                  />
                </Box>
                <div style={{ flex: 1, margin: "auto", display: "flex" }}>
                  <div style={{ flex: 1 }} />
                  <SwapButton />
                </div>
              </>
            )}
          </Container>
        </Container>
      </Box>
    )
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        color: theme.palette.background.paper,
      }}
    >
      <Head>
        <title>Swap Meet - LS Swap</title>
        <meta
          name="description"
          content="LS Swap - Swap Meet Page - exchange between different tokens"
        />
      </Head>
      <Box sx={{ background: currencies[coin1].color, flex: 1 }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            pt: { xs: 1, sm: 2, md: 4 },
            pb: 4,
          }}
        >
          <HeaderText
            header={"Swap Meet - Exchange Tokens"}
            description={
              "Select which token you would like to swap for and how much you\n" +
              "wish to trade. The exchange rate is an approximation of how much\n" +
              "you will receive and could differ."
            }
          />
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                flexFlow: "wrap",
                alignItems: { xs: "flex-start", md: "center" },
                alignContent: "flex-start",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 18, md: 24 },
                    minWidth: { xs: 50, md: 67 },
                  }}
                >
                  FROM
                </Typography>
                <Box
                  sx={{
                    cursor: "pointer",
                    maxWidth: { xs: 64, sm: 84, md: 114 },
                    textAlign: "center",
                  }}
                  onClick={() => setCoin1DialogOpen(true)}
                >
                  <Coin sx={{ mx: "12px", mt: { xs: 3, md: 4 } }}>
                    {currencies[coin1].short_name}
                  </Coin>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 14, sm: 18, md: 24 },
                      mt: -1,
                    }}
                  >
                    {currencies[coin1].name}
                  </Typography>
                </Box>
                <CoinPickerDialog
                  currencies={currencies}
                  setCoin={setCoin1}
                  open={coin1DialogOpen}
                  onClose={() => setCoin1DialogOpen(false)}
                  currentCoins={[coin1, coin2]}
                />
                <TextField
                  variant="outlined"
                  value={coin1Value}
                  onChange={(e) => setCoin1Value(force_decimal(e.target.value))}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="text"
                          color="primary"
                          onClick={setMax}
                          sx={{ minWidth: 45 }}
                        >
                          Max
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="0.00"
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2, mt: { xs: 0, md: 6 } }}>
                <Typography>
                  <strong>Exchange Rate:</strong>
                  <br />
                  <strong>Current Balance:</strong>
                </Typography>
                <Typography>
                  {get(coinData, `${coin1}.${coin2}`, "XX.XX")}{" "}
                  {currencies[coin2].name} per {currencies[coin1].name} <br />
                  {get(coinData, `${coin1}.balance`, "0")}{" "}
                  <strong>{currencies[coin1].name}</strong> <br />
                  {get(coinData, `${coin1}.usd_amt`, "0")} <strong>USD</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <MiddleBar />
      <div style={{ background: currencies[coin2].color, flex: 1 }}>
        <Container
          maxWidth="xl"
          sx={{ height: "100%", pt: { xs: 4, sm: 6, md: 10 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexFlow: "wrap",
              alignItems: { xs: "flex-start", md: "center" },
              alignContent: "flex-start",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 18, md: 24 },
                  minWidth: { xs: 50, md: 67 },
                }}
              >
                TO
              </Typography>
              <Box
                sx={{
                  cursor: "pointer",
                  maxWidth: { xs: 64, sm: 84, md: 114 },
                  textAlign: "center",
                }}
                onClick={() => setCoin2DialogOpen(true)}
              >
                <Coin sx={{ mx: "12px", mt: { xs: 3, md: 4 } }}>
                  {currencies[coin2].short_name}
                </Coin>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 14, sm: 18, md: 24 },
                    mt: -1,
                  }}
                >
                  {currencies[coin2].name}
                </Typography>
              </Box>
              <CoinPickerDialog
                currencies={currencies}
                setCoin={setCoin2}
                open={coin2DialogOpen}
                onClose={() => setCoin2DialogOpen(false)}
                currentCoins={[coin1, coin2]}
              />
              <TextField
                variant="outlined"
                value={coin2Value}
                onChange={(e) => setCoin2Value(force_decimal(e.target.value))}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="text"
                        color="primary"
                        disabled
                        sx={{ minWidth: 45 }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="0.00"
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 0, md: 6 } }}>
              <Typography>
                <strong>Exchange Rate:</strong>
                <br />
                <strong>Current Balance:</strong>
              </Typography>
              <Typography>
                {get(coinData, `${coin2}.${coin1}`, "XX.XX")}{" "}
                {currencies[coin1].name} per {currencies[coin2].name} <br />
                {get(coinData, `${coin2}.balance`, "0")}{" "}
                <strong>{currencies[coin2].name}</strong> <br />
                {get(coinData, `${coin2}.usd_amt`, "0")} <strong>USD</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle>Please confirm your action</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="span">
              Please click &quot;confirm&quot; below to confirm your transaction
              of exchanging{" "}
              <strong>
                {coin1Value} {currencies[coin1].name}
              </strong>{" "}
              into approximately{" "}
              <strong>
                {coin2Value} {currencies[coin2].name}
              </strong>
              .
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              onClick={executeExchange}
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
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: await getCoinData(),
    },
  }
}
