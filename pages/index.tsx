import Home from 'components/pages/home'
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageLayout from '../components/layouts/page'

const IndexPage: NextPage = (props) => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  )
}

export default IndexPage
