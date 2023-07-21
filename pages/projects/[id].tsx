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
    Image,
    ListIcon
} from "@chakra-ui/react"
import { Breadcrumb } from "../../components/layouts/shared/breadcrumb"
import { Tags } from "../../components/layouts/shared/tags";
import PageLayout from "../../components/layouts/page"
import { PageSliderFade } from "../../components/animations/page-transition"
import { MotionBox } from "../../components/animations/motion"
import { HiExternalLink, HiLink } from "react-icons/hi"
import { VscGlobe, VscSourceControl } from "react-icons/vsc"
import { BsPeople } from "react-icons/bs"
import { GrStatusInfo, GrTechnology, GrUpdate, GrMonitor } from "react-icons/gr"
import { GiFlatPlatform, GiRelationshipBounds } from "react-icons/gi"
import { MdSettingsApplications, MdCheckCircle } from "react-icons/md";
import { ProjectDetails } from '../../utils/project-details'
import { useRouter } from "next/router"
import NextLink from "next/link"
import { Fragment } from "react"
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import GalleryList from "components/GalleryList";
import { NextPage } from "next";


const PageId : NextPage = (props) => {
    const router = useRouter()
    const { id } = router.query

    let lists = ProjectDetails.lists
    let details = lists.find(item => item.slug === id);

    let title = details?.name
    let description = details?.description
    let gallery = details?.gallery
    let development = details?.development
    let related = details?.related

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
                                    <Text as={'span'}>{details.application}</Text>
                                </ListItem>
                            )}
                            <ListItem key={4}>
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
                                        <NextLink href={details.source} passHref>
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
                            {development && (
                                <ListItem>
                                    <Badge my={'auto'} colorScheme="cyan" mr={2} fontSize="0.7em"><Icon as={BsPeople} /> Development</Badge>
                                    <Text as={'span'} fontSize="0.7em">
                                        <List spacing={1}>
                                            {development.map((item, idx) => (
                                                <ListItem key={idx}>
                                                    <ListIcon as={MdCheckCircle} color='green.500' /> {item}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Text>
                                </ListItem>
                            )}
                            {related && (
                                <ListItem>
                                    <Badge my={'auto'} colorScheme="cyan" mr={2} fontSize="0.7em"><Icon as={GiRelationshipBounds} /> Related</Badge>
                                    <Text as={'span'} fontSize="0.7em">
                                        <List spacing={1}>
                                            {related.map((item, idx) => (
                                                <ListItem key={ idx }>
                                                    <ListIcon as={ MdCheckCircle } color='green.500' />
                                                    { item.name }&nbsp;-&nbsp;
                                                    <NextLink href={ item.link } passHref>
                                                        <Link
                                                            _hover={ {
                                                                color: 'blue'
                                                            } }>
                                                            Link <Icon as={HiLink} />
                                                        </Link>
                                                    </NextLink>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Text>
                                </ListItem>
                            )}
                            <ListItem mt={3}>
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
                            {gallery && (
                                <ListItem>
                                    <Badge my={'auto'} colorScheme="cyan" mr={2} fontSize="0.7em"><Icon as={GrMonitor} /> Screen</Badge>
                                    <Box>
                                        {gallery.map((item, idx) => (
                                            <GalleryList 
                                                key={idx}
                                                index={ idx+1 }
                                                item={ item } />
                                        ))}
                                    </Box>
                                </ListItem>
                            )}
                        </List>
                    </MotionBox>
                </PageSliderFade>
            </PageLayout>
        </Fragment>
    )
}

export default PageId