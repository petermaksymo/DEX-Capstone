import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

export default function Swap({ currencies }) {
  const [coin1, setCoin1] = useState('')
  const [coin1Value, setCoin1Value] = useState('')
  const [coin2, setCoin2] = useState('')
  const [coin2Value, setCoin2Value] = useState('')

  // Cleans a string into a decimal
  const force_decimal = (val) => {
    // replace non-digits and periods
    val = val.replace(/[^\d.]/g, '')
    const idx_decimal = val.indexOf('.')

    // only keep the first decimal point
    if(idx_decimal >= 0) {
      val = val.replace(/\./g, '')
      val = val.substring(0, idx_decimal) + '.' + val.substring(idx_decimal)
    }
    return val
  }

  const setMax = () => {
    setCoin1Value('9000')
  }

  const swapCoins = () => {
    setCoin1(coin2)
    setCoin1Value(coin2Value)
    setCoin2(coin1)
    setCoin2Value(coin1Value)
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Swap
        </Typography>
      </Box>

      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4">
            Swap Tokens
          </Typography>
          <Typography variant="body2">
            Select which token you would like to swap for and how much. The exchange rate is an approximation and could differ.
          </Typography>
        </Box>
        <Divider/>
        <Box sx={{ padding: 2, display: 'flex', flexFlow: 'row wrap', gap: 1 }}>
          <Typography sx={{ width: '100%' }}>
            <strong>From:</strong>
          </Typography>
          <NativeSelect sx={{ minWidth: 150 }} value={coin1} onChange={e => setCoin1(e.target.value)}>
            <option value=''> </option>
            { currencies.map(c => <option key={c} value={c}>{c}</option> )}
          </NativeSelect>
          <Box sx={{ flex: 1 }}/>
          <Typography>
            Balance: 1.1111 USD
          </Typography>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={setMax}
                  sx={(theme) => ({ cursor: 'pointer', color: theme.palette.primary.main })}
                  disableTypography
                >
                  Max
                </InputAdornment>
              )
            }}
            inputProps={{
              pattern: "/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/"
            }}
            value={coin1Value}
            onChange={(e) => setCoin1Value(force_decimal(e.target.value))}
            placeholder="0.00"
          />
        </Box>
        <Button sx={{ margin: 'auto' }} onClick={swapCoins}>
          <SwapVerticalCircleIcon fontSize="large"/>
        </Button>
        <Box sx={{ padding: 2, display: 'flex', flexFlow: 'row wrap', gap: 1 }}>
          <Typography sx={{ width: '100%' }}>
            <strong>To:</strong>
          </Typography>
          <NativeSelect sx={{ minWidth: 150 }} value={coin2} onChange={e => setCoin2(e.target.value)}>
            <option value=''> </option>
            { currencies.map(c => <option key={c} value={c}>{c}</option> )}
          </NativeSelect>
          <Box sx={{ flex: 1 }}/>
          <Typography>
            Balance: 0.000 USD
          </Typography>
          <TextField
            fullWidth
            value={coin2Value}
            onChange={(e) => setCoin2Value(force_decimal(e.target.value))}
            placeholder="0.00"
            inputProps={{
              pattern: "/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/"
            }}
          />
        </Box>
        <Button sx={{ margin: '16px auto', minWidth: '80%'}} variant="contained" color="primary">
          Swap
        </Button>
      </Paper>
    </Container>
  );
}

export async function getStaticProps() {

  return {
    props: {
      currencies: [ 'Coin1', 'Coin2', 'VBucks' ]
    }
  }
}