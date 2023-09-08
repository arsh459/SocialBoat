import { Box } from "@chakra-ui/react"
import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"

function App() {
  const [videos, setVideos] = useState([])
  return (
    <Box >
      <Navbar setVideos={setVideos} />
      <Home videos={videos} />
    </Box>
  )
}

export default App
