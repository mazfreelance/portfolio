import { Box, Flex, IconButton, Link, Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import myAccountConfig from "../../../configs/my-account"

const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true
};

const Footer = () => {
    return (
        <Stack
            as={ 'footer' }
            isInline
            spacing={ [1, 2] }
            p={ 4 }
            justifyContent="space-between"
            alignItems="center"
            w={ ["100%", "85%", "80%"] }
            maxW={ 800 }
            mx={ 'auto' }>
            <Flex
                flexDirection={ ["column", "column", "row"] }
                flexFlow={ ["column-reverse", "column-reverse"] }
                justifyContent={ ["center", "space-between"] }
                alignItems="center"
                w="100%">
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color={ useColorModeValue("gray.500", "gray.200") }>
                    © { new Date().getFullYear() } MohdAzmin[dot]com{ " " }
                </Text>
                <Box textAlign={ 'center' }>
                    { myAccountConfig.accounts.map((item, index) => (
                        <Tooltip hasArrow
                            key={ index }
                            label={ item.label }>
                            <IconButton aria-label={ item.label }
                                key={ index }
                                as={ Link }
                                isExternal
                                href={ item.url }
                                colorScheme={ item.type }
                                icon={ item.icon }
                                size={ 'sm' }
                                _hover={ {
                                    color: useColorModeValue("inherit", item.type + ".800"),
                                    bg: "blue.100"
                                } }
                                { ...iconProps } />
                        </Tooltip>
                    )) }
                </Box>
            </Flex>
        </Stack>
    )
}

export default Footer