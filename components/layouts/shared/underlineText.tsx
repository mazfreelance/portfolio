import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react"

interface Props {
    color: string;
    h?: string;
    zIndex?: number;
}

const UnderlinedText = (props: PropsWithChildren<Props>) => (
    <Box as={'span'} display="inline-block" position="relative">
        {props.children}
        <Box as="span" display="block" bg="blue.100" h={props.h || '0px'} bottom={-2}/>
    </Box>
)

export default  UnderlinedText