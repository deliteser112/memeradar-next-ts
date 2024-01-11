import Link from 'next/link'
import Layout from '../components/Layout'
import Search from '../components/Search'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <Search />
  </Layout>
)

export default IndexPage
