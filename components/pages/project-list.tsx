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
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setProject(projectLists)
        setTotal(projectLists.length)
    }, [])

    const filterProject = (tab) => {
        if (tab.length) {
            let details = projectLists.filter((item) => item.filter.includes(tab));
            setProject(details)
            setTotal(details.length)
        }else {
            setProject(projectLists)
            setTotal(projectLists.length)
        }
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
                            mx={['2', 'auto', '2', 'auto']}
                            px={4}
                            my={1}
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
                        <Text fontSize='md' textAlign={'left'}>{total} projects in the list.</Text>
                        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    key={idx}
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    link={item.link} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' textAlign={'left'}>{total} projects in the list.</Text>
                        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    key={idx}
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    link={item.link} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' textAlign={'left'}>{total} projects in the list.</Text>
                        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    key={idx}
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    link={item.link} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' textAlign={'left'}>{total} projects in the list.</Text>
                        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    key={idx}
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    link={item.link} />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' textAlign={'left'}>{total} projects in the list.</Text>
                        <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={3}>
                            {projects.map((item, idx) => (
                                <ProjectCard
                                    key={idx}
                                    name={item.name}
                                    description={item.description}
                                    publish={item.publish}
                                    image={item.image}
                                    link={item.link} />
                            ))}
                        </SimpleGrid>
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
        name: 'Mobile App',
        filter: 'app',
        icon: AiOutlineShop
    },
    // {
    //     name: 'E-commerce systems',
    //     filter: 'ecommerce',
    //     icon: AiOutlineShop
    // },
    {
        name: 'Restful API ',
        filter: 'api',
        icon: MdApi
    }
]