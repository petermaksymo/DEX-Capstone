import React from "react"
import map from "lodash/map"

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import HeaderText from "../../src/headerText"
import LPCard from "../../src/lpCard"
import LiquidityAddWithdrawCard from "../../src/liquidityAddWithdrawCard";
import { getCoinData } from "../../lib/coins"

export default function Dealership({ currencies, pools }) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box
        sx={{
          bgcolor: "#E37065",
          color: "background.paper",
          py: { xs: 1, sm: 2, md: 6 },
        }}
      >
        <Container maxWidth="xl">
          <HeaderText
            header="Dealership - Add and Withdraw Liquidity"
            description="Select which pool you would like to add or withdraw liquidity from  and the amount. You will receive LP tokens for adding liquidity and burn LP tokens for withdrawing liquidity."
          />
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#FFF3F2", height: '100%', width: '100%' }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            gap: 4,
            mt: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {map(pools, (pool) => (
            <LPCard
              coin1={currencies[pool.coin1]}
              coin2={currencies[pool.coin2]}
              stats={pool.stats}
            />
          ))}
          <Box sx={{ width: '100%' }}>
            <LiquidityAddWithdrawCard />
          </Box>


        </Container>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: getCoinData(),
      pools: [
        {
          coin1: "coin_a",
          coin2: "coin_b",
          stats: {
            pool_size: "50000",
            share: "5.85%",
            coin1Owned: "502.52",
            coin2Owned: "4502.52",
          },
        },
        {
          coin1: "coin_b",
          coin2: "coin_c",
          stats: {
            pool_size: "60000",
            share: "2.85%",
            coin1Owned: "302.52",
            coin2Owned: "2502.52",
          },
        },
      ],
    },
  }
}
