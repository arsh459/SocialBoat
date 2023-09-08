import { Grid, Text } from "@chakra-ui/react"
import Video from "./Video"

export default function Home({ videos }) {
  return (
    <>
      {videos.length !== 0 ? (
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap={4}
          p={4}
          bg="gray.100"
        >
          {videos.map((video) => {
            return <Video video={video} />
          })}
        </Grid>
      ) : (
        <Text color={"gray.900"} textAlign={"center"} p={4}>
          Please Enter Search Query......
        </Text>
      )}
    </>
  )
}
