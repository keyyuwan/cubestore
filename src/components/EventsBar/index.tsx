import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import { EVENTS } from "../../utils/events"

interface EventsBarProps extends FlexProps {}

export function EventsBar({ ...rest }: EventsBarProps) {
  return (
    <Flex align="center" gap="1rem" overflowX="auto" {...rest}>
      {EVENTS.map((event) => (
        <Flex
          key={event.id}
          minW="6rem"
          py="0.5rem"
          px="1rem"
          borderRadius={8}
          bg="gray.50"
          flexDir="column"
          align="center"
          justify="center"
          cursor="pointer"
        >
          <Box as="span" className={event.className} fontSize="2xl" />
          <Text fontWeight="medium">{event.name}</Text>
        </Flex>
      ))}
    </Flex>
  )
}
