import React, {useState} from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


export default function LiquidityAddWithdrawCard({}) {
  const [addMode, setAddMode] = useState(true)

  return (
    <Paper sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid', borderRightColor: 'background.paper'}} >
        <Button
          color='inherit'
          sx={{ flex: 1, bgcolor: addMode ? '#E37065 !important;' : 'background.paper', borderRadius: '10px 0 0 0', color: addMode ? 'background.paper' : '#E37065' }}
          onClick={() => setAddMode(true)}
        >
          Add
        </Button>
        <Button
          color='inherit'
          sx={{ flex: 1, bgcolor: !addMode ? '#E37065 !important;' : 'background.paper', borderRadius: '0 0 0 10px', color: !addMode ? 'background.paper' : '#E37065' }}
          onClick={() => setAddMode(false)}
        >
          Withdraw
        </Button>
      </Box>
      <Box sx={{display: 'flex', bgcolor: '#E37065', color: 'background.paper', gap: 3, alignItems: 'center', py: 1, width: '100%', borderRadius: '0 10px 10px 0', justifyContent: 'space-around' }}>
        <Box>
          test
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Net Worth Added:</Typography>
          <Typography sx={{ textAlign: 'right'}}>XXXXXX</Typography>
          <Typography sx={{ fontWeight: 'bold', ml: 1}}>USD</Typography>

          <Typography sx={{ fontWeight: 'bold' }}>New Pool Share:</Typography>
          <Typography sx={{ textAlign: 'right'}}>XX.XX</Typography>
          <Typography sx={{ fontWeight: 'bold', ml: 1}}>%</Typography>

          <Typography sx={{ fontWeight: 'bold' }}>LP Tokens Received:</Typography>
          <Typography sx={{ textAlign: 'right'}}>XXX</Typography>
          <Typography sx={{ fontWeight: 'bold', ml: 1}}>Tokens</Typography>
        </Box>
        <Box sx={{ minWidth: 95, textAlign: 'center' }}>
          <Button
            variant='contained'
            color='primary'
            disableElevation
          >
            {addMode ? 'Add' : 'Withdraw'}
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: 34 }}>

      </Box>
    </Paper>
  )
}