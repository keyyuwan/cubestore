import { signIn } from "next-auth/react"
import { Flex, Text } from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa"

interface SignInButtonProps {
  isHeaderDarker: boolean
}

export function SignInButton({ isHeaderDarker }: SignInButtonProps) {
  return (
    <Flex
      as="button"
      bg={isHeaderDarker ? "gray.50" : "gray.800"}
      color={isHeaderDarker ? "gray.800" : "gray.50"}
      h="3rem"
      borderRadius="3rem"
      px="1.5rem"
      align="center"
      justify="center"
      transition="0.2s"
      _hover={{ filter: "brightness(0.85)" }}
      onClick={() => signIn("google")}
    >
      <FaGoogle size={20} />
      <Text fontWeight="bold" mx="1rem">
        Sign in with Google
      </Text>
    </Flex>
  )
}
