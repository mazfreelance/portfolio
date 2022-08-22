import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormLabel,
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
import { IoCallOutline } from "react-icons/io5";

const ContactUs = ({ ...props }) => {
    const [size, setSize] = useState('md')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    //   Form validation state
    const [errors, setErrors] = useState({
        fullname: false,
        email: false,
        subject: false,
        message: false
    });

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {
            fullname: false,
            email: false,
            subject: false,
            message: false
        };
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    //   Handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation()

        var formData = {
            name: fullname,
            email: email,
            subject: subject,
            message: message
        }
        
        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            })

            const { error } = await res.json()
            if(error) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
            } else {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
            }
            handleReset()
            setButtonText("Send");
            return;
        } 
    };

    //   Handling reset form submit
    const handleReset = () => {
        setFullname('')
        setEmail('')
        setSubject('')
        setMessage('')
        setErrors({
            fullname: false,
            email: false,
            subject: false,
            message: false
        })
    };

    return (
        <>
            <Button
                onClick={ () => handleClick('md') }
                key={ size }
                variant="ghost">
                <Icon as={ IoCallOutline } display={ ['block', 'block', 'none'] } />
                <Text display={ ['none', 'none', 'block'] }>Contact</Text>
            </Button>

            <Drawer placement="right" isOpen={ isOpen } onClose={ onClose } size={ size }>
                <DrawerOverlay />
                <DrawerContent>
                    <Tooltip label={ 'close' }>
                        <DrawerCloseButton variant={ 'ghost' } />
                    </Tooltip>
                    <DrawerHeader borderBottomWidth={ '1px' }>Contact</DrawerHeader>
                    <form onSubmit={ handleSubmit } onReset={ handleReset }>
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
                                    <FormControl>
                                        <FormLabel htmlFor="name">Your name</FormLabel>
                                        <Input
                                            id={ 'fullname' }
                                            name={ 'fullname' }
                                            placeholder="Please enter name"
                                            variant="flushed"
                                            value={ fullname }
                                            onChange={ (e) => {
                                                setFullname(e.target.value);
                                            } }
                                        />
                                        {errors?.fullname && (
                                            <Box as={'p'} fontSize={'sm'} fontStyle={ 'italic' } color={'red'}>Name is required.</Box>
                                        )}
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <FormLabel htmlFor="email">Your email</FormLabel>
                                        <Input
                                            id={ 'email' }
                                            name={ 'email' }
                                            type="email"
                                            placeholder="Please enter email"
                                            variant="flushed"
                                            value={ email }
                                            onChange={ (e) => {
                                                setEmail(e.target.value);
                                            } }
                                        />
                                        {errors?.email && (
                                            <Box as={'p'} fontSize={'sm'} fontStyle={ 'italic' } color={'red'}>Email is required.</Box>
                                        )}
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <FormLabel htmlFor="subject">Subject</FormLabel>
                                        <Input
                                            id={ 'subject' }
                                            name={ 'subject' }
                                            placeholder="Please enter subject"
                                            variant="flushed"
                                            value={ subject }
                                            onChange={ (e) => {
                                                setSubject(e.target.value);
                                            } }
                                        />
                                        {errors?.subject && (
                                            <Box as={'p'} fontSize={'sm'} fontStyle={ 'italic' } color={'red'}>Subject is required.</Box>
                                        )}
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <Textarea
                                            id={ 'message' }
                                            name={ 'message' }
                                            placeholder="Please enter message"
                                            variant="flushed"
                                            value={ message }
                                            onChange={ (e) => {
                                                setMessage(e.target.value);
                                            } } 
                                        />
                                        {errors?.message && (
                                            <Box as={'p'} fontSize={'sm'} fontStyle={ 'italic' } color={'red'}>Message is required.</Box>
                                        )}
                                    </FormControl>
                                </Box>
                            </Stack>
                            {showSuccessMessage && (
                                <Box as={'p'} color={'green'}>Thankyou! Your Message has been delivered.</Box>
                            )}
                            {showFailureMessage && (
                                <Box as={'p'} color={'red'}>Oops! Something went wrong, please try again.</Box>
                            )}
                        </DrawerBody>
                        <DrawerFooter borderTopWidth={ '1px' }>
                            <Button variant={ 'outline' } mr={ 3 } type='reset'>Reset</Button>
                            <Button colorScheme={ 'blue' } type='submit'>{buttonText}</Button>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ContactUs
