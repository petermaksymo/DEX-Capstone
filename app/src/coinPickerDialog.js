import React, { useState } from "react"
import map from "lodash/map"

import { useTheme } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogActions from "@mui/material/DialogActions"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

import Coin from "./coin"

const CoinPickerDialog = ({ currencies, setCoin, open, onClose }) => {
  const theme = useTheme()

  const handleCoinSelect = (coin) => {
    setCoin(coin)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Select a coin:</DialogTitle>
      <MenuList>
        {map(currencies, (c, key) => (
          <MenuItem onClick={() => handleCoinSelect(key)}>
            <ListItemIcon sx={{ color: theme.palette.background.paper, mr: 2 }}>
              <Coin style={{ maxWidth: 40 }}>{c.short_name}</Coin>
            </ListItemIcon>
            <ListItemText>{c.name}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
      <DialogActions>close</DialogActions>
    </Dialog>
  )
}

export default CoinPickerDialog
