import React, { useState } from "react"
import Link from "next/link"

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import InputAdornment from "@mui/material/InputAdornment"
import NativeSelect from "@mui/material/NativeSelect"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

export default function AddLiquidity({ currencies }) {
  const [coin1, setCoin1] = useState("")
  const [coin1Value, setCoin1Value] = useState("")
  const [coin2, setCoin2] = useState("")
  const [coin2Value, setCoin2Value] = useState("")

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

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Add Liquidity
        </Typography>
      </Box>

      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: 2, display: "flex" }}>
          <Link href="/liquidity" passHref>
            <IconButton
              sx={{ borderRadius: 2, mr: 2, py: 1, px: 0, mb: "auto" }}
            >
              <ArrowBackIosIcon sx={{ ml: 1 }} />
            </IconButton>
          </Link>
          <Box>
            <Typography variant="h4">Add Liquidity</Typography>
            <Typography variant="body2">
              Select which a token pair to add liquidity to that pool. After
              adding, you will recieve a proof of liquidity token in return.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: 2, display: "flex", flexFlow: "row wrap", gap: 1 }}>
          <NativeSelect
            sx={{ minWidth: 150 }}
            value={coin1}
            onChange={(e) => setCoin1(e.target.value)}
          >
            <option value=""> </option>
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </NativeSelect>
          <Box sx={{ flex: 1 }} />
          <Typography>Balance: 1.1111 USD</Typography>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={setMax}
                  sx={(theme) => ({
                    cursor: "pointer",
                    color: theme.palette.primary.main,
                  })}
                  disableTypography
                >
                  Max
                </InputAdornment>
              ),
            }}
            inputProps={{
              pattern: "/^[+-]?([0-9]+.?[0-9]*|.[0-9]+)$/",
            }}
            value={coin1Value}
            onChange={(e) => setCoin1Value(force_decimal(e.target.value))}
            placeholder="0.00"
          />
        </Box>
        <AddCircleIcon
          fontSize="large"
          sx={(theme) => ({
            color: theme.palette.primary.main,
            margin: "auto",
          })}
        />
        <Box sx={{ padding: 2, display: "flex", flexFlow: "row wrap", gap: 1 }}>
          <NativeSelect
            sx={{ minWidth: 150 }}
            value={coin2}
            onChange={(e) => setCoin2(e.target.value)}
          >
            <option value=""> </option>
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </NativeSelect>
          <Box sx={{ flex: 1 }} />
          <Typography>Balance: 0.000 USD</Typography>
          <TextField
            fullWidth
            value={coin2Value}
            onChange={(e) => setCoin2Value(force_decimal(e.target.value))}
            placeholder="0.00"
            inputProps={{
              pattern: "/^[+-]?([0-9]+.?[0-9]*|.[0-9]+)$/",
            }}
          />
        </Box>
        <Button
          sx={{ margin: "16px auto", minWidth: "80%" }}
          variant="contained"
          color="primary"
        >
          Add Token Pair
        </Button>
      </Paper>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: ["Coin1", "Coin2", "VBucks"],
    },
  }
}
