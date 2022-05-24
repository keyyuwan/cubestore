import { ReactElement } from "react"
import { Flex, FlexProps, Text } from "@chakra-ui/react"
import Link from "next/link"

interface ItemProps extends FlexProps {
  href: string
  Icon: ReactElement
  title: string
}

export function Item({ href, Icon, title, ...rest }: ItemProps) {
  return (
    <Link href={href}>
      <Flex align="center" {...rest}>
        {Icon}
        <Text ml="1rem" fontSize="lg" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
    </Link>
  )
}
