import React, { useState } from "react"

import { useTheme } from "@mui/material"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import { getCoinData } from "../../lib/coins"
import Coin from "../../src/coin"
import Logo from "../../src/logo"
import CoinPickerDialog from "../../src/coinPickerDialog"
import { useWidth } from "../../utils/hooks"
import HeaderText from "../../src/headerText"

export default function Swap({ currencies }) {
  const theme = useTheme()
  const [coin1, setCoin1] = useState("coin_a")
  const [coin1Value, setCoin1Value] = useState("")
  const [coin1DialogOpen, setCoin1DialogOpen] = useState(false)
  const [coin2, setCoin2] = useState("usd")
  const [coin2Value, setCoin2Value] = useState("")
  const [coin2DialogOpen, setCoin2DialogOpen] = useState(false)
  const [swapRotation, setSwapRotation] = useState(180)

  // Cleans a string into a decimal
  const force_decimal = (val) => {
    // replace non-digits and periods
    val = val.replace(/[^\d.]/g, "")
    const idx_decimal = val.indexOf(".")

    // only keep the first decimal point
    if (idx_decimal >= 0) {
      val = val.replace(/\./g, "")
      val = val.substring(0, idx_decimal) + "." + val.substring(idx_decimal)
    }
    return val
  }

  const setMax = () => {
    setCoin1Value("9000")
  }

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

  const executeExchange = () => {
    console.log("exchange")

    const swap_button = document.getElementById("swap-button")
    swap_button.classList.add("rotating")
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

  const CoinSwap = ({ coinNum }) => {
    const stateValues = {
      coin1,
      coin2,
      coin1Value,
      coin2Value,
      coin1DialogOpen,
      coin2DialogOpen,
    }

    const stateSetters = {
      setCoin1,
      setCoin2,
      setCoin1Value,
      setCoin2Value,
      setCoin1DialogOpen,
      setCoin2DialogOpen,
    }

    return (
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
            {coinNum === 1 ? "FROM" : "TO"}
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              maxWidth: { xs: 64, sm: 84, md: 114 },
              textAlign: "center",
            }}
            onClick={() => stateSetters[`setCoin${coinNum}DialogOpen`](true)}
          >
            <Coin sx={{ mx: "12px", mt: { xs: 3, md: 4 } }}>
              {currencies[stateValues[`coin${coinNum}`]].short_name}
            </Coin>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 14, sm: 18, md: 24 },
                mt: -1,
              }}
            >
              {currencies[stateValues[`coin${coinNum}`]].name}
            </Typography>
          </Box>
          <CoinPickerDialog
            currencies={currencies}
            setCoin={stateSetters[`setCoin${coinNum}`]}
            open={stateValues[`coin${coinNum}DialogOpen`]}
            onClose={() => stateSetters[`setCoin${coinNum}DialogOpen`](false)}
          />
          <TextField
            variant="outlined"
            value={stateValues[`coin${coinNum}Value`]}
            onChange={(e) =>
              stateSetters[`setCoin${coinNum}Value`](
                force_decimal(e.target.value)
              )
            }
            InputProps={{
              sx: { background: theme.palette.background.paper },
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={setMax}
                    disabled={coinNum === 2}
                    sx={{ minWidth: 45 }}
                  >
                    {coinNum === 1 ? "Max" : "   "}
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
            XX.XX {currencies[stateValues[`coin${coinNum}`]].name} per{" "}
            {currencies[coinNum === 1 ? coin2 : coin1].name} <br />
            XXXXXXXX{" "}
            <strong>
              {currencies[stateValues[`coin${coinNum}`]].name}
            </strong>{" "}
            <br />
            XXXXXXXX <strong>USD</strong>
          </Typography>
        </Box>
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
            <CoinSwap coinNum={1} />
          </Box>
        </Container>
      </Box>
      <MiddleBar />
      <div style={{ background: currencies[coin2].color, flex: 1 }}>
        <Container
          maxWidth="xl"
          sx={{ height: "100%", pt: { xs: 4, sm: 6, md: 10 } }}
        >
          <CoinSwap coinNum={2} />
        </Container>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: getCoinData(),
    },
  }
}
