import * as React from "react"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import LineChart from "../src/LineChart"
import { getGraphData } from "../lib/graphData"
import Head from "next/head"
import { getCoinData } from "../lib/api/coins"
import HeaderText from "../src/headerText"

export default function Specs({ initialData, currencies }) {
  const [data, setData] = React.useState(initialData)

  React.useEffect(() => {
    const updateData = async () => {
      const new_data = await getGraphData()
      setData(new_data)
    }

    setInterval(updateData, 30 * 1000)
  }, [])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Head>
        <title>Spec Sheet - LS Swap</title>
        <meta
          name="description"
          content="LS Swap - Spec Sheet - View Data About the Exchanges"
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
            header="Spec Sheet - View Data About the Exchanges "
            description="View historical details about the price of each supported coin pair."
          />
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#FFF3F2", height: "100%", width: "100%" }}>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 2,
            my: 2,
          }}
          maxWidth="xl"
        >
          {data.map((d, idx) => {
            const coin1 = `coin_${d.id.split(" - ")[0].slice(-1).toLowerCase()}`
            const coin2 = `coin_${d.id.split(" - ")[1].slice(-1).toLowerCase()}`

            return (
              <LineChart
                key={idx}
                chartData={d}
                coin1={currencies[coin1]}
                coin2={currencies[coin2]}
              />
            )
          })}
        </Container>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      initialData: await getGraphData(),
      currencies: await getCoinData(),
    },
    revalidate: 30,
  }
}
