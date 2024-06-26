import React, { createContext, useMemo, useContext } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext(null)

export const useSocket = () => {
  const socket = useContext(SocketContext)
  return socket
}

export const SocketProvider = (props) => {
  const socket = useMemo(
    () => io('https://video-calling-pied.vercel.app:5000/'),
    []
  )
  //const socket = useMemo(() => io('http://localhost:5000/'), []) //here comes the server hosted link
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  )
}
