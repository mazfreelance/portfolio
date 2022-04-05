/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Props } from "./../../interfaces"
import { MotionBox } from "./motion"

const staggerVariants = {

}

const variants = {

}


export const PageSliderFade = ({ children }: Props) => {
    return <></>
}

export const StaggerChildren = ({ children }: Props) => {
    return (
    <MotionBox
        animate={{ opacity: 1, translateY: 0 }}
        variants={staggerVariants}>
        {children}
    </MotionBox>)
}

export const CardTransition = ({ children }: Props) => {
    return <MotionBox variants={variants}>{children}</MotionBox>
}