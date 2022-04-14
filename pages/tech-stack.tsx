import {
    GetStaticProps,
    NextPage
} from "next"
import React, { useState } from "react"
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    VStack,
    Text,
    useColorModeValue,
    Icon,
    Spacer,
    SimpleGrid
} from "@chakra-ui/react"
import {
    container,
    PageSliderFade
} from "components/animations/page-transition"
import PageLayout from "components/layouts/page"
import { skillsArray } from "utils/skills"
import { SkillProps } from "../interfaces"
import { SiAzuredevops } from "react-icons/si";
import {
    MdOutlineDeveloperMode,
    MdDesignServices
} from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import Section from "components/layouts/shared/section"
import Header from "components/layouts/shared/header"
import { SkillCard } from "components/layouts/shared/card"
import { MotionBox } from "components/animations/motion"

const tabLists = [
    {
        name: 'All',
        filter: '',
        icon: BsCardChecklist
    },
    {
        name: 'Web Development',
        filter: 'development',
        icon: MdOutlineDeveloperMode
    },
    {
        name: 'Web Design',
        filter: 'design',
        icon: MdDesignServices
    },
    {
        name: 'Database',
        filter: 'database',
        icon: GoDatabase
    },
    {
        name: 'Devops',
        filter: 'devops',
        icon: SiAzuredevops
    }
]
const TechStack: NextPage<SkillProps> = ({ skills }) => {
    const [skillsList, setSkillsList] = useState([])

    React.useEffect(() => {
        setSkillsList(skills)
    }, [])

    const filterSkill = (tab) => {
        if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab))
        else setSkillsList(skills)
    }

    return (
        <PageLayout
            title="Tecnical Stack"
            keywords="php, javascript, laravel, yii2, react, typescript, vue">
            <PageSliderFade>
                <VStack spacing={3}>
                    <Section>
                        <VStack>
                            <Header mt={0} mb={3}>
                                Technical Stack
                            </Header>
                            <Text fontSize={'lg'}>
                                My favourite tools and technologies that I use for any project.
                            </Text>
                        </VStack>
                    </Section>
                    <Section>
                        <Tabs variant='soft-rounded' colorScheme='messenger' w='100%'>
                            <TabList display='flex' flexWrap='wrap'>
                                {tabLists.map((tab, index) => (
                                    <Tab
                                        bg={useColorModeValue('purple.100', 'purple.500')}
                                        color={useColorModeValue('white.100', 'white.500')}
                                        _hover={{
                                            color: useColorModeValue('gray.100', 'gray.900')
                                        }}
                                        _selected={{
                                            color: useColorModeValue('cyan.800', 'gray.900')
                                        }}
                                        mx={1}
                                        px={4}
                                        onClick={() => filterSkill(tab.filter)}
                                        key={index}>
                                        <Icon as={tab.icon} />
                                        <Spacer pl={1} />
                                        <Text>{tab.name}</Text>
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels minHeight={'45vh'}>
                                {/* All */}
                                <TabPanel px={0}>
                                    <MotionBox variant={container} animate="visible" initial="hidden">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={5}>
                                            {skillsList.map((item, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={item.name}
                                                    description={item.description}
                                                    link={item.link}
                                                    image={item.image}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                {/* Web Development */}
                                <TabPanel px={0}>
                                    <MotionBox variant={container} animate="visible" initial="hidden">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={5}>
                                            {skillsList.map((item, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={item.name}
                                                    description={item.description}
                                                    link={item.link}
                                                    image={item.image}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                {/* Web Design */}
                                <TabPanel px={0}>
                                    <MotionBox variant={container} animate="visible" initial="hidden">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={5}>
                                            {skillsList.map((item, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={item.name}
                                                    description={item.description}
                                                    link={item.link}
                                                    image={item.image}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                {/* Database */}
                                <TabPanel px={0}>
                                    <MotionBox variant={container} animate="visible" initial="hidden">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={5}>
                                            {skillsList.map((item, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={item.name}
                                                    description={item.description}
                                                    link={item.link}
                                                    image={item.image}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                {/* Devops */}
                                <TabPanel px={0}>
                                    <MotionBox variant={container} animate="visible" initial="hidden">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={5}>
                                            {skillsList.map((item, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={item.name}
                                                    description={item.description}
                                                    link={item.link}
                                                    image={item.image}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Section>
                </VStack>
            </PageSliderFade>
        </PageLayout>
    )
}

export const getStaticProps: GetStaticProps<SkillProps> = () => {
    return {
        props: {
            skills: skillsArray
        }
    }
}

export default TechStack