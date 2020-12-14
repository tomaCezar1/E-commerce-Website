import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogPageCard from './BlogPageCard'

function BlogPage(): JSX.Element {
  //query needed
  const { id } = useRouter().query
  console.log(id)

  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">Știri</h1>
        <div className="blog-page-container">
          <Link href="/blog-news/[id]" as={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <Link href={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <Link href={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <Link href={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <Link href={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
          <Link href={`/blog-news/${id}`}>
            <a>
              <BlogPageCard />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogPage
