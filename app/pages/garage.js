import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import moment from "moment"
import { v4 as uuidv4 } from "uuid"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import HeaderText from "../src/headerText"
import GarageCard from "../src/GarageCard"
import TransactionCard from "../src/transactionCard"
import { AuthContext } from "../src/authContext"
import { getCoinData } from "../lib/api/coins"

export default function Garage({
  currencies,
  wallet_data,
  stake_data,
  transaction_data,
}) {
  const router = useRouter()
  const { isAuthed, isAuthLoading, authedFetch } = React.useContext(AuthContext)
  const [walletData, setWalletData] = React.useState(wallet_data)
  const [transactionData, setTransactionData] = React.useState(transaction_data)

  React.useEffect(async () => {
    console.log({ isAuthed, isAuthLoading })
    if (!isAuthed && !isAuthLoading) await router.push("/")

    const wallet_data = await authedFetch("/wallet?format=table")
    setWalletData(wallet_data)

    const txn_data = await authedFetch("/transactions")
    setTransactionData(txn_data)
  }, [isAuthed, isAuthLoading])

  const subheaderStyle = { color: "#800F2F", fontSize: 24, fontWeight: "bold" }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Head>
        <title>Garage - LS Swap</title>
        <meta
          name="description"
          content="LS Swap - Garage Page - View your own personal stats"
        />
      </Head>
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
            pb: 8,
          }}
        >
          <Typography variant="h3" sx={subheaderStyle}>
            Wallet
          </Typography>
          <GarageCard color="#C25B78" netWorth="XXXXX.XX" data={walletData} />
          <Typography variant="h3" sx={subheaderStyle}>
            Stakes
          </Typography>
          <GarageCard color="#273276" netWorth="XXXXX.XX" data={stake_data} />
          <Typography variant="h3" sx={subheaderStyle}>
            Transactions
          </Typography>
          <TransactionCard data={transactionData} />
        </Container>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currencies: await getCoinData(),
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
      transaction_data: {
        headers: [
          "Date",
          "Description",
          "Amount (Token)",
          "Amount (Token)",
          "Worth (USD)",
          "ID",
        ],
        values: [
          [
            moment().format("ll"),
            "Pool Transfer - Coin A and Coin B",
            "- 100 Coin A",
            "- 10 Coin B",
            "$XXX.XX",
            uuidv4(),
          ],
          [
            moment().format("ll"),
            "Pool Transfer - Coin B and Coin C",
            "- 10 Coin B",
            "- 5 Coin C",
            "$XXX.XX",
            uuidv4(),
          ],
          [
            moment().format("ll"),
            "Swap - Coin A and Coin B",
            "- 100 Coin A",
            "+ 10 Coin B",
            "$XXX.XX",
            uuidv4(),
          ],
          [
            moment().subtract(1, "days").format("ll"),
            "Pool Transfer - Coin B and Coin C",
            "- 10 Coin B",
            "- 5 Coin C",
            "$XXX.XX",
            uuidv4(),
          ],
          [
            moment().subtract(1, "days").format("ll"),
            "Swap - Coin A and Coin B",
            "- 100 Coin A",
            "+ 10 Coin B",
            "$XXX.XX",
            uuidv4(),
          ],
          [
            moment().subtract(5, "days").format("ll"),
            "Pool Transfer - Coin B and Coin C",
            "- 10 Coin B",
            "- 5 Coin C",
            "$XXX.XX",
            uuidv4(),
          ],
        ],
        mobile_cols: [0, 1, 4],
      },
    },
  }
}
