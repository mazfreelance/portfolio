import { Fragment, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { PageProps } from "../../types"
import Meta from './shared/meta'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const PageLayout = (props: PageProps): JSX.Element => (
    <Fragment>
        <Meta title={props.title} description={props.description} keywords={props.keywords} image={props.image} />
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'tween' }} >
                { props.children }
        </motion.main>
    </Fragment>
)

export default PageLayout