import React, { useEffect, useState } from "react"

import Collapse from "@mui/material/Collapse"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import useMediaQuery from "@mui/material/useMediaQuery"

import Coin from "./coin"

export default function LPCard({ coin1, coin2, stats }) {
  const onMobile = useMediaQuery("(max-width:580px)")
  const [expanded, setExpanded] = useState(!onMobile)

  useEffect(() => {
    setExpanded(expanded || !onMobile)
  }, [onMobile, expanded])

  const Detail = ({ title, value }) => (
    <>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Typography sx={{ textAlign: "right" }}>{value}</Typography>
    </>
  )

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: { xs: onMobile ? "100%" : 250, md: 300 },
      }}
      elevation={4}
    >
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
      <Box sx={{ pt: 2, px: 2, color: "#800F2F" }}>
        <Detail title="Total Pool Size" value={`${stats.pool_size} USD`} />
        <Detail title="Your Share of the Pool" value={`${stats.share} USD`} />
      </Box>

      <Collapse in={expanded}>
        <Box
          sx={{
            transition: "visibility 1s linear",
            visibility: expanded ? "visible" : "hidden",
          }}
        >
          <Box sx={{ pb: 2, px: 2, color: "#800F2F" }}>
            <Detail
              title={`${coin1.name} Owned`}
              value={`${stats.coin1Owned} ${coin1.name}`}
            />
            <Detail
              title={`${coin2.name} Owned`}
              value={`${stats.coin2Owned} ${coin2.name}`}
            />
            <Detail
              title={`${coin1.name} per ${coin2.name}`}
              value={`${stats.pool_size} ${coin1.name}`}
            />
            <Detail
              title={`${coin2.name} per ${coin1.name}`}
              value={`${stats.pool_size} ${coin2.name}`}
            />
          </Box>
          <Box sx={{ display: onMobile ? "none" : "flex" }}>
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
        </Box>
      </Collapse>

      <Button
        sx={{
          bgcolor: "#FFE8E6 !important",
          color: "#0E153E",
          borderRadius: "0 0 10px 10px",
          p: 1,
          display: onMobile ? "flex" : "none",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <>
            <ExpandLessIcon />
            Less Details
          </>
        ) : (
          <>
            <ExpandMoreIcon />
            More Details
          </>
        )}
      </Button>
    </Paper>
  )
}
