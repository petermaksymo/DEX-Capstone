import {Typography} from "@mui/material";

const Coin = ({ children }) => (
  <div style={{ position: 'relative', height: 89 }}>
    <svg width="93" height="89" viewBox="0 0 93 89" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="44.5" cy="44.5" r="44.5" fill="#938400"/>
      <circle cx="48.5" cy="44.5" r="44.5" fill="#D2A400"/>
      <circle cx="49" cy="44" r="38" fill="#F4C006"/>
    </svg>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex' }}>
      <Typography variant='h3' sx={{ margin: 'auto', fontWeight: 'bold' }}>
        {children}
      </Typography>
    </div>
  </div>
)

export default Coin