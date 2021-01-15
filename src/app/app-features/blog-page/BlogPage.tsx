import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogPageCard from './BlogPageCard';
import { AppContext } from '../../../context';

function BlogPage({ blogPosts }): JSX.Element {
  const router = useRouter();
  const context = useContext(AppContext);

  const { dictionary } = context.appContext;

  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">{dictionary.news}</h1>
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
