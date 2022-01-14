import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"

import Logo from "../src/logo"
import StyledLink from "../src/Link"
import { useEffect } from "react"

const pages = [
  { title: "My Garage", link: "garage" },
  { title: "Swap Meet", link: "swap" },
  { title: "Dealership", link: "dealership" },
  { title: "Spec Sheet", link: "specs" },
  { title: "About Us", link: "about" },
]

const ResponsiveAppBar = () => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [currentRoute, setCurrentRoute] = React.useState(
    router.pathname.substring(1)
  )

  useEffect(() => setCurrentRoute(router.pathname.substring(1)), [router])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{ borderRadius: 0 }}
      color="secondary"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box
              sx={{ cursor: "pointer", display: { xs: "none", md: "flex" } }}
            >
              <Logo />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  my: "auto",
                  pointer: "cursor",
                }}
              >
                LS Swap
              </Typography>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.link} href={`/${page.link}`} passHref>
                  <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              pointer: "cursor",
              alignItems: "center",
            }}
          >
            <Logo />
            <StyledLink
              href="/"
              style={{ color: "unset", textDecoration: "none" }}
            >
              LS Swap
            </StyledLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.link} href={`/${page.link}`} passHref>
                <Button
                  key={page.link}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1,
                    color: "white",
                    display: "block",
                    textDecoration:
                      page.link === currentRoute
                        ? " underline !important;"
                        : "none",
                    minWidth: 110,
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
            <Link href="/garage" passHref>
              <Button variant="contained" color="primary">
                Sign in
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar