import {
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    List,
    ListIcon,
    ListItem,
    Skeleton,
    Stack,
    Text,
    Textarea,
    Tooltip,
    useDisclosure
} from "@chakra-ui/react"
import { useState } from "react"
import { RiMailSendLine, RiUserLocationLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { Field, Formik, useFormik } from "formik";

const ContactUs = ({ ...props }) => {
    const [size, setSize] = useState('md')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <>
            <Button
                onClick={ () => handleClick('md') }
                key={ size }
                variant="ghost">
                <Icon as={ GrContact } display={ ['block', 'block', 'none'] } />
                <Text display={ ['none', 'none', 'block'] }>Contact</Text>
            </Button>

            <Drawer placement="right" isOpen={ isOpen } onClose={ onClose } size={ size }>
                <DrawerOverlay />
                <DrawerContent>
                    <Tooltip label={ 'close' }>
                        <DrawerCloseButton variant={ 'ghost' } />
                    </Tooltip>
                    <DrawerHeader borderBottomWidth={ '1px' }>Contact</DrawerHeader>
                    <Formik
                        initialValues={ {
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        } }
                        onSubmit={ (values) => {
                            alert(JSON.stringify(values, null, 2));
                        } }
                        onReset={ (values) => {
                            console.log('values', values)
                        } }>
                        { ({ handleSubmit, errors, touched }) => (
                            <form onSubmit={ handleSubmit }>
                                <DrawerBody>
                                    <List fontSize={ '13px' }>
                                        <ListItem>
                                            <ListIcon color={ 'cyan.600' } as={ RiMailSendLine } />
                                            <Link href="me@mohdazmin.com">me@mohdazmin.com</Link>
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon color={ 'cyan.600' } as={ RiUserLocationLine } />
                                            Kuala Lumpur, Malaysia
                                        </ListItem>
                                    </List>

                                    <Skeleton startColor='blue.500' endColor='orange.500' height='2px' my={ 2 } />

                                    <Stack spacing="24px">
                                        <Box>
                                            <FormControl isInvalid={ !!errors.name && touched.name }>
                                                <FormLabel fontStyle={ 'italic' } htmlFor="name">Your name</FormLabel>
                                                <Field
                                                    as={ Input }
                                                    id={ 'name' }
                                                    name={ 'name' }
                                                    placeholder="Please enter your name"
                                                    variant="flushed"
                                                    validate={ (value) => {
                                                        let error;

                                                        if (value.length === 0) {
                                                            error = "Name is required.";
                                                        }

                                                        return error;
                                                    } }
                                                />
                                                <FormErrorMessage>{ errors.name }</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl isInvalid={ !!errors.email && touched.email }>
                                                <FormLabel fontStyle={ 'italic' } htmlFor="email">Your email</FormLabel>
                                                <Field
                                                    as={ Input }
                                                    id={ 'email' }
                                                    name={ 'email' }
                                                    type="email"
                                                    placeholder="Please enter your email"
                                                    variant="flushed"
                                                    validate={ (value) => {
                                                        let error;

                                                        if (value.length === 0) {
                                                            error = "Email is required.";
                                                        }

                                                        return error;
                                                    } }
                                                />
                                                <FormErrorMessage>{ errors.email }</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl>
                                                <FormLabel fontStyle={ 'italic' } htmlFor="subject">Subject</FormLabel>
                                                <Input
                                                    id={ 'subject' }
                                                    name={ 'subject' }
                                                    placeholder="Please enter subject"
                                                    variant="flushed"
                                                />
                                                <FormErrorMessage>{ errors.subject }</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl>
                                                <FormLabel fontStyle={ 'italic' } htmlFor="message">Message</FormLabel>
                                                <Textarea
                                                    id={ 'message' }
                                                    name={ 'message' }
                                                    placeholder="Please enter message"
                                                    variant="flushed" />
                                                <FormErrorMessage>{ errors.message }</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth={ '1px' }>
                                    <Button variant={ 'outline' } mr={ 3 } type='reset'>Reset</Button>
                                    <Button colorScheme={ 'blue' } type='submit'>Submit</Button>
                                </DrawerFooter>
                            </form>
                        ) }
                    </Formik>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ContactUs
