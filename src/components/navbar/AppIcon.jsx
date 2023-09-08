import { createIcon } from "@chakra-ui/react"
export const AppIcon = createIcon({
  displayName: "AppIcon",
  viewBox: "0 0 1000 1000",
  path: (
    <>
      <path
        fill="red"
        d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
      />
      <path
        fill="white"
        d="M818.2 339.1c-7.6-28.8-30.1-51.4-58.7-59.1-51.8-14-259.4-14-259.4-14s-207.7 0-259.4 14c-28.6 7.7-51.1 30.3-58.7 59.1-14 52.1-14 160.9-14 160.9s0 108.8 13.9 160.9c7.6 28.8 30.1 51.4 58.7 59.1 51.8 14 259.4 14 259.4 14s207.7 0 259.4-14c28.6-7.7 51.1-30.3 58.7-59.1C832 608.8 832 500 832 500s0-108.8-13.8-160.9zM432.1 598.7V401.3L605.6 500l-173.5 98.7z"
      />
    </>
  ),
})
