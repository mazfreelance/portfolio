import { NextPage } from "next"
import {
    HStack,
    VStack,
    Text,
    Icon,
    Flex
} from "@chakra-ui/react"
import { PageSliderFade } from "components/animations/page-transition"
import PageLayout from "components/layouts/page"
import Header from "components/layouts/shared/header"
import GitHubRepository from "components/pages/github-repository"
import { AiFillGithub } from 'react-icons/ai';

const OpenSource: NextPage = () => {

    return (
        <PageLayout title="Open Source" keywords="My open source projects">
            <PageSliderFade>
                <VStack align={'start'} spacing={3}>
                    <HStack justifyContent={'space-between'} width={'100%'}>
                        <Header justifyContent="flex" my={0} underlineColor={'cyan.800'} underlineHeight={'0.1'}>
                            <Flex alignItems={'space-between'}>
                                <Icon as={AiFillGithub} fontSize={'xxl'}/>
                                <Text fontSize={'xl'}>Open Source</Text>
                            </Flex>
                        </Header>
                    </HStack>
                    <Text fontSize="md">
                        Lists of the open source repositories I have published or contributed to.
                    </Text>
                </VStack>
                <GitHubRepository />
            </PageSliderFade>
        </PageLayout>
    )
}

export default OpenSource