import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import map from "lodash/map"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import HeaderText from "../src/headerText"
import LPCard from "../src/lpCard"
import LiquidityAddWithdrawCard from "../src/liquidityAddWithdrawCard"
import { AuthContext } from "../src/authContext"
import { getCoinData } from "../lib/api/coins"

export default function Dealership({ currencies, pools }) {
  const router = useRouter()
  const { isAuthed, isAuthLoading, authedFetch } = React.useContext(AuthContext)

  React.useEffect(async () => {
    if (!isAuthed && !isAuthLoading) await router.push("/")
  }, [isAuthed, isAuthLoading])

  const sendpost = async ()=>{
    const formdata = new FormData()
    formdata.append('action', 'remove')
    formdata.append('coin1', 'coin_a')
    formdata.append('amount1', '12345')
    formdata.append('coin2', 'coin_b')


    const sendpooldata = await authedFetch("/pool?format=table", {
      method: "POST",
      body: formdata,
    })
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Head>
        <title>Dealership - LS Swap</title>
        <meta
          name="description"
          content="LS Swap - Dealership Page - add and remove liquidity in LS Swap pools"
        />
      </Head>
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
      <Box sx={{ bgcolor: "#FFF3F2", height: "100%", width: "100%" }}>
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {map(pools, (pool) => (
              <LPCard
                coin1={currencies[pool.coin1]}
                coin2={currencies[pool.coin2]}
                stats={pool.stats}
              />
            ))}
          </Box>
          <Box sx={{ width: "100%" }}>
            <LiquidityAddWithdrawCard currencies={currencies} sendpost={sendpost} />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: await getCoinData(),
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
