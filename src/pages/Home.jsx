import React from "react"
import { Typography, Button, Stack, Box } from "@mui/material"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center" overflow="auto">
      <Stack
        gap={6}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          border: "2px solid red",
          p: "32px",
          m: "32px",
          width: {
            sm: "400px",
            md: "800px",
          },
          borderRadius: "14px",
          bgcolor: "rgb(0,0,0,0.5)",
        }}
      >
        <Box component="img" src="/logo2.svg" height="140px" />

        <Typography variant="body1" textAlign="center" fontWeight="bold" fontSize="16px">
          Welcome to our blockchain gaming platform where players can compete in multiplayer games to win real prizes. Powered by the latest
          blockchain technology, our platform ensures secure and fair gameplay, while offering a diverse range of games and tournaments to
          satisfy all types of gamers. Join now and start playing to win!
        </Typography>

        <Link to="/games">
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "200px",
              height: "50px",
            }}
          >
            Play Now
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Home
