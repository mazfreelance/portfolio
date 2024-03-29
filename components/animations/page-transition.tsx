/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { SlideFade } from "@chakra-ui/react";
import { Props } from "./../../types";
import { MotionBox } from "./motion";

export const item = {
    hidden: {
        opacity: 50,
        scale: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const container = {
    hidden: {
        opacity: 1,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2
        }
    }
}

const staggerVariants = {
    initial: {
        opacity: 0,
        translateY: -20
    },
    enter: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: -1
        }
    }
};

const variants = {
    initial: {
        opacity: 0,
        translateY: -20
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }    
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};

export const PageSliderFade = ({ children }: Props) => {
    return <SlideFade in>{children}</SlideFade>;
};

export const StaggerChildren = ({ children }: Props) => {
    return (
        <MotionBox
            animate={{ opacity: 1, translateY: 0 }}
            variants={staggerVariants}
        >
            {children}
        </MotionBox>
    );
};

export const CardTransition = ({ children }: Props) => {
    return <MotionBox variants={variants}>{children}</MotionBox>;
};
