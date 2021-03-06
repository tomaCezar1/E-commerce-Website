import { BlogQuery } from '../../app/app-features/blog-page/BlogPageQueries';
import BlogDetailsPage from '../../app/app-features/blog-page/blogpost-details/BlogDetailsPage';
import { initializeApollo } from '../../app/lib/apolloClient';
import { BlogPostsQuery } from '../../app/app-features/blog-page/BlogPageQueries';

export default function BlogNews({ blogPost, blogPosts }) {
  return <BlogDetailsPage blogPost={blogPost} blogPosts={blogPosts} />;
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const blogPostData = await apolloClient.query({
    query: BlogQuery,
    variables: {
      id: context.query.id,
    },
    // context: {
    //   headers: {
    //     lang: context.locale,
    //   },
    // },
  });

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
      blogPost: blogPostData.data.blog,
      blogPosts: blogPostsData.data.blogs,
    },
  };
}
