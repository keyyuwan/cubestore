import { Box, Flex, Text } from "@chakra-ui/react"

interface EventCardProps {
  className: string
  name: string
}

export function EventCard({ className, name }: EventCardProps) {
  return (
    <Flex
      as="button"
      minW="6rem"
      py="0.5rem"
      px="1rem"
      borderRadius={8}
      bg="gray.50"
      flexDir="column"
      align="center"
      justify="center"
      boxShadow="md"
      _hover={{ transform: "scale(1.1)" }}
      transition="0.2s"
    >
      <Box as="span" className={className} fontSize="2xl" />
      <Text fontWeight="medium">{name}</Text>
    </Flex>
  )
}
