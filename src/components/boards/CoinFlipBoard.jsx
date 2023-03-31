import React from "react"
import { Box, Typography, Stack, Button } from "@mui/material"

const mapping = {
  0: "/H.svg",
  1: "/T.svg",
}

const CoinFlipBoard = ({ state: { round, points, move, players_idx, flippedCoin }, socket, account }) => {
  const myPlayerIdx = players_idx[account]
  const opponentPlayerIdx = +!myPlayerIdx

  const chooseChoice = (choice) => {
    socket.emit("state:server", { choice })
  }

  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center" gap={2}>
      <Typography variant="h4" fontWeight="bold">
        Round {round}
      </Typography>

      <Stack flexDirection="row" gap={10}>
        <Typography variant="body1" fontWeight="bold">
          My Score : {points[myPlayerIdx]}
        </Typography>

        <Typography variant="body1" fontWeight="bold">
          Opponent Score : {points[opponentPlayerIdx]}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        {flippedCoin !== null ? (
          <Box
            component="img"
            src={mapping[flippedCoin]}
            height="200px"
            width="200px"
            sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
          />
        ) : (
          <Box
            component="img"
            src="/coin-toss.svg"
            height="200px"
            width="200px"
            sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
          />
        )}
        <Typography variant="subtitle1" fontWeight="bold">
          Flipped Coin
        </Typography>
      </Stack>

      <Stack flexDirection="row" gap={4}>
        {move[myPlayerIdx] !== null ? (
          <Box
            src={mapping[move[myPlayerIdx]]}
            component="img"
            height="200px"
            width="200px"
            sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
          />
        ) : (
          <Box height="200px" width="200px" sx={{ bgcolor: "rgba(0,0,0,0.5)", border: "2px solid red", p: "12px", borderRadius: "24px" }} />
        )}

        {move[opponentPlayerIdx] !== null ? (
          <Box
            src={mapping[move[opponentPlayerIdx]]}
            component="img"
            height="200px"
            width="200px"
            sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
          />
        ) : (
          <Box height="200px" width="200px" sx={{ bgcolor: "rgba(0,0,0,0.5)", border: "2px solid red", p: "12px", borderRadius: "24px" }} />
        )}
      </Stack>

      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "6px" }}
      >
        <Button
          onClick={() => chooseChoice(0)}
          disabled={Boolean(move[myPlayerIdx] !== null)}
          variant="contained"
          color="error"
          size="large"
          sx={{ width: "100px" }}
        >
          Heads
        </Button>

        <Button
          onClick={() => chooseChoice(1)}
          disabled={Boolean(move[myPlayerIdx] !== null)}
          variant="contained"
          color="error"
          size="large"
          sx={{ width: "100px" }}
        >
          Tails
        </Button>
      </Stack>
    </Stack>
  )
}

export default CoinFlipBoard
