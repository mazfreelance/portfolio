import { Box, BoxProps } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
import UnderlinedText from "./underlineText";

interface Props extends BoxProps {
    size?: string;
    bgColor?: string;
    underlineColor?: string,
    underlineHeight?: string;
    emoji?: string;
}

const Header = ({
    children,
    size,
    bgColor,
    underlineColor,
    underlineHeight,
    emoji,
    ...props
}: PropsWithChildren<Props>) => (
    <Box
        as={'h1'}
        fontSize={size ? size : '3xl'}
        lineHeight={'shorter'}
        fontWeight={'bold'}
        {...props}
        borderRadius={'md'}
        bg={bgColor ? bgColor : ''}>
        <UnderlinedText h={underlineHeight} color={underlineColor}>{children}</UnderlinedText>
        {emoji ? ' ' + emoji : ''}
    </Box>
)

export default Header