import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    Tag,
    Text,
    Tooltip,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import NextLink from 'next/link'
import { MotionBox } from "components/animations/motion";
import {
    CardTransition,
    item
} from "components/animations/page-transition";
import { CareerEducationProps } from "../../../interfaces";
import { Tags } from "./tags";
import { usePalette } from "react-palette";
import { BiGitRepoForked, BiStar } from "react-icons/bi"
import { getTagColor } from "components/theme";

export const Card = (props: CareerEducationProps) => {
    const { title, role, skills, period, logo, alt, startingYear } = props;
    return (
        <CardTransition>
            <Box
                px={4}
                py={5}
                rounded="md"
                borderWidth={1}
                position={"relative"}
                _hover={{ shadow: "lg" }}
            >
                <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                            rounded="full"
                            w={16}
                            h={16}
                            objectFit="cover"
                            fallbackSrc={"/assets/images/placeholder.png"}
                            src={logo}
                            alt={alt}
                        />
                        <Stack spacing={2} align={"left"} pl={4}>
                            <Heading textAlign={"left"} fontSize={"xl"}>
                                {title}
                            </Heading>
                            <Heading textAlign={'left'} fontSize={"sm"}>
                                {role}
                            </Heading>
                            <Heading textAlign={"left"} fontSize={"sm"} display={["flex", "flex", "none", "none"]}>
                                <Text fontSize={12}>{period}</Text>
                            </Heading>
                            <Stack
                                spacing={2}
                                mt={3}
                                isInline
                                alignItems="center"
                                display={["none", "none", "flex", "flex"]}
                            >
                                <Tags
                                    tags={skills}
                                    interactive={false}
                                    tagProps={{
                                        padding: "0 6px",
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Flex>
                    <Stack display={["none", "none", "flex", "flex"]}>
                        <Text fontSize={14}>{period}</Text>
                    </Stack>
                </Flex>

                <Stack
                    spacing={1}
                    mt={3}
                    isInline
                    alignItems="center"
                    display={['flex', 'flex', 'none', 'none']}
                >
                    <Tags
                        tags={skills}
                        interactive={false}
                        tagProps={{
                            padding: '0 3px'
                        }}
                    />
                </Stack>
            </Box>
        </CardTransition>
    );
};

export const SkillCard = ({ name, description, link, image }) => {
    const { data, loading } = usePalette(image)
    return (
        <MotionBox variant={item}>
            <MotionBox whileHover={{ y: -5 }}>
                <NextLink href={link} passHref>
                    <Link isExternal>
                        <HStack
                            w="100%"
                            p={4}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderColor={useColorModeValue('gray.100', 'gray.700')}
                            rounded="xl"
                            borderWidth="1px"
                            textAlign="left"
                            align="start"
                            spacing={4}
                            _hover={{ shadow: 'md' }}
                        >
                            <Box
                                rounded={'lg'}
                                p={2}
                                overflow={'hidden'}
                                lineHeight={0}
                                position={'relative'}
                                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                            >
                                <Box
                                    bg={data.lightVibrant}
                                    position={'absolute'}
                                    top={0}
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    opacity={0.25}
                                ></Box>
                                {loading ? (
                                    <Skeleton height={26} width={26} rounded={'md'} />
                                ) : (
                                    <Image
                                        src={image}
                                        height={26}
                                        width={26}
                                        // layout="fixed"
                                        rounded="md"
                                    />
                                )}
                            </Box>
                            <VStack
                                align={'start'}
                                justify="flex-start"
                                spacing={1}
                                maxW="lg"
                                h="100%"
                            >
                                <VStack align={'start'} flexGrow={1} spacing={0}>
                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>{name}</Text>
                                    <Text fontSize="sm">{description}</Text>
                                </VStack>
                            </VStack>
                        </HStack>
                    </Link>
                </NextLink>
            </MotionBox>
        </MotionBox>
    )
}

interface CardNumProps {
    cards: number[]
}

export const SkeletonGitCard = (props: CardNumProps) => {
    const { cards } = props
    const bgColor = useColorModeValue('gray.200', 'cyan.200')
    return (
        <>
            {cards.map((id) => (
                <Box
                    bg={bgColor}
                    key={id}
                    borderWidth={'1px'}
                    m={2}
                    p={2}
                    rounded="lg">
                    <Stack isInline justifyContent={'space-between'}>
                        <Box width="100%">
                            <HStack isInline justifyContent={'space-between'}>
                                <Skeleton height="14px" width="40%" />
                                <Skeleton height="14px" width="20%" />
                            </HStack>
                            <VStack align={'start'} marginTop={1}>
                                <Skeleton height="8px" width="30%" />
                            </VStack>
                            <Box marginTop={2}>
                                <Skeleton height="8px" width="100%" />
                                <Stack spacing={2} mt={1} isInline alignItems={'center'}>
                                    <Skeleton height="8px" width="80%" />
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            ))}
        </>
    )
}

interface GitLiveProps {
    title: string
    description: string
    language: string
    url: string
    stargazers_count: number
    forks_count: number
}

export const GitCard = (props: GitLiveProps) => {
    const { title, description, language, stargazers_count, forks_count, url } = props

    const handleLink = (
        e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
        link: string
    ) => {
        window.open(link)
        e.stopPropagation()
    }

    return (
        <MotionBox whileHover={{ y: 10 }}>
            <Box
                borderWidth={'1px'}
                p={2}
                rounded={'xl'}
                mt={2}
                ml={2}
                _hover={{
                    shadow: 'md',
                    textDecoration: 'none'
                }}
            >
                <VStack overflow={'hidden'} align={'start'} spacing={1}>
                    <VStack spacing={1} align={'start'} w="100%">
                        <Flex
                            onClick={((e) => handleLink(e, url))}
                            justifyContent={'space-between'}
                            width="100%">
                            <Tooltip hasArrow label="Github link" placement="top">
                                <HStack cursor={'pointer'}>
                                    <Text fontSize="sm"
                                        noOfLines={1}
                                        fontWeight="600"
                                        align="left">
                                        {title}
                                    </Text>
                                </HStack>
                            </Tooltip>
                            <HStack
                                cursor="pointer"
                                onClick={((e) => handleLink(e, url))}
                            >
                                {forks_count && (
                                    <Box _hover={{ color: 'blue.500' }}>
                                        <Icon as={BiGitRepoForked} fontSize="sm" boxSize={'0.9em'} />
                                        <Box as={'span'} ml={1} fontSize="sm">
                                            {forks_count}
                                        </Box>
                                    </Box>
                                )}
                                {stargazers_count && (
                                    <Box _hover={{ color: 'blue.500' }}>
                                        <Icon as={BiStar} fontSize="sm" boxSize={'0.9em'} />
                                        <Box as={'span'} ml={1} fontSize="sm">
                                            {stargazers_count}
                                        </Box>
                                    </Box>
                                )}
                            </HStack>
                        </Flex>
                    </VStack>
                    <Box height={79}>
                        {language && (
                            <Flex justifyContent={'space-between'} width="100%">
                                <Box>
                                    <HStack spacing={1}>
                                        <Tag size="sm" colorScheme={getTagColor(language)}>
                                            <Text fontSize={['0.55rem', 'inherit', 'inherit']}>
                                                {language}
                                            </Text>
                                        </Tag>
                                    </HStack>
                                </Box>
                            </Flex>
                        )}
                        <Text fontSize="sm" align={'left'}>
                            {description}
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </MotionBox>
    )
}