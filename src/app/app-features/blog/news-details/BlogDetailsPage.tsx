import { formatDate, createMarkup } from '../../../../utils';
import Breadcrumbs from '../../../common/breadcrumbs/Breadcrumbs';
import BlogPageCard from '../BlogPageCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';

function BlogDetailsPage({ blogPost, blogPosts }): JSX.Element {
  const path = [
    {
      name: 'Știri',
      link: '/news',
    },
  ];

  const router = useRouter();
  const { title, content, createdAt } = blogPost;

  let blogPostsLimit = blogPosts.slice(0, 3);

  const [isSmallerThan1250] = useMediaQuery('(max-width: 1250px');
  if (isSmallerThan1250) {
    blogPostsLimit = blogPosts.slice(0, 4);
  }

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="blog-details-container">
        <div className="blog-title-wrapper">
          <h1 className="blog-details-title">{title}</h1>
          <p className="blog-details-date">{formatDate(createdAt)}</p>
        </div>
        <div
          className="blog-details-content"
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      </div>
      <h1 className="blog-details-title blog-details-title-bottom">
        Alte știri
      </h1>
      <div className="blog-page-container">
        {blogPostsLimit.map((blog, index) => {
          return (
            <Link
              key={index}
              href="/news/[id]"
              as={`/news/${blog.id}`}
              locale={router.locale}
            >
              <a>
                <BlogPageCard blogPost={blog} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BlogDetailsPage;
