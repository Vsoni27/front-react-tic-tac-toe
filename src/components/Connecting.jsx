import * as React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import { Stack, Typography } from "@mui/material"

const Connecting = () => {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center" gap={4}>
      <CircularProgress size={80} />
      <Typography variant="h4" fontWeight="bold">
        Connecting
      </Typography>
    </Stack>
  )
}

export default Connecting
