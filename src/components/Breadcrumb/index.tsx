import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Link from "next/link"

interface BreadcrumbProps {
  productName: string
}

export function Breadcrumb({ productName }: BreadcrumbProps) {
  return (
    <ChakraBreadcrumb separator={<ChevronRightIcon />}>
      <BreadcrumbItem _hover={{ textDecoration: "underline" }}>
        <BreadcrumbLink as={Link} href="/products">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{productName}</BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  )
}
