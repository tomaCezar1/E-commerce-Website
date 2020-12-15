import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogPageCard from './BlogPageCard'

function BlogPage(): JSX.Element {
  //query needed
  const router = useRouter()
  const arr = [{},{},{},{}, {}, {}];

  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">Știri</h1>
        <div className="blog-page-container">
          {arr.map((e, i) => {
            return (
              <Link
                key={i}
                href="/news/[id]"
                as={`/news/${'placeholder'}`}
                locale={router.locale}
              >
                <a>
                  <BlogPageCard />
                </a>
              </Link>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default BlogPage
