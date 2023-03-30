import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { GameList, Home, Error404, TicTacToe, StonePaperScissors, DiceRoll } from "./pages"
import { Stack } from "@mui/material"

const App = () => {
  return (
    <Stack sx={{ height: "100vh", width: "100vw", bgcolor: "#000" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/game/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/game/stone-paper-scissors" element={<StonePaperScissors />} />
        <Route path="/game/dice-roll" element={<DiceRoll />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Stack>
  )
}

export default App
