import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface UserProps {
  showProfileData: boolean
  isHeaderDarker: boolean
}

export function User({ showProfileData, isHeaderDarker }: UserProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="1rem" textAlign="right">
          <Text fontWeight="medium" color={isHeaderDarker && "#f0f2f5"}>
            Key Yu Wan
          </Text>
          <Text color="gray.500" fontSize="small">
            @keyflcbyuwan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        name="Key Yu Wan"
        src="https://github.com/keyyuwan.png"
        cursor="pointer"
      />
    </Flex>
  )
}
