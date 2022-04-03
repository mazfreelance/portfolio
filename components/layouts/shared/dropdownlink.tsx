import { HStack, MenuItem, useColorModeValue, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { DropdownLinkProps } from "../../../interfaces"
import {
    Link,
} from '@chakra-ui/react';
import { FaStackOverflow } from "react-icons/fa";
import { MdOutlineSource } from "react-icons/md";

const DropdownLink = (props: DropdownLinkProps) => {
    const icons = {
        '/tech-stack': <Icon as={ FaStackOverflow } color={ 'blue.700' } />,
        '/open-source': <Icon as={ MdOutlineSource } color={ 'purple.700' } size={20}/>,
    }

    return (
        <NextLink href={ props.path } passHref>
            <Link onClick={ () => props.onClose() }>
                <MenuItem>
                    <HStack
                        bg={ props.routePath === props.path && props.bg }
                        color={ props.routePath === props.path ? props.color : 'inherit' }>
                        { icons[props.path] }
                        <Text>{ props.name }</Text>
                    </HStack>
                </MenuItem>
            </Link>
        </NextLink>
    );
}

export default DropdownLink