import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogPageCard from './BlogPageCard';

function BlogPage({ blogPosts }): JSX.Element {
  const router = useRouter();

  // const blogPostsDummy = [
  //   {
  //     id: '5afgr',
  //     slug: 'lorem-ipsum-1',
  //     title: 'Lorem ipsum',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  //   {
  //     id: 'asdasdr',
  //     slug: 'lorem-ipsum-2',
  //     title: 'Lorem ipsum 2',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  //   {
  //     id: '5afgr',
  //     slug: 'lorem-ipsum-3',
  //     title: 'Lorem ipsum 3',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  //   {
  //     id: '5afgr',
  //     slug: 'lorem-ipsum-4',
  //     title: 'Lorem ipsum 4',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  //   {
  //     id: '5afgr',
  //     slug: 'lorem-ipsum-5',
  //     title: 'Lorem ipsum 5',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  //   {
  //     id: '5afgr',
  //     slug: 'lorem-ipsum-6',
  //     title: 'Lorem ipsum 6',
  //     previewImg: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //     content: '<p>asdasdasd</p>',
  //     createdAt: '2021-01-04T08:58:31.885Z',
  //   },
  // ];

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
