import { MotionBox } from "components/animations/motion"
import { item } from "components/animations/page-transition"
import NextLink from 'next/link'
import {
    Box,
    HStack,
    Link,
    Skeleton,
    Image,
    useColorModeValue,
    VStack,
    Text
} from "@chakra-ui/react"
import { usePalette } from "react-palette"

const SkillCard = ({ name, description, link, image }) => {
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

export default SkillCard