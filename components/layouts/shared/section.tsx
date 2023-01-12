import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion } from "framer-motion"

const StyleDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0, ...props }) => (
    <StyleDiv
        // initial={{ translateY: 10, opacity: 1 }}
        animate={{
            // translateY:0,
            // opacity: 1,
            transition: {
                delay: delay,
                duration: 0.8,
            },
        }}
        mb={6}
        {...props}>
        {children}
    </StyleDiv>
)

export default Section