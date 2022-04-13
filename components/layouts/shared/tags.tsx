import {
    Flex,
    Tag as ChakraTag
} from "@chakra-ui/react"
import { CTagProps, FProps } from "./../../../interfaces"

export const Tag: React.FC<CTagProps> = ({
    name,
    interactive = true,
    ...props
}) => {
    const propsOverride = {
        size: 'sm',
        verticalAlign: 'middle',
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


export const Tags: React.FC<FProps> = ({
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