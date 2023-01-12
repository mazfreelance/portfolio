import {
    Flex,
    Tag as ChakraTag
} from "@chakra-ui/react"
import { getTagColor } from "components/theme"
import { ChakraTagProps, FlexProps } from "./../../../types"

export const Tag: React.FC<ChakraTagProps> = ({
    name,
    interactive = true,
    ...props
}) => {
    const propsOverride = {
        size: 'sm',
        verticalAlign: 'middle',
        colorScheme: getTagColor(name)
    }
    if (!interactive) {
        return (
            <ChakraTag {...props} {...propsOverride}>
                {name}
            </ChakraTag>
        )
    }
    return (
        <ChakraTag {...props} {...propsOverride}>
            {name}
        </ChakraTag>
    )
}


export const Tags: React.FC<FlexProps> = ({
    tags,
    interactive = true,
    tagProps = {},
    ...props
}) => {
    if (!tags || tags.length === 0) return null
    return (
        <Flex {...props} alignItems={'center'} flexWrap={'wrap'} m="-2px">
            {tags.map((tag, index) => (
                <Tag
                    key={tag}
                    name={tag}
                    interactive={interactive}
                    m={'2px'}
                    {...tagProps} />
            ))}
        </Flex>
    )
}