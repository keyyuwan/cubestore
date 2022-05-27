import { signIn } from "next-auth/react"
import { Flex, Text } from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa"

export function SignInButton() {
  return (
    <Flex
      as="button"
      bg="gray.800"
      color="gray.50"
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
