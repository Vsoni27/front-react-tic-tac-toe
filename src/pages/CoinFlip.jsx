import React, { useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { Navigate, useNavigate } from "react-router"
import { useSnackbar } from "notistack"
import { io } from "socket.io-client"
import CoinFlipBoard from "../components/boards/CoinFlipBoard"
import Waiting from "../components/Waiting"
import Connecting from "../components/Connecting"

const CoinFlip = () => {
  const { account } = useMoralis()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [waiting, setWaiting] = useState(false)
  const [state, setState] = useState(null)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/c-f`
    const socket = io(URL)
    setSocket(socket)

    socket.on("connect", () => socket.emit("addToGameLobby", { account }))

    socket.on("wait", () => setWaiting(true))

    socket.on("ready", ({ state }) => {
      setState(state)
      setWaiting(false)
    })

    socket.on("state:client", ({ state }) => setState(state))

    socket.on("finish", (winnerAccount) => {
      if (winnerAccount) {
        const message = winnerAccount === account ? "You Won!" : "You Lost!"
        const opts = { variant: winnerAccount === account ? "success" : "error", anchorOrigin: { vertical: "top", horizontal: "center" } }
        enqueueSnackbar(message, opts)
      } else {
        enqueueSnackbar("Draw!", { variant: "info", anchorOrigin: { vertical: "top", horizontal: "center" } })
      }

      socket.disconnect()
    })

    socket.on("error:playing_account", () => navigate("/games"))

    // socket.on("connect_error", () => {})

    socket.on("disconnect", () => navigate("/games"))

    return () => socket.disconnect()
  }, [])

  if (!account) return <Navigate to="/games" />

  if (state) return <CoinFlipBoard state={state} socket={socket} account={account} />

  if (waiting) return <Waiting />
  return <Connecting />
}

export default CoinFlip
