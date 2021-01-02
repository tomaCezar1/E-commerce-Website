import { formatDate } from '../../../../utils';
import Breadcrumbs from '../../../common/breadcrumbs/Breadcrumbs';
import BlogPageCard from '../BlogPageCard';

function BlogDetailsPage({ blogPost }): JSX.Element {
  const path = [
    {
      name: 'Știri',
      link: '/news',
    },
  ];

  const { title, content, createdAt } = blogPost;

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="blog-details-container">
        <div className="blog-title-wrapper">
          <h1 className="blog-details-title">{title}</h1>
          <p className="blog-details-date">{formatDate(createdAt)}</p>
        </div>
        <p className="blog-details-text">{content}</p>
      </div>
      <h1 className="blog-details-title" style={{ marginBottom: '32px' }}>
        Alte știri
      </h1>
      {/* <div className="blog-details-cards-flex">
        <BlogPageCard />
        <BlogPageCard />
        <BlogPageCard />
      </div> */}
    </>
  );
}

export default BlogDetailsPage;
