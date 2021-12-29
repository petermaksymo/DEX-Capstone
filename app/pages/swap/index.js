import React, { useState, useEffect } from 'react';

import { useTheme } from "@mui/material";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {getCoinData} from "../../lib/coins";
import Coin from '../../src/coin'
import Logo from '../../src/logo'

export default function Swap({ currencies }) {
  const theme = useTheme()
  const [coin1, setCoin1] = useState('coin_a')
  const [coin1Value, setCoin1Value] = useState('')
  const [coin2, setCoin2] = useState('usd')
  const [coin2Value, setCoin2Value] = useState('')
  const [swapRotation, setSwapRotation] = useState(180)

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
    const swap_button = document.getElementById('swap-button')
    swap_button.style.transform = `rotate(-${swapRotation}deg)`
    setSwapRotation(swapRotation + 180)

    setCoin1(coin2)
    setCoin1Value(coin2Value)
    setCoin2(coin1)
    setCoin2Value(coin1Value)
  }

  const executeExchange = () => {
    console.log('exchange')

    const swap_button = document.getElementById('swap-button')
    swap_button.classList.add('rotating')

  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', color: theme.palette.background.paper }}>
      <div style={{ background: currencies[coin1].color, flex: 1 }}>
        <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%'}}>
          <Box>
            <Typography variant='h4'>
              Swap Tokens
            </Typography>
            <Typography sx={{ ml: 2 }}>
              Select which token you would like to swap for and how much you wish to trade. The exchange rate is an approximation of how much you will receive and could differ.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexFlow: 'wrap', mb: 12 }}>
            <Typography variant='h5' sx={{ flex: 1, fontWeight: 'bold', my: 'auto' }}>
              FROM
            </Typography>
            <Box sx={{ position: 'relative', mr: 4 }}>
              <Coin>
                A
              </Coin>
              <Typography variant='h6' sx={{ position: 'absolute', fontWeight: 'bold', mt: 1 }}>
                {currencies[coin1].name}
              </Typography>
            </Box>
            <TextField
              sx={{ my: 'auto', minWidth: 315 }}
              variant='outlined'
              value={coin1Value}
              onChange={e => setCoin1Value(force_decimal(e.target.value))}
              InputProps={{
                sx: { background: theme.palette.background.paper },
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
              placeholder='0.00'
            />
            <Box sx={{ flex: 4, my: 'auto', display: 'flex', gap: 2 }}>
              <Typography sx={{ ml: 'auto' }}>
                <strong>Current Balance:</strong>
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <Typography>
                  XXXXXXXX <strong>{currencies[coin1].name}</strong>
                </Typography>
                <Typography sx={{ position: 'absolute' }}>
                  XXXXXXXX <strong>USD</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Container maxWidth='xl' sx={{ position: 'relative', width: '100%', background: theme.palette.background.paper, height: 10, display: 'flex' }}>
        <Container maxWidth='xl' style={{ position: 'absolute', top: -30, left: 0, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ flex: 1 }}/>
          <div style={{ width: 71, height: 71, background: theme.palette.background.paper, borderRadius: '50%', display: 'flex', cursor: 'pointer' }} onClick={swapCoins}>
            <Logo id='swap-button' className='swap' size={71} style={{ margin: 'auto' }}/>
          </div>
          <div style={{ flex: 1, margin: 'auto', display: 'flex' }}>
            <div style={{ flex: 1 }}/>
            <Button
            variant='contained'
            color='inherit'
            sx={{ background: theme.palette.background.paper, color: theme.palette.primary.main, minWidth: 270, mx: 2 }}
            disableElevation
            onClick={executeExchange}
          >
            Swap
          </Button>
          </div>
        </Container>
      </Container>
      <div style={{ background: currencies[coin2].color, flex: 1 }}>
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 12 }}>
            <Typography variant='h5' sx={{ flex: 1, fontWeight: 'bold', my: 'auto' }}>
              TO
            </Typography>
            <Box sx={{ position: 'relative', mr: 4 }}>
              <Coin>
                A
              </Coin>
              <Typography variant='h6' sx={{ position: 'absolute', fontWeight: 'bold', mt: 1 }}>
                {currencies[coin2].name}
              </Typography>
            </Box>
            <TextField
              sx={{ my: 'auto', minWidth: 315  }}
              variant='outlined'
              value={coin2Value}
              onChange={e => setCoin2Value(force_decimal(e.target.value))}
              InputProps={{ sx: { background: theme.palette.background.paper } }}
              placeholder='0.00'
            />
            <Box sx={{ flex: 4, my: 'auto', display: 'flex', gap: 2 }}>
              <Typography sx={{ ml: 'auto' }}>
                <strong>Current Balance:</strong>
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <Typography>
                  XXXXXXXX <strong>{currencies[coin2].name}</strong>
                </Typography>
                <Typography sx={{ position: 'absolute' }}>
                  XXXXXXXX <strong>USD</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </main>
  );
}

export async function getStaticProps() {

  return {
    props: {
      currencies: getCoinData()
    }
  }
}