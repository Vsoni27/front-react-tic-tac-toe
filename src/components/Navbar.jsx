import React from "react"
import { Stack, Box } from "@mui/material"
import { ConnectButton } from "@web3uikit/web3"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      sx={{ flexDirection: { xs: "column", sm: "row" }, p: "16px", borderBottom: "4px solid red", bgcolor: "rgba(0,0,0,0.5)" }}
    >
      <Link to="/">
        <Box component="img" src="/logo1.svg" height="65px" />
      </Link>
      <ConnectButton moralisAuth={false} />
    </Stack>
  )
}

export default Navbar
