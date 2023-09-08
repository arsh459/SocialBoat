import { Box, Center, Heading, Text, Stack, HStack } from "@chakra-ui/react"

export default function Video({ video }) {
  return (
    <Center py={2} h={"450px"}>
      <Box
        maxW={{ base: "350px", md: "450px" }}
        h={"450px"}
        w={"full"}
        bg="gray.800"
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"210px"} bg={"gray.100"} mb={6} pos={"relative"}>
          <Box
            as="video"
            controls
            src={video.video}
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            alt="Big Buck Bunny"
            objectFit="contain"
            sx={{
              aspectRatio: "16/9",
            }}
          />
        </Box>
        <Stack>
          <HStack>
            {video.tags.map((tag) => {
              return (
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {tag}
                </Text>
              )
            })}
          </HStack>

          <Heading color="white" fontSize={"2xl"} fontFamily={"body"}>
            {video.heading}
          </Heading>
          <Text color={"gray.500"}>{video.text.split(":")[1]}</Text>
        </Stack>
      </Box>
    </Center>
  )
}
