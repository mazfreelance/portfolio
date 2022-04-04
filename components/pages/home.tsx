import {
    Avatar,
    Box,
    Divider,
    Flex,
    Heading,
    Icon,
    Skeleton,
    Spacer,
    Text
} from "@chakra-ui/react"
import { MotionBox, MotionFlex } from "components/animations/motion"
import Header from "components/layouts/shared/header"
import Section from "components/section"
import NextLink from "next/link"
import { FcAbout, FcBriefcase, FcGraduationCap } from "react-icons/fc";

const Home: React.FC = (props) => {
    return (
        <Flex direction={'column'} align={'center'}>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                <Header
                    size="medium"
                    emoji="👩🏻‍💻"
                    p={3}
                    mb={6}
                    bgColor={'blue.200'}>
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
                            src={''} />
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
                    <Box flexGrow={1} textAlign={'left'} my={['0', '0', '3']}>
                        <Heading as="h2" variant="page-title">
                            Mohd Azmin
                        </Heading>
                        <p>Digital Creator ( Developer / Designer )</p>
                    </Box>
                </MotionFlex>
            </Flex>

            <Divider my={10} />

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
                    <Header
                        underlineColor={'red'}
                        underlineHeight={'2px'}
                        textAlign={'left'}
                        size={'2xl'}
                        mt={0} mb={0}>
                        Work
                    </Header> <Icon as={FcAbout}/>
                    <Text
                        textAlign={'justify'}>
                        Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
                    </Text>
                </Section>
                <Section
                    delay={0.2}
                    textAlign="left">
                    <Header
                        underlineColor={'red'}
                        underlineHeight={'2px'}
                        textAlign={'left'}
                        size={'2xl'}
                        mt={0} mb={0}>
                        Career <Icon as={FcBriefcase} />
                    </Header>
                </Section>
                <Section
                    delay={0.3}
                    textAlign="left">
                    <Header
                        underlineColor={'red'}
                        underlineHeight={'2px'}
                        textAlign={'left'}
                        size={'2xl'}
                        mt={0} mb={0}>
                        Education <Icon as={FcGraduationCap}/>
                    </Header>
                </Section>
            </MotionBox>
        </Flex>
    )
}

export default Home