import React from "react"
import { Box, Typography, Stack, Button } from "@mui/material"

const mapping = {
  0: "/stone.svg",
  1: "/paper.svg",
  2: "/scissors.svg",
}

const StonePaperScissorsBoard = ({ state: { round, points, move, players_idx }, socket, account }) => {
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

      {move[opponentPlayerIdx] !== null ? (
        <Box src={mapping[move[opponentPlayerIdx]]} component="img" height="200px" width="200px" sx={{ bgcolor: "#E5E4E2" }} />
      ) : (
        <Box height="200px" width="200px" sx={{ bgcolor: "rgba(0,0,0,0.5)", border: "2px solid red" }} />
      )}

      {move[myPlayerIdx] !== null ? (
        <Box src={mapping[move[myPlayerIdx]]} component="img" height="200px" width="200px" sx={{ bgcolor: "#E5E4E2" }} />
      ) : (
        <Box height="200px" width="200px" sx={{ bgcolor: "rgba(0,0,0,0.5)", border: "2px solid red" }} />
      )}

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
        >
          Stone
        </Button>
        <Button
          onClick={() => chooseChoice(1)}
          disabled={Boolean(move[myPlayerIdx] !== null)}
          variant="contained"
          color="error"
          size="large"
        >
          Paper
        </Button>
        <Button
          onClick={() => chooseChoice(2)}
          disabled={Boolean(move[myPlayerIdx] !== null)}
          variant="contained"
          color="error"
          size="large"
        >
          Scissors
        </Button>
      </Stack>
    </Stack>
  )
}

export default StonePaperScissorsBoard
