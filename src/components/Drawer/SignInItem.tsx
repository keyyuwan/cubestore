import { signIn } from "next-auth/react"
import { Flex, FlexProps, Text } from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa"

type SignInItemProps = FlexProps

export function SignInItem({ ...rest }: SignInItemProps) {
  return (
    <Flex align="center" {...rest} onClick={() => signIn("google")}>
      <FaGoogle size={28} />
      <Text ml="1rem" fontSize="lg" fontWeight="semibold">
        Sign in with Google
      </Text>
    </Flex>
  )
}
