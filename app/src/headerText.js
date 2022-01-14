import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function HeaderText({ header, description }) {
  return (
    <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
      <Typography variant="h5">{header}</Typography>
      <Typography sx={{ ml: { xs: 0, sm: 2 }, fontSize: { xs: 14, sm: 16 } }}>
        {description}
      </Typography>
    </Box>
  )
}
