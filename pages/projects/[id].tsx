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
import { VscGlobe, VscSourceControl } from "react-icons/vsc"
import { BsPeople } from "react-icons/bs"
import { GrStatusInfo, GrTechnology, GrUpdate } from "react-icons/gr"
import { GiFlatPlatform } from "react-icons/gi"
import { MdSettingsApplications } from "react-icons/md";
import { ProjectDetails } from '../../utils/projects'
import { useRouter } from "next/router"
import NextLink from "next/link"
import { Fragment } from "react"
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";


const Kolstore = () => {
    const router = useRouter()
    const { id } = router.query

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
                                    <Icon as={VscGlobe} /> Website
                                </Badge>
                                <Text as={'span'}>{details?.status ? (
                                    <NextLink href={details?.link} passHref>
                                        <Link isExternal
                                            _hover={{
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
                                    <Icon as={GiFlatPlatform} /> Platform
                                </Badge>
                                <Text as={'span'}>Web</Text>
                            </ListItem>
                            {details?.application && (
                                <ListItem>
                                    <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                        <Icon as={MdSettingsApplications} /> Application
                                    </Badge>
                                    <Text as={'span'}>{details?.application}</Text>
                                </ListItem>
                            )}
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    <Icon as={GrTechnology} /> Stack
                                </Badge>
                                <Text as={'span'}>
                                    {details?.skills.join(', ')}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    <Icon as={GrStatusInfo} /> Status
                                </Badge>
                                <Text as={'span'}>{details?.status ? (
                                    <Badge ml='1' colorScheme='green'>Active</Badge>
                                ) : (
                                    <Badge ml='1' colorScheme='red'>Inactive</Badge>
                                )}</Text>
                            </ListItem>
                            <ListItem>
                                <Badge colorScheme="cyan" mr={2} fontSize='0.7em'>
                                    <Icon as={GrUpdate} /> Last Update
                                </Badge>
                                <Text as={'span'}>{details?.latest}</Text>
                            </ListItem>
                            {details?.source && (
                                <ListItem>
                                    <Badge colorScheme="cyan" mr={2} fontSize="0.7em"><Icon as={VscSourceControl} /> Source</Badge>
                                    <Text as={'span'}>
                                        <NextLink href={details?.source} passHref>
                                            <Link isExternal
                                                _hover={{
                                                    // textDecoration: 'none'
                                                    color: 'blue'
                                                }}>
                                                project.me <Icon as={HiExternalLink} />
                                            </Link>
                                        </NextLink>
                                    </Text>
                                </ListItem>
                            )}
                            <ListItem>
                                <Flex>
                                    <Badge my={'auto'} colorScheme="cyan" mr={2} fontSize="0.7em"><Icon as={BsPeople} /> Clients</Badge>
                                    <Text as={'span'}>
                                        <Stack direction='row'>
                                            {details?.clients.map((item, index) => (
                                                <Tooltip key={index} hasArrow label={item.name} bg='black' placement="right">
                                                    <Avatar size={'md'} name={item.name} src={item.image} />
                                                </Tooltip>
                                            ))}
                                        </Stack>
                                    </Text>
                                </Flex>
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