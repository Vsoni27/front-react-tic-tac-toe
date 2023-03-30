import React from "react"
import { Link } from "react-router-dom"
import { Stack, Button, Box } from "@mui/material"
import { useMoralis } from "react-moralis"

const mapping = {
  ttt: {
    svg: "/tic-tac-toe.svg",
    link: "/game/tic-tac-toe",
  },
  sps: {
    svg: "/stone-paper-scissors.svg",
    link: "/game/stone-paper-scissors",
  },
  dr: {
    svg: "/dice-roll.svg",
    link: "/game/dice-roll",
  },
}

const Card = ({ game }) => {
  const { account } = useMoralis()

  return (
    <Stack sx={{ bgcolor: "#E5E4E2", borderRadius: "10px" }}>
      <Box component="img" src={mapping[game].svg} height="300px" width="300px" sx={{ p: "24px" }} />

      {account ? (
        <Link to={mapping[game].link}>
          <Button color="error" variant="contained" sx={{ width: "100%", borderStartStartRadius: 0, borderStartEndRadius: 0 }}>
            Play
          </Button>
        </Link>
      ) : (
        <Button variant="contained" disabled={true} sx={{ width: "100%", borderStartStartRadius: 0, borderStartEndRadius: 0 }}>
          Connect Wallet
        </Button>
      )}
    </Stack>
  )
}

export default Card
