import Box from "@mui/material/Box"

const Coin = ({ children, ...props }) => (
  <Box {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44.5" cy="44.5" r="44.5" fill="#938400" />
      <circle cx="48.5" cy="44.5" r="44.5" fill="#D2A400" />
      <circle cx="49" cy="44" r="38" fill="#F4C006" />
      <text x="34" y="60" fontSize="45" fontWeight="600" fill="white">
        {children}
      </text>
    </svg>
  </Box>
)

export default Coin
