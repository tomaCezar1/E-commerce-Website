import { useContext } from 'react';
import BlogPage from '../../app/app-features/blog-page/BlogPage';
import { BlogPostsQuery } from '../../app/app-features/blog-page/BlogPageQueries';
import Breadcrumbs from '../../app/common/breadcrumbs/Breadcrumbs';
import { initializeApollo } from '../../app/lib/apolloClient';
import { AppContext } from '../../context';

export default function Index({ blogPosts }): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.news,
      link: '/news',
    },
  ];

  return (
    <div>
      <Breadcrumbs path={path} />
      <BlogPage blogPosts={blogPosts} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const blogPostsData = await apolloClient.query({
    query: BlogPostsQuery,
    // context: {
    //   headers: {
    //     lang: context.locale,
    //   },
    // },
  });

  return {
    props: {
      blogPosts: blogPostsData.data.blogs,
    },
  };
}
