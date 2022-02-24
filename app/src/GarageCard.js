import React, { useEffect, useState, useMemo } from "react"
import map from "lodash/map"
import at from "lodash/at"
import take from "lodash/take"
import takeRight from "lodash/takeRight"

import Collapse from "@mui/material/Collapse"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { useWidth } from "../utils/hooks"

export default function GarageCard({ color, netWorth, data }) {
  const onMobile = ["xs", "sm"].includes(useWidth())
  const [expanded, setExpanded] = useState(!onMobile)

  useEffect(() => {
    setExpanded(expanded || !onMobile)
  }, [onMobile, expanded])

  const displayData = useMemo(() => {
    if (!onMobile) return data

    return {
      headers: at(data.headers, data.mobile_cols),
      values: map(data.values, (r) => at(r, data.mobile_cols)),
    }
  }, [onMobile, data])
  const showExpandOption = displayData.values.length > 3

  return (
    <Paper
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      elevation={4}
    >
      <Box
        sx={{
          bgcolor: color,
          color: "white",
          borderRadius: { xs: "10px 10px 0 0", md: "10px 0 0 10px" },
          display: "flex",
          minWidth: 250,
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: { xs: "left", md: "center" },
            width: "100%",
          }}
        >
          Total Net Worth (USD):
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 24,
            textAlign: { xs: "right", md: "center" },
            width: "100%",
          }}
        >
          ${netWorth}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: `repeat(${displayData.headers.length}, 1fr)`,
          }}
        >
          {map(displayData.headers, (header, idx) => (
            <Typography
              key={`garage-header-${idx}`}
              className="grid-item"
              sx={{ color: "#800F2F", fontWeight: "bold", p: 1 }}
            >
              {header}
            </Typography>
          ))}
          {map(take(displayData.values, 3), (d, row) =>
            map(d, (item, idx) => (
              <Typography
                key={`garage-data-${row}-${idx}`}
                className="grid-item"
                sx={{ p: 1 }}
              >
                {item}
              </Typography>
            ))
          )}
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
              (d, row) =>
                map(d, (item, idx) => (
                  <Typography
                    key={`garage-expanded-${row}-${idx}`}
                    className="grid-item"
                    sx={{ p: 1 }}
                  >
                    {item}
                  </Typography>
                ))
            )}
          </Box>
        </Collapse>
      </Box>
      <Button
        sx={{
          bgcolor: `${color}!important`,
          color: "white",
          borderRadius: "0 0 10px 10px",
          p: 1,
          display: onMobile ? "flex" : "none",
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
    </Paper>
  )
}
