import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    IconButton,
    Image,
    useDisclosure,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack
} from '@chakra-ui/react';
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown } from "react-icons/hi";
import { MotionBox } from '../../animations/motion';
import { ColorModeSwitcher } from './colorModeSwitcher';
import NextLink from 'next/link';
import NavLink from './navlink';
import ContactUs from '../../pages/contactUs';
import DropdownLink from './dropdownlink';
import { useRouter } from 'next/router';
import Link from 'next/link';

const links = [
    // { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Blog', path: '/blog' },
];

const dropdownLinks = [
    { name: 'Technical Stack', path: '/tech-stack' },
    { name: 'Open Source', path: '/open-source' }
];

const mobileLinks = links.concat(dropdownLinks)

export default function TopNav() {

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuProps = {
        bg: useColorModeValue('gray.200', 'gray.900'),
        color: useColorModeValue('blue.500', 'blue.200'),
    };
    const mode = useColorModeValue("dark", "light")
    return (
        <>
            <Box
                bg={ useColorModeValue('white', 'gray.700') }
                px={ 4 }
                boxShadow={ 'lg' }
                position="fixed"
                width="100%"
                zIndex="55">
                <Flex
                    h={ 16 }
                    alignItems={ 'center' }
                    justifyContent={ 'space-between' }
                    w={ ['90%', '85%', '80%'] }
                    maxW={ 800 }
                    mx="auto">
                    <IconButton
                        size={ 'md' }
                        icon={ isOpen ? <HiOutlineX /> : <HiOutlineMenu /> }
                        aria-label={ 'Open Menu' }
                        display={ ['inherit', 'inherit', 'none'] }
                        onClick={ isOpen ? onClose : onOpen }
                    />

                    <HStack spacing={ 8 } alignItems={ 'center' }>
                        <MotionBox whileHover={ { scale: 1.2 } } shadow="md">
                            <NextLink href={ '/' } passHref>
                            {mode == 'dark' ? (
                                <Image src={ '/logo-ma.png' } alt='Mohd Azmin' boxSize={ '50px' } loading='lazy'/>
                            ) : (
                                <Image src={ '/logo-ma-white.png' } alt='Mohd Azmin' boxSize={ '50px' } loading='lazy'/>
                            )}
                            </NextLink>
                        </MotionBox>
                        <HStack as={ 'nav' } spacing={ 4 } display={ { base: 'none', md: 'flex' } }>
                            { links.map((link, index) => (
                                <NavLink
                                    key={ index }
                                    name={ link.name }
                                    path={ link.path }
                                    // linkColor={linkColor}
                                    onClose={ onClose } />
                            )) }
                            <Menu autoSelect={ false } isLazy>
                                <MenuButton
                                    as={ Button }
                                    variant="ghost"
                                    size="sm"
                                    px={ 2 }
                                    py={ 1.5 }
                                    fontSize={ '1em' }
                                    rounded={ 'md' }
                                    height={ 'auto' }
                                    _focus={ { boxShadow: 'none' } }
                                    rightIcon={ <HiOutlineChevronDown /> }>
                                    More
                                </MenuButton>
                                <MenuList>
                                    { dropdownLinks.map((link, index) => (
                                        <DropdownLink
                                            key={ index}
                                            name={ link.name }
                                            path={ link.path }
                                            bg={ menuProps.bg }
                                            routePath={ router.pathname }
                                            onClose={ onClose } />
                                    )) }
                                </MenuList>
                            </Menu>
                        </HStack>
                    </HStack>

                    <Flex alignItems={ 'center' }>
                        <ContactUs />
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Flex>
                </Flex>
                
                {isOpen ?
                <Box
                    pb={ 4 }
                    pl={3}
                    maxW={ 800 }
                    w={ ['100%', '100%', '80%'] }
                    display={ ['inherit', 'inherit', 'none'] }>
                    <Stack as={ 'nav' } spacing={ 3 }>
                        { mobileLinks.map((link, index) => (
                            <NavLink
                                key={ index }
                                name={ link.name }
                                path={ link.path }
                                // linkColor={linkColor}
                                onClose={ onClose } />
                        )) }
                    </Stack>
                </Box>
                : null}
            </Box>
        </>
    )
}