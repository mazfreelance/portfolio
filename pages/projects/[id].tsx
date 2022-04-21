import {
    Avatar,
    Badge,
    Box,
    Flex,
    Icon,
    Link,
    List,
    ListItem,
    Stack,
    Text,
    Tooltip,
    Image
} from "@chakra-ui/react"
import { Breadcrumb } from "../../components/layouts/shared/breadcrumb"
import { Tags } from "../../components/layouts/shared/tags";
import PageLayout from "../../components/layouts/page"
import { PageSliderFade } from "../../components/animations/page-transition"
import { MotionBox } from "../../components/animations/motion"
import { HiExternalLink } from "react-icons/hi"
import { ProjectDetails } from '../../utils/projects'
import { useRouter } from "next/router"
import NextLink from "next/link"
import { Fragment } from "react"
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";


const Kolstore = () => {
    const router = useRouter()
    const { id } = router.query
    console.log("🚀 ~ file: kolstore.tsx ~ line 24 ~ Kolstore ~ id", id)

    let lists = ProjectDetails.lists
    let details = lists.find(item => item.slug === id);

    let title = details?.name
    let description = details?.description

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <Fragment>
            <PageLayout title={title} description={description}>
                <PageSliderFade>
                    <MotionBox textAlign="left">
                        <Breadcrumb
                            menu="Project"
                            linkMenu="/projects"
                            title={title}
                            year={details?.publish} />

                        <Text mt={4} textAlign={'justify'} styleConfig={{ 
                            textIndent: '1em'
                         }}>
                            {details?.description}
                        </Text>

                        <List ml={4} my={4}>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    Website
                                </Badge>
                                <Text as={'span'}>{details?.status ? (
                                    <NextLink href={details?.link} passHref>
                                        <Link isExternal
                                            _hover={{
                                                // textDecoration: 'none'
                                                color: 'blue'
                                            }}>
                                            {details?.link} <Icon as={HiExternalLink}/>
                                        </Link>
                                    </NextLink>
                                ) : details?.link
                                }</Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    Platform
                                </Badge>
                                <Text as={'span'}>Web</Text>
                            </ListItem>
                            {details?.application && (
                                <ListItem>
                                    <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                        Application
                                    </Badge>
                                    <Text as={'span'}>{details?.application}</Text>
                                </ListItem>
                            )}
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    Stack
                                </Badge>
                                <Text as={'span'}>
                                    {details?.skills.join(', ')}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    Status
                                </Badge>
                                <Text as={'span'}>{details?.status ? (
                                    <Badge ml='1' colorScheme='green'>Active</Badge>
                                ) : (
                                    <Badge ml='1' colorScheme='red'>Inactive</Badge>
                                )}</Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    Last Update
                                </Badge>
                                <Text as={'span'}>{details?.latest}</Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize="0.7em">Clients</Badge>
                                <Text as={'span'}>
                                    <Stack direction='row'>
                                        {details?.clients.map((item, index) => (
                                            <Tooltip hasArrow label={item.name} bg='black' placement="right">
                                                <Avatar name={item.name} src={item.image} />
                                            </Tooltip>
                                        ))}
                                    </Stack>
                                </Text>
                            </ListItem>
                        </List>
                        
                        
                        <Box display={['none', 'none', 'block']}>
                            {details?.gallery && (
                                <ImageGallery
                                    items={details?.gallery}
                                    thumbnailPosition={'left'}
                                    showIndex={'true'}
                                    showBullets={'true'}
                                />
                            )}
                        </Box>
                        <Box display={['block', 'block', 'none']}>
                            {details?.gallery && (
                                <ImageGallery
                                    items={details?.gallery}
                                    thumbnailPosition={'bottom'}
                                    showIndex={'true'}
                                    showBullets={'true'}
                                    autoPlay={'true'}
                                />
                            )}
                        </Box>
                    </MotionBox>
                </PageSliderFade>
            </PageLayout>
        </Fragment>
    )
}

export default Kolstore