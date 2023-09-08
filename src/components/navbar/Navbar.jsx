import { Box, Flex, Avatar } from "@chakra-ui/react"
import { SearchIcon, CloseIcon } from "@chakra-ui/icons"
import { SearchInput } from "@saas-ui/react"
import { AppIcon } from "./AppIcon"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Navbar({ setVideos }) {
  const [value, setValue] = useState("")

  function handleQuery(e) {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (value !== "") {
      axios
        .get(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${value}&numResults=${9}`
        )
        .then((res) => {
          setVideos(res.data.results)
        })
        .catch((err) => {
          alert("Server Error! Try Again in Few Seconds")
        })
    }
  }, [value])
  return (
    <Box bg="gray.300" position={"sticky"} top="0" left="0" zIndex={"2"}>
      <Box px={4} w={{ base: "100%", sm: "90%", md: "80%" }} m={"auto"}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          {/* App Icon */}
          <Box>
            <AppIcon
              width={{ base: "34", md: "46" }}
              height={{ base: "34", md: "46" }}
            />
          </Box>

          {/* Search Bar */}
          <Box w={{ base: "70%", sm: "80%", md: "60%", lg: "50%" }}>
            <SearchInput
              placeholder="Search"
              icon={<SearchIcon />}
              resetIcon={<CloseIcon />}
              value={value}
              onChange={handleQuery}
              onReset={() => setValue("")}
              style={{
                border: "1px solid #666",
                _focus: "border:2px solid #777",
              }}
            />
          </Box>

          {/* Avatar */}
          <Avatar
            size={{ base: "sm", md: "md" }}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </Flex>
      </Box>
    </Box>
  )
}
