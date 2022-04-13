import React from "react"
import { ResponsiveLine } from "@nivo/line"
import { useTheme } from "@mui/material/styles"
import moment from "moment"

import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Coin from "./coin"

const FACTORS = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]

export default function MyResponsiveLine({
  chartData,
  coin1,
  coin2,
  id,
}) {
  const [time, setTime] = React.useState("")
  const [value, setValue] = React.useState("")
  const [split, setSplit] = React.useState(30)
  const data = chartData.data

  React.useEffect(() => resetValues(), [data])

  React.useEffect(() => {
    const width = document.getElementById(id)?.offsetWidth || 300
    const diff_min = moment(data[data.length-1].x).diff(data[0].x, 'minutes')

    let new_split = 1
    let i = 0
    while(i < FACTORS.length-1) {
      if (diff_min / (width/80) > FACTORS[i])
        new_split = FACTORS[i+1]
      i += 1
    }

    setSplit(new_split)
  }, [data])

  const resetValues = () => {
    const mostRecentPoint = data[data.length - 1]
    setTime(moment(mostRecentPoint.x).format("dddd, MMMM DD - h:mm:ss A"))
    setValue(parseFloat(mostRecentPoint.y).toFixed(3))
  }

  const theme = useTheme()

  const max = React.useMemo(() => {
    return Math.max(...data.map((d) => d.y))
  }, [data])

  const nivoTheme = React.useMemo(() => ({
    background: "rgba(0, 0, 0, 0)",
    textColor: theme.palette.text.primary,
    fontSize: theme.typography.fontSize,
    axis: {
      domain: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 1,
      },
    },
  }))

  return (
    <Paper>
      <Box sx={{ display: "flex", color: "background.paper" }}>
        <Box
          sx={{
            bgcolor: coin1.color,
            flex: 1,
            borderRadius: "10px 0 0 0",
            display: "flex",
            py: 1,
            px: 2,
            gap: 1,
          }}
        >
          <Coin sx={{ width: 30 }}>{coin1.short_name}</Coin>
          <Typography
            sx={{ textTransform: "uppercase", mt: 1, fontWeight: "bold" }}
          >
            {coin1.name}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: coin2.color,
            flex: 1,
            borderRadius: "0 10px 0 0",
            display: "flex",
            py: 1,
            px: 2,
            gap: 1,
          }}
        >
          <Coin sx={{ width: 30 }}>{coin2.short_name}</Coin>
          <Typography
            sx={{ textTransform: "uppercase", mt: 1, fontWeight: "bold" }}
          >
            {coin2.name}
          </Typography>
        </Box>
      </Box>
      <Box id={id} sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, padding: 1 }}>
          <Typography variant="h6">
            {value} {chartData.id.split("-")[1]} per{" "}
            {chartData.id.split("-")[0]}
          </Typography>
          <Typography>{time}</Typography>
        </Box>
        <Box sx={{ height: { xs: 200, md: 250, lg:300 } }}>
          <ResponsiveLine
            data={[chartData]}
            margin={{ top: 8, right: 36, bottom: 28, left: 8 }}
            theme={nivoTheme}
            onMouseMove={(point, event) => {
              setTime(point.data.xFormatted)
              setValue(point.data.yFormatted)
            }}
            onMouseLeave={resetValues}
            colors={"#A4133C"}
            xScale={{ format: "%Y-%m-%dT%H:%M:%S%Z", type: "time" }}
            yScale={{ type: "linear", min: 0, max: max * 1.75 }}
            yFormat=" >-.3f"
            xFormat="time:%A, %B %d - %X"
            areaBaselineValue={0}
            curve="linear"
            lineWidth={3}
            axisTop={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: `every ${split} minutes`,
              format: "%I:%M %p",
              legend: "",
            }}
            axisRight={{
              orient: "right",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
            }}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            enableArea={true}
            areaOpacity={0.5}
            useMesh={true}
            tooltip={() => null}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            bgcolor: coin1.color,
            flex: 1,
            height: 40,
            borderRadius: "0 0 0 10px",
          }}
        />
        <Box
          sx={{
            bgcolor: coin2.color,
            flex: 1,
            height: 40,
            borderRadius: "0 0 10px 0",
          }}
        />
      </Box>
    </Paper>
  )
}
