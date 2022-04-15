import {
    Flex,
    VStack,
    Text
} from "@chakra-ui/react";
import { PageSliderFade } from "components/animations/page-transition"
import PageLayout from "components/layouts/page"
import Header from "components/layouts/shared/header";
import ProjectLists from "components/pages/project-list";
import { NextPage } from "next"
import { Fragment } from "react"

const title = 'Projects';
const description = 'List of projects I have worked on, during my career as Software Developer.'

const Project: NextPage = (props) => {
    return (
        <Fragment>
            <PageLayout title={title} description={description}>
                <PageSliderFade>
                    <VStack align="start">
                        <Header my={0} underlineColor={'cyan.800'} underlineHeight={'0.1'}>
                            Projects
                        </Header>
                        <Text textAlign="left" fontSize={['md', 'xl']}>{description}</Text>
                    </VStack>
                    <VStack>
                        <ProjectLists />
                    </VStack>
                </PageSliderFade>
            </PageLayout>
        </Fragment>
    )
}

export default Project