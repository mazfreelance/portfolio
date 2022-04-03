import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"

const IndexPage = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("blue.100", "blue.700")
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email"/>
                <Input placeholder="**********" variant="filled" mb={6} type="password"/>
                <Button colorScheme="teal">Log in</Button>
                <Button onClick={toggleColorMode}>Change Color Mode</Button>
            </Flex>
        </Flex>
    )
}

export default IndexPage
