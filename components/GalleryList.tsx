import React from 'react'
import { Badge, Box, Text } from '@chakra-ui/react'
import Section from './layouts/shared/section'
import ImageGallery from 'react-image-gallery';


const GalleryList = ({ index, item }) => (
    <Section>
        { item?.name && (<Text mt={ 1 } textAlign={ 'justify' } styleConfig={ {
            textIndent: '1em'
        } }>
            <Badge colorScheme="orange" mr={2} fontSize='0.7em'>
             { index }. {/* <Icon as={GiFlatPlatform} /> */} { item.name }
            </Badge>
        </Text> )}
        <Box mt={ [0, 2] } display={ ['none', 'none', 'block'] }>
            { item?.data && (
                <ImageGallery
                    items={ item?.data }
                    thumbnailPosition={ 'left' }
                    showIndex={ 'true' }
                    showBullets={ 'true' }
                />
            ) }
        </Box>
        <Box mt={ [0, 2] }  display={ ['block', 'block', 'none'] }>
            { item?.data && (
                <ImageGallery
                    items={ item?.data }
                    thumbnailPosition={'bottom'}
                    showIndex={'true'}
                    showBullets={'true'}
                    autoPlay={'true'}
                />
            ) }
        </Box>
    </Section>
)

export default GalleryList
