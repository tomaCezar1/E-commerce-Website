import { BlogQuery } from '../../app/app-features/blog-page/BlogPageQueries';
import BlogDetailsPage from '../../app/app-features/blog-page/blogpost-details/BlogDetailsPage';
import { initializeApollo } from '../../app/lib/apolloClient';

export default function BlogNews({ blogPost }) {
  return <BlogDetailsPage blogPost={blogPost} />;
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const blogPostData = await apolloClient.query({
    query: BlogQuery,
    variables: {
      id: context.query.id,
    },
  });

  return {
    props: {
      blogPost: blogPostData.data.blog,
    },
  };
}
