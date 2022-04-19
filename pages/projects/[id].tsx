import {
    Box,
    Breadcrumb,
    BreadcrumbItem, 
    BreadcrumbLink,
    Text
} from "@chakra-ui/react"
import { MotionBox } from "components/animations/motion"
import { HiChevronRight } from "react-icons/hi"

const Works = () => {

    return (
        <MotionBox textAlign="left">
            <Breadcrumb spacing='8px' separator={ <HiChevronRight color='gray.500' /> }>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/projects'>Projects</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <Text>Contact</Text>
                </BreadcrumbItem>
            </Breadcrumb>
        </MotionBox>
    )
}

export default Works