import { Flex, FlexProps } from "@chakra-ui/react"
import { EVENTS } from "../../utils/events"
import { EventCard } from "./EventCard"

interface EventsBarProps extends FlexProps {}

export function EventsBar({ ...rest }: EventsBarProps) {
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
          className={event.className}
          name={event.name}
        />
      ))}
    </Flex>
  )
}
