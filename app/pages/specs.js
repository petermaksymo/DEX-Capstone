import * as React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

import LineChart from "../src/LineChart"
import { getGraphData } from "../lib/graphData"
import Link from "../src/Link"
import Head from "next/head"

export default function Specs({ data }) {
  console.log(data)

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
        {data.map((d, idx) => (
          <Paper sx={{ padding: 2 }} key={idx}>
            <Typography variant="h6">
              <strong>{d.id}:</strong> {d.data[d.data.length - 1].y}{" "}
              {d.id.split("-")[1]} per {d.id.split("-")[0]}
            </Typography>
            <Box sx={{ height: { xs: 200, md: 250 } }}>
              <LineChart data={[d]} />
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  const data = await getGraphData()

  return {
    props: {
      data,
    },
    revalidate: 30
  }
}
