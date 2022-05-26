import { Box, Flex, Text } from "@chakra-ui/react"
import { Event, EventsName } from "../../utils/events"

interface EventCardProps {
  event: Event
  selected: boolean
  handleSelectEvent: (eventName: EventsName) => void
}

export function EventCard({
  event,
  selected,
  handleSelectEvent,
}: EventCardProps) {
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
      border={selected && "1.5px solid"}
      borderColor={selected && "gray.800"}
      onClick={() => handleSelectEvent(event.name)}
    >
      <Box as="span" className={event.className} fontSize="2xl" />
      <Text fontWeight="medium">{event.name}</Text>
    </Flex>
  )
}
