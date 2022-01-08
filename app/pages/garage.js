import React from "react"
import map from "lodash/map"

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import HeaderText from "../src/headerText"
import GarageCard from "../src/GarageCard"
import { getCoinData } from "../lib/coins"

export default function Garage({ currencies, wallet_data, stake_data }) {
  const subheaderStyle = { color: "#800F2F", fontSize: 24, fontWeight: "bold" }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          bgcolor: "#C25B78",
          color: "background.paper",
          py: { xs: 1, sm: 2, md: 6 },
        }}
      >
        <Container maxWidth="xl">
          <HeaderText
            header="My Garage - Monitor your Wallet"
            description="Monitor your past transactions, current stakes in pools, and your wallet balance. "
          />
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#FFF8FA", height: "100%", width: "100%" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mt: { xs: 1, sm: 2, md: 4 },
            mb: 8,
          }}
        >
          <Typography variant="h3" sx={subheaderStyle}>
            Wallet
          </Typography>
          <GarageCard color="#C25B78" netWorth="XXXXX.XX" data={wallet_data} />
          <Typography variant="h3" sx={subheaderStyle}>
            Stakes
          </Typography>
          <GarageCard color="#273276" netWorth="XXXXX.XX" data={stake_data} />
          <Typography variant="h3" sx={subheaderStyle}>
            Transactions
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: getCoinData(),
      wallet_data: {
        headers: [
          "Token",
          "Amount",
          "Available",
          "In Pool",
          "% in Pool",
          "Worth (USD)",
          "% of Net Worth",
        ],
        values: [
          [
            "Coin A",
            "XXXXX.XX",
            "XXX.XX",
            "XXX.XX",
            "XX.XX",
            "$XXX.XX",
            "XX.XX",
          ],
          [
            "Coin B",
            "XXXXX.XX",
            "XXX.XX",
            "XXX.XX",
            "XX.XX",
            "$XXX.XX",
            "XX.XX",
          ],
          [
            "Coin C",
            "XXXXX.XX",
            "XXX.XX",
            "XXX.XX",
            "XX.XX",
            "$XXX.XX",
            "XX.XX",
          ],
          [
            "Coin D",
            "XXXXX.XX",
            "XXX.XX",
            "XXX.XX",
            "XX.XX",
            "$XXX.XX",
            "XX.XX",
          ],
        ],
        mobile_cols: [0, 1, 5],
      },
      stake_data: {
        headers: [
          "Pool",
          "Amount (Token)",
          "Amount (Token)",
          "% of Pool",
          "Worth (USD)",
        ],
        values: [
          [
            "Coin A - Coin B",
            "XXXXX.XX Coin A",
            "XXXXX.XX Coin B",
            "XX.XX",
            "$XXX.XX",
          ],
          [
            "Coin B - Coin C",
            "XXXXX.XX Coin B",
            "XXXXX.XX Coin C",
            "XX.XX",
            "$XXX.XX",
          ],
          [
            "Coin A - Coin C",
            "XXXXX.XX Coin A",
            "XXXXX.XX Coin C",
            "XX.XX",
            "$XXX.XX",
          ],
        ],
        mobile_cols: [0, 3, 4],
      },
    },
  }
}
