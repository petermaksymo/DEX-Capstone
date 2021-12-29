import React from "react"
import Link from "next/link"

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function Liquidity({ currencies }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Your Liquidity
        </Typography>
      </Box>

      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4">Your Liquidity</Typography>
          <Typography variant="body2">
            Trade in your LP tokens to get your pair of tokens back. Or open new
            positions with the button below.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ padding: 2, display: "flex", flexFlow: "row wrap", gap: 1 }}>
          <Typography>
            No Liquidity Found, click on th button below to add liquidity.
          </Typography>
        </Box>
        <Divider />
        <Link href="/liquidity/add" passHref>
          <Button
            sx={{ margin: "16px auto", minWidth: "80%" }}
            variant="contained"
            color="primary"
          >
            Add Liquidity
          </Button>
        </Link>
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
