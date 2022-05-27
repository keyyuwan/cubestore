import { ReactNode } from "react"
import { Box, BoxProps } from "@chakra-ui/react"

interface ContainerProps extends BoxProps {
  children: ReactNode
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Box maxW={1280} mx="auto" px="2rem" {...rest}>
      {children}
    </Box>
  )
}
