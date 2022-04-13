import { Box, Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { CardTransition } from "components/animations/page-transition";
import { CareerEducationProps } from "../../../interfaces";
import { Tags } from "./tags";

const Card = (props: CareerEducationProps) => {
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
                            <Heading align={"left"} fontSize={"xl"}>
                                {title}
                            </Heading>
                            <Heading align={"left"} fontSize={"sm"}>
                                {role}
                            </Heading>
                            <Heading align={"left"} fontSize={"sm"} display={["flex", "flex", "none", "none"]}>
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

export default Card;
