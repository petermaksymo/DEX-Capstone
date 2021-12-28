import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to LS Swap
        </Typography>
        <Typography gutterBottom>
          LS Swap is a <strong>D</strong>ecentralized <strong>EX</strong>change (DEX) currently running on a private Diem testnet.
        </Typography>

        <Typography variant="h5" component="h1" gutterBottom>
          What is a DEX?
        </Typography>
        <Typography gutterBottom>
          A DEX allows users to exchange cryptocurrencies/tokens in a completely decentralized manner without the need for institutions.
          This is done through a collection of smart contracts to ensure security and reproducibility.
        </Typography>

        <Typography variant="h5" component="h1" gutterBottom>
          How does a DEX work?
        </Typography>
        <Typography gutterBottom>
          DEXs rely on liquidity pools in order to function properly.
          These are stored reserves of all of the different tokens in an exchange.
          A small commission fee will be charged for each exchange, growing the pool reserves.
          Users are incentivized to provide liquidity to pools to gain the commission fees.
          In exchange for providing liquidity, a user will get a proof of liquidity (LP) token.
          They can then later trade in their LP tokens to gain back their proportion of of the liquidity pool.
        </Typography>
      </Box>
    </Container>
  );
}
