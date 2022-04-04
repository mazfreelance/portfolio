import PageLayout from 'components/layouts/page'
import { NextPage } from 'next'
import Link from 'next/link'

const AboutPage: NextPage = (props) => {
  return (
    <PageLayout title="About">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </PageLayout>
  )
}

export default AboutPage
