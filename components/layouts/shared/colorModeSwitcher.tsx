import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import { MotionBox } from "../../animations/motion"

export const ColorModeSwitcher = (props: any) => {
    const { toggleColorMode } = useColorMode()
    const mode = useColorModeValue("dark", "light")

    const handleClick = () => {
        toggleColorMode()
    }
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <MotionBox 
            ml={2}
            onClick={handleClick}
            key={mode === 'dark' ? 'dark-icon' : 'light-icon'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            cursor="pointer"
            fontSize={['lg', 'xl', '2xl']}
            >
                {mode == 'dark' ? '☀️' : '🌕'}
            </MotionBox>
        </AnimatePresence>
    )
}