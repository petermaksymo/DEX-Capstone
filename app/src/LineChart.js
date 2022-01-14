import React from "react"
import { ResponsiveLine } from "@nivo/line"
import { useTheme } from "@mui/material/styles"
import minBy from "lodash/minBy"
import map from "lodash/map"

export default function MyResponsiveLine({ data /* see data tab */ }) {
  const theme = useTheme()

  const min = React.useMemo(() => {
    return minBy(map(data[0].data), "y").y * 0.9
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
    <ResponsiveLine
      data={data}
      theme={nivoTheme}
      colors={theme.palette.primary.main}
      xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
      yScale={{ type: "linear", min: min, max: "auto" }}
      yFormat=" >-.2f"
      areaBaselineValue={min}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      enableArea={true}
      areaOpacity={0.1}
      useMesh={true}
    />
  )
}
