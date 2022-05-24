interface Event {
  id: string
  name: string
  className: string
}

export const EVENTS: Event[] = [
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
    name: "Skewb",
    className: "cubing-icon event-skewb",
  },
  {
    id: "4",
    name: "Pyraminx",
    className: "cubing-icon event-pyram",
  },
  {
    id: "5",
    name: "Megaminx",
    className: "cubing-icon event-minx",
  },
]
