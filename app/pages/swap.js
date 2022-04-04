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

export default function Swap({ currencies }) {
  const router = useRouter()
  const theme = useTheme()
  const { isAuthed, isAuthLoading, authedFetch } = React.useContext(AuthContext)
  const [balances, setBalances] = useState(null)

  React.useEffect(async () => {
    if (!isAuthed && !isAuthLoading) await router.push("/")

    const data = await authedFetch("/wallet")
    setBalances(data)
  }, [isAuthed, isAuthLoading])

  const [coin1, setCoin1] = useState("coin_a")
  const [coin1Value, setCoin1Value] = useState("")
  const [coin1DialogOpen, setCoin1DialogOpen] = useState(false)
  const [coin2, setCoin2] = useState("usd")
  const [coin2Value, setCoin2Value] = useState("")
  const [coin2DialogOpen, setCoin2DialogOpen] = useState(false)
  const [swapRotation, setSwapRotation] = useState(180)

  const setMax = () => setCoin1Value(get(balances, coin1, 0))

  const swapCoins = () => {
    console.log("swap coins")

    const swap_button = document.getElementById("swap-button")
    swap_button.style.transform = `rotate(-${swapRotation}deg)`
    setSwapRotation(swapRotation + 180)

    setCoin1(coin2)
    setCoin1Value(coin2Value)
    setCoin2(coin1)
    setCoin2Value(coin1Value)
  }

  const executeExchange = async () => {
    console.log("exchange")
    const formdata = new FormData()

    // console.log(coin1Value)

    formdata.append('from', coin1)
    formdata.append('to', coin2)
    formdata.append('amt', coin1Value)

    const sendpooldata = await authedFetch("/exchange", {
      method: "POST",
      body: formdata,
    })
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
        onClick={executeExchange}
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
                  XX.XX {currencies[coin1].name} per {currencies[coin2].name}{" "}
                  <br />
                  {get(balances, coin1, "0")}{" "}
                  <strong>{currencies[coin1].name}</strong> <br />
                  XXXXXXXX <strong>USD</strong>
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
                XX.XX {currencies[coin2].name} per {currencies[coin1].name}{" "}
                <br />
                {get(balances, coin2, "0")}{" "}
                <strong>{currencies[coin2].name}</strong> <br />
                XXXXXXXX <strong>USD</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
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
