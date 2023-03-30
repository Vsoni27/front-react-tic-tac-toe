import React from "react"
import { Box, Typography, Stack, Button } from "@mui/material"

const mapping = {
  0: "/i.svg",
  1: "/ii.svg",
  2: "/iii.svg",
  3: "/iii.svg",
  4: "/iv.svg",
  5: "/v.svg",
  6: "/vi.svg",
}

const DiceRollBoard = ({ state: { round, points, move, players_idx }, socket, account }) => {
  const myPlayerIdx = players_idx[account]
  const opponentPlayerIdx = +!myPlayerIdx

  const rollDice = () => {
    socket.emit("state:server")
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
        <Box
          src={mapping[move[opponentPlayerIdx]]}
          component="img"
          height="240px"
          width="240px"
          sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
        />
      ) : (
        <Box height="240px" width="240px" sx={{ border: "2px solid red", p: "12px", borderRadius: "24px" }} />
      )}

      {move[myPlayerIdx] !== null ? (
        <Box
          src={mapping[move[myPlayerIdx]]}
          component="img"
          height="240px"
          width="240px"
          sx={{ bgcolor: "#E5E4E2", p: "12px", borderRadius: "24px" }}
        />
      ) : (
        <Box height="240px" width="240px" sx={{ border: "2px solid red", p: "12px", borderRadius: "24px" }} />
      )}

      <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={2} sx={{ bgcolor: "#E5E4E2", borderRadius: "6px" }}>
        <Button onClick={rollDice} disabled={Boolean(move[myPlayerIdx] !== null)} variant="contained" color="error" size="large">
          Roll Dice
        </Button>
      </Stack>
    </Stack>
  )
}

export default DiceRollBoard
