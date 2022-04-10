import React from "react"
import { ResponsiveLine } from "@nivo/line"
import { useTheme } from "@mui/material/styles"
import moment from "moment"

import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Coin from "./coin"

export default function MyResponsiveLine({
  chartData,
  coin1,
  coin2 /* see data tab */,
}) {
  const [time, setTime] = React.useState("")
  const [value, setValue] = React.useState("1")
  const data = chartData.data

  React.useEffect(() => resetValues(), [])

  const resetValues = () => {
    const mostRecentPoint = data[data.length - 1]
    setTime(moment(mostRecentPoint.x).format("dddd, MMMM D - h:mm:ss A"))
    setValue(mostRecentPoint.y)
  }

  const theme = useTheme()

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
      <Box sx={{ padding: 1, bgcolor: "#FFF3F2" }}>
        <Typography variant="h6">
          {value} {chartData.id.split("-")[1]} per {chartData.id.split("-")[0]}
        </Typography>
        <Typography>{time}</Typography>
        <Box sx={{ height: { xs: 200, md: 250 } }}>
          <ResponsiveLine
            data={[chartData]}
            margin={{ top: 0, right: 50, bottom: 30, left: 0 }}
            theme={nivoTheme}
            onMouseMove={(point, event) => {
              setTime(point.data.xFormatted)
              setValue(point.data.yFormatted)
            }}
            onMouseLeave={resetValues}
            colors={theme.palette.primary.main}
            xScale={{ format: "%Y-%m-%dT%H:%M:%S", type: "time" }}
            yScale={{ type: "linear", min: 0, max: "auto" }}
            yFormat=" >-.3f"
            xFormat="time:%A, %B %d - %X"
            areaBaselineValue={0}
            curve="catmullRom"
            lineWidth={3}
            axisTop={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: "every 30 minutes",
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
            enableGridX={true}
            enableGridY={true}
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
