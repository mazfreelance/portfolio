import Head from "next/head"
import { MetaProps } from "../../../interfaces"

const Meta = (props: MetaProps): JSX.Element => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="keywords" content={props.keywords} />
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content={props.image ? props.image : '/logo512.png'} />
            <meta property="og:description" content={props.description} />
            <meta property="og:site_name" content={props.title} />
            <title>
                {props.title.includes('Azmin') ? props.title : props.title.concat(' | Mohd Azmin')}
            </title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
    )
}

Meta.defaultProps = {
    'title': 'Mohd Azmin | Web Developer',
    'description': 'I am Full Stack Developer. Love to find new technology and knowledge',
    'keywords': 'mohdazmin, mohd azmin, web developer, full stack developer, backend developer'
}

export default Meta