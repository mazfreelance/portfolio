import { useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { NavLinkProps } from "../../../types"
import {
    Link,
} from '@chakra-ui/react';
import { MotionText } from "../../animations/motion";

const NavLink = (props: NavLinkProps) => {
    const router = useRouter();
    const link = {
        bg: useColorModeValue('gray.200', 'gray.900'),
        color: useColorModeValue('blue.500', 'blue.900'),
    };

    return (
        <NextLink href={ props.path } passHref>
            <Link px={ 2 }
                py={ 1 }
                rounded={ 'md' }
                _hover={ {
                    textDecoration: 'none',
                    bg: link.bg,
                } }
                bg={ router.pathname === props.path ? link.bg : 'transparent' }
                color={ router.pathname === props.path ? props.linkColor : 'inherit' }
                onClick={ () => props.onClose() }>
                <MotionText
                    whileHover={ { scale: 1.1 } }
                    whileTap={{ scale: 0.9 }}
                    transition='0.5s linear'>
                    { props.name }</MotionText>
            </Link>
        </NextLink>
    );
}

export default NavLink