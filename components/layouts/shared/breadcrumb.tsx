import {
    Badge,
    Breadcrumb as ChakraBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text
} from "@chakra-ui/react"
import { HiChevronRight } from "react-icons/hi"

interface Props {
    menu: string,
    linkMenu: string,
    title: string,
    year?: string
}

export const Breadcrumb = (props: Props) => {
    const { menu, linkMenu, title, year} = props
    return (
        <ChakraBreadcrumb spacing='8px' separator={<HiChevronRight color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href={linkMenu}>{menu}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Text>{title} {year && (
                    <Badge>{year}</Badge>
                )}
                </Text>
            </BreadcrumbItem>
        </ChakraBreadcrumb>
    )
}