import React, { useState, useEffect } from "react"
import { Stack, Typography } from "@mui/material"

const Waiting = () => {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      switch (dots) {
        case "":
          setDots(".")
          break
        case ".":
          setDots(". .")
          break
        case ". .":
          setDots(". . .")
          break
        case ". . .":
          setDots("")
          break
        default:
          setDots("")
      }
    }, 500)

    return () => clearInterval(interval)
  }, [dots])

  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <Typography variant="h4" fontWeight="bold">
        Waiting for other player <span className="dots">{dots}</span>
      </Typography>
    </Stack>
  )
}

export default Waiting
