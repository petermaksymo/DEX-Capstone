import React, { useEffect, useState, useMemo } from "react"
import map from "lodash/map"
import at from "lodash/at"
import take from "lodash/take"
import takeRight from "lodash/takeRight"
import groupBy from "lodash/groupBy"

import Collapse from "@mui/material/Collapse"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { useWidth } from "../utils/hooks"

export default function TransactionCard({ data }) {
  const onMobile = ["xs", "sm"].includes(useWidth())
  const [expanded, setExpanded] = useState(!onMobile)

  useEffect(() => {
    setExpanded(expanded || !onMobile)
  }, [onMobile, expanded])

  const displayData = useMemo(() => {
    if (!onMobile) return data

    const headers = at(data.headers, data.mobile_cols)
    const valueGroups = groupBy(
      map(data.values, (r) => at(r, data.mobile_cols)),
      0
    )

    return {
      columns: onMobile ? headers.length - 1 : headers.length,
      headers,
      values: map(valueGroups, (g) => g),
    }
  }, [onMobile, data])
  const showExpandOption = displayData.values.length > 2

  const mobileTable = (
    <>
      <Box
        sx={{
          bgcolor: "#4E184C",
          color: "white",
          borderRadius: "10px 10px 0 0",
          height: 38,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: `1fr`,
          }}
        >
          {map(take(displayData.values, 2), (d) => (
            <>
              <Typography
                className="grid-item"
                sx={{
                  p: 1,
                  gridColumn: `span ${displayData.columns}`,
                  bgcolor: "#E4E4E4",
                  color: "#0E153E",
                }}
              >
                {d[0][0]}
              </Typography>
              {map(d, (row) =>
                map(
                  row,
                  (col, idx) =>
                    idx > 0 && (
                      <Typography className="grid-item" sx={{ p: 1 }}>
                        {col}
                      </Typography>
                    )
                )
              )}
            </>
          ))}
        </Box>
        <Collapse in={expanded}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: `1fr`,
            }}
          >
            {map(
              takeRight(displayData.values, displayData.values.length - 2),
              (d) => (
                <>
                  <Typography
                    className="grid-item"
                    sx={{
                      p: 1,
                      gridColumn: `span ${displayData.columns}`,
                      bgcolor: "#E4E4E4",
                      color: "#0E153E",
                    }}
                  >
                    {d[0][0]}
                  </Typography>
                  {map(d, (row) =>
                    map(
                      row,
                      (col, idx) =>
                        idx > 0 && (
                          <Typography className="grid-item" sx={{ p: 1 }}>
                            {col}
                          </Typography>
                        )
                    )
                  )}
                </>
              )
            )}
          </Box>
        </Collapse>
      </Box>
      <Collapse in={expanded}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: `repeat(${displayData.headers.length}, 1fr)`,
          }}
        >
          {map(
            takeRight(displayData.values, displayData.values.length - 3),
            (d) =>
              map(d, (item) => (
                <Typography className="grid-item" sx={{ p: 1 }}>
                  {item}
                </Typography>
              ))
          )}
        </Box>
      </Collapse>
      <Button
        sx={{
          bgcolor: `#4E184C !important`,
          color: "white",
          borderRadius: "0 0 10px 10px",
          p: 1,
          display: "flex",
          minHeight: 36,
        }}
        onClick={() => setExpanded(!expanded)}
        disabled={!showExpandOption}
      >
        {showExpandOption ? (
          expanded ? (
            <>
              <ExpandLessIcon />
              Less Details
            </>
          ) : (
            <>
              <ExpandMoreIcon />
              More Details
            </>
          )
        ) : null}
      </Button>
    </>
  )

  const desktopTable = (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${displayData.headers.length}, 1fr)`,
        }}
      >
        {map(displayData.headers, (header) => (
          <Typography
            className="grid-item"
            sx={{ color: "#800F2F", fontWeight: "bold", p: 1 }}
          >
            {header}
          </Typography>
        ))}
        {map(displayData.values, (d) =>
          map(d, (item) => (
            <Typography className="grid-item" sx={{ p: 1 }}>
              {item}
            </Typography>
          ))
        )}
      </Box>
    </Box>
  )

  return (
    <Paper
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      elevation={4}
    >
      {onMobile ? mobileTable : desktopTable}
    </Paper>
  )
}
