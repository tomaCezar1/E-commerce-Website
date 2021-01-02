import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogPageCard from './BlogPageCard';

function BlogPage({ blogPosts }): JSX.Element {
  const router = useRouter();

  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">Știri</h1>
        <div className="blog-page-container">
          {blogPosts.map((e, i) => {
            return (
              <Link
                key={i}
                href="/news/[id]"
                as={`/news/${e.id}`}
                locale={router.locale}
              >
                <a>
                  <BlogPageCard blogPost={e} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
