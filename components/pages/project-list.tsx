import {
    Icon,
    SimpleGrid,
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import { ProjectCard } from "components/layouts/shared/card";
import Section from "components/layouts/shared/section";
import {
    useEffect,
    useState
} from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import {
    MdApi,
    MdOutlineSystemSecurityUpdateGood,
    MdOutlineWeb
} from "react-icons/md";
import { projects as projectLists } from "utils/projects"

const ProjectLists = ({ ...props }) => {
    const [projects, setProject] = useState([])

    useEffect(() => {
        setProject(projectLists)
    }, [])

    const filterProject = (tab) => {
        if (tab.length) setProject(projectLists.filter((item) => item.filter.includes(tab)))
        else setProject(projectLists)
    }
    return (
        <Section mt={3}>
            <Tabs w="100%" isLazy>
                <TabList display='flex' flexWrap='wrap'>
                    {tabLists.map((tab, idx) => (
                        <Tab
                            onClick={() => filterProject(tab.filter)}
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
                            my={[1, 1, 0]}
                            key={idx}
                        >
                            <Icon as={tab?.icon} />
                            <Spacer pl={2} />
                            <Text>{tab.name}</Text>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    skills={item.skills} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        {projects.map((item, idx) => (
                            <ProjectCard
                                name={item.name}
                                description={item.description}
                                publish={item.publish}
                                image={item.image}
                                skills={item.skills} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {projects.map((item, idx) => (
                            <ProjectCard
                                name={item.name}
                                description={item.description}
                                publish={item.publish}
                                image={item.image}
                                skills={item.skills} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {projects.map((item, idx) => (
                            <ProjectCard
                                name={item.name}
                                description={item.description}
                                publish={item.publish}
                                image={item.image}
                                skills={item.skills} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {projects.map((item, idx) => (
                            <ProjectCard
                                name={item.name}
                                description={item.description}
                                publish={item.publish}
                                image={item.image}
                                skills={item.skills} />
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Section>
    )
}

export default ProjectLists

const tabLists = [
    {
        name: 'All',
        filter: '',
        icon: BsCardChecklist
    },
    {
        name: 'Website',
        filter: 'website',
        icon: MdOutlineWeb
    },
    {
        name: 'Web Application',
        filter: 'webapp',
        icon: MdOutlineSystemSecurityUpdateGood
    },
    {
        name: 'E-commerce systems',
        filter: 'ecommerce',
        icon: AiOutlineShop
    },
    {
        name: 'Restful API ',
        filter: 'api',
        icon: MdApi
    }
]