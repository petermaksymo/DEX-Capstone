import * as React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

import LineChart from "../src/LineChart"
import { getGraphData } from "../lib/graphData"
import Link from "../src/Link"

export default function Specs({ data }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Stats
        </Typography>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6:">{data[0].id}</Typography>
          <Box sx={{ height: 400 }}>
            <LineChart data={data} />
          </Box>
        </Paper>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  const data = getGraphData()

  return {
    props: {
      data,
    },
  }
}
