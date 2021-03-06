import Head from "next/head"
import { MetaProps } from "../../../interfaces"

const Meta = (props: MetaProps): JSX.Element => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="author" content={ props.author }/>
            <meta name="keywords" content={props.keywords} />
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content={props.image ? props.image : '/logo.png'} />
            <meta property="og:description" content={props.description} />
            <meta property="og:site_name" content={props.title} />
            <title>
                {props.title.includes('Azmin') ? props.title : props.title.concat(' | Mohd Azmin')}
            </title>
            <link rel="icon" type="image/x-icon" href="/favicon-48x48.ico" />
        </Head>
    )
}

Meta.defaultProps = {
    'author': 'Mohd Azmin',
    'title': 'Mohd Azmin | Full Stack Developer',
    'description': 'I am Full Stack Developer. Love to find new technology and knowledge',
    'keywords': 'mohdazmin, mohd azmin, web developer, full stack developer, backend developer',
    'image': 'https://mohdazmin.com/logo.png'
}

export default Meta