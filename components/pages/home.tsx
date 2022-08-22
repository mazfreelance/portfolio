import {
    Avatar,
    Box,
    Divider,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react"
import { MotionBox, MotionFlex } from "components/animations/motion"
import { PageSliderFade, StaggerChildren } from "components/animations/page-transition"
import { Card } from "components/layouts/shared/card"
import Header from "components/layouts/shared/header"
import Section from "components/layouts/shared/section"
import { FcAbout, FcBriefcase, FcGraduationCap } from "react-icons/fc";
import { career } from "utils/career"
import { education } from "utils/education"
import styles from "../../styles/Home.module.scss"

const Home: React.FC = (props) => {

    return (
        <Flex direction={'column'} align={'center'}>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                <Header
                    size="medium"
                    emoji="👩🏻‍💻"
                    p={3}
                    mb={6}
                    fontSize={'0.7em'}
                    color={ useColorModeValue('gray.700', 'white') }
                    className={styles.typewriter}>
                    Hi, I&apos;m Full Stack Developer from Malaysia
                </Header>
            </MotionBox>
            <Flex direction={['column', 'column', 'row']}>
                <MotionBox
                    opacity={0}
                    initial={{
                        translateX: -150,
                        opacity: 0,
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    m="auto"
                    mb={['10', '10', 'auto']}>
                    <MotionBox
                        whileHover={{
                            scale: 0.9,
                            transition: 1
                        }} rounded="full" shadow="lg">
                        <Avatar
                            size={'xl'}
                            showBorder={true}
                            borderColor={'lightskyblue'}
                            src={'/assets/images/azmin.jpg'} />
                    </MotionBox>
                </MotionBox>
                <MotionFlex
                    position={'relative'}
                    justify="center"
                    direction="column"
                    maxW="800px"
                    w={["90%", "90%", "80%"]}
                    m={["auto", "initial"]}
                    ml={["auto", "auto", 16]}>
                    <Box flexGrow={1} textAlign={['center', 'left']} my={['0', '0', '3']}>
                        <Heading as="h2" variant="page-title">
                            Mohd Azmin
                        </Heading>
                        <Box as={'p'}>
                            Digital Creator ( Developer / Designer )
                        </Box>
                    </Box>
                </MotionFlex>
            </Flex>

            <Divider my={10} />

            <PageSliderFade>
                <StaggerChildren>
                    <MotionBox
                        w="100%"
                        opacity="0"
                        initial={{
                            translateY: 80,
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.5 - 0.1,
                                duration: 0.5,
                            },
                        }}
                        zIndex={1}>
                        <Section
                            delay={0.1}
                            textAlign="left">
                            <Heading>
                                <Flex alignItems={'center'}>
                                    <Header
                                        underlineColor={'red'}
                                        underlineHeight={'2px'}
                                        textAlign={'left'}
                                        size={'2xl'}
                                        mt={0} mb={0}>
                                        Work
                                    </Header>
                                    <Stack pl={3}>
                                        <Box as={FcAbout} size={25}></Box>
                                    </Stack>
                                </Flex>
                            </Heading>
                            <Text textAlign={'justify'}>
                                Hi👋, I am Azmin and a web developer based in Kuala Lumpur, Malaysia with a passion for building digital services. I have 5+ years working experience as a Web Developer for multiple company as a full time and a freelance. I love working in a team and sharing new knowledge. You can free around on my page to know more about me. Thanks for visiting this page. 🤙
                            </Text>
                        </Section>
                        <Section
                            delay={0.2}
                            textAlign="left">
                            <Heading>
                                <Flex alignItems={'center'}>
                                    <Header
                                        underlineColor={'red'}
                                        underlineHeight={'2px'}
                                        textAlign={'left'}
                                        size={'2xl'}
                                        mt={0} mb={0}>
                                        Career
                                    </Header>
                                    <Stack pl={3}>
                                        <Box as={FcBriefcase} size={25}></Box>
                                    </Stack>
                                </Flex>
                            </Heading>
                        </Section>
                        <VStack
                            spacing={2}
                            marginBottom={6}
                            align="left"
                            mt={12}
                            mx={['0', '0', '5']}>
                            {career.map((career, index) => (
                                <MotionBox whileHover={{ y: -5 }} key={index}>
                                    <Card
                                        key={index}
                                        title={career.title}
                                        role={career.role}
                                        skills={career.skills}
                                        period={career.period}
                                        logo={career.logo}
                                    />
                                </MotionBox>
                            ))}
                        </VStack>
                        <Section
                            delay={0.3}
                            textAlign="left">
                            <Heading>
                                <Flex alignItems={'center'}>
                                    <Header
                                        underlineColor={'red'}
                                        underlineHeight={'2px'}
                                        textAlign={'left'}
                                        size={'2xl'}
                                        mt={0} mb={0}>
                                        Education
                                    </Header>
                                    <Stack pl={3}>
                                        <Box as={FcGraduationCap} size={25}></Box>
                                    </Stack>
                                </Flex>
                            </Heading>
                        </Section>
                        <VStack
                            spacing={2}
                            marginBottom={1}
                            align="left"
                            mt={12}
                            mx={['0', '0', '5']}>
                            {education.map((edu, index) => (
                                <MotionBox whileHover={{ y: -5 }} key={index}>
                                    <Card
                                        key={index}
                                        title={edu.title}
                                        role={edu.role}
                                        skills={edu.skills}
                                        period={edu.period}
                                        logo={edu.logo}
                                        startingYear={edu.startingYear}
                                    />
                                </MotionBox>
                            ))}
                        </VStack>
                    </MotionBox>
                </StaggerChildren>
            </PageSliderFade>
        </Flex>
    )
}

export function getStaticProps() {
    return {
        props: {
            career,
            education
        }
    }
}

export default Home