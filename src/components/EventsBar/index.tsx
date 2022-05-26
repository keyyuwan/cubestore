import { Flex, FlexProps } from "@chakra-ui/react"
import { EVENTS, EventsName } from "../../utils/events"
import { EventCard } from "./EventCard"

interface EventsBarProps extends FlexProps {
  eventSelected: EventsName
  handleSelectEvent: (eventName: EventsName) => void
}

export function EventsBar({
  eventSelected,
  handleSelectEvent,
  ...rest
}: EventsBarProps) {
  return (
    <Flex
      p="0.5rem"
      pb="1rem"
      align="center"
      gap="1rem"
      overflowX="auto"
      {...rest}
    >
      {EVENTS.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          selected={eventSelected === event.name}
          handleSelectEvent={handleSelectEvent}
        />
      ))}
    </Flex>
  )
}
