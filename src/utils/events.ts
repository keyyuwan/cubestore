export type EventsName =
  | "All"
  | "2x2x2"
  | "3x3x3"
  | "4x4x4"
  | "5x5x5"
  | "6x6x6"
  | "7x7x7"
  | "Skewb"
  | "Pyraminx"
  | "Megaminx"

export interface Event {
  id: string
  name: EventsName
  className: string
}

export const EVENTS: Event[] = [
  {
    id: "0",
    name: "All",
    className: "cubing-icon event-mmagic",
  },
  {
    id: "1",
    name: "2x2x2",
    className: "cubing-icon event-222",
  },
  {
    id: "2",
    name: "3x3x3",
    className: "cubing-icon event-333",
  },
  {
    id: "3",
    name: "4x4x4",
    className: "cubing-icon event-444",
  },
  {
    id: "4",
    name: "5x5x5",
    className: "cubing-icon event-555",
  },
  {
    id: "5",
    name: "6x6x6",
    className: "cubing-icon event-666",
  },
  {
    id: "6",
    name: "7x7x7",
    className: "cubing-icon event-777",
  },
  {
    id: "7",
    name: "Skewb",
    className: "cubing-icon event-skewb",
  },
  {
    id: "8",
    name: "Pyraminx",
    className: "cubing-icon event-pyram",
  },
  {
    id: "9",
    name: "Megaminx",
    className: "cubing-icon event-minx",
  },
]
