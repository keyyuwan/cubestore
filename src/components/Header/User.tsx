import { Session } from "next-auth"
import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface UserProps {
  showProfileData: boolean
  isHeaderDarker: boolean
  session: Session
}

export function User({ showProfileData, isHeaderDarker, session }: UserProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="1rem" textAlign="right">
          <Text fontWeight="medium" color={isHeaderDarker && "#f0f2f5"}>
            {session.user.name}
          </Text>
          <Text color="gray.500" fontSize="small">
            {session.user.email}
          </Text>
        </Box>
      )}

      <Avatar
        name={session.user.name}
        src={session.user.image}
        cursor="pointer"
      />
    </Flex>
  )
}
