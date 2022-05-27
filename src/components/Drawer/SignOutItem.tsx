import { signOut } from "next-auth/react"
import { Flex, FlexProps, Text } from "@chakra-ui/react"
import { FaSignOutAlt } from "react-icons/fa"

type SignOutItemProps = FlexProps

export function SignOutItem({ ...rest }: SignOutItemProps) {
  return (
    <Flex onClick={() => signOut()} align="center" {...rest}>
      <FaSignOutAlt size={28} color="red" />
      <Text ml="1rem" fontSize="lg" fontWeight="semibold" color="red">
        Sign out
      </Text>
    </Flex>
  )
}
