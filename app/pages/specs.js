import * as React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

import LineChart from "../src/LineChart"
import { getGraphData } from "../lib/graphData"
import Head from "next/head"
import { getCoinData } from "../lib/api/coins"

export default function Specs({ data, currencies }) {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>Spec Sheet - LS Swap</title>
        <meta
          name="description"
          content="LS Swap - Spec Sheet - View details about the different exchanges"
        />
      </Head>
      <Typography variant="h4" component="h1" gutterBottom>
        Spec Sheet
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 2,
        }}
      >
        {data.map((d, idx) => {
          const coin1 = `coin_${d.id.split(" - ")[0].slice(-1).toLowerCase()}`
          const coin2 = `coin_${d.id.split(" - ")[1].slice(-1).toLowerCase()}`

          return (
            <LineChart
              chartData={d}
              coin1={currencies[coin1]}
              coin2={currencies[coin2]}
            />
          )
        })}
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: await getGraphData(),
      currencies: await getCoinData(),
    },
    revalidate: 30,
  }
}
