import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogPageCard from './BlogPageCard'

function BlogPage(): JSX.Element {
  const { id } = useRouter().query
  console.log(id)

  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">Știri</h1>
        <div className="blog-page-container">
          <Link href={`/ro/news/${{ id }}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
        </div>
      </div>
    </>
  )
}

export default BlogPage
