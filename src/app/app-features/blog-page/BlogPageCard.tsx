import { formatDate, createMarkup } from '../../../utils';

function BlogPageCard({ blogPost }): JSX.Element {
  const { title, createdAt, previewDesc } = blogPost;

  return (
    <div className="blog-card-container">
      <img
        src="https://cdn.incoden.com/Produse/cat1.jpg"
        alt="img"
        className="blog-card-img"
      />
      <div className="blog-card-content">
        <div className="blog-card-title-flex">
          <h1 className="blog-card-title">{title}</h1>
          <p className="blog-card-date">{formatDate(createdAt)}</p>
        </div>
        <p
          className="blog-card-description"
          dangerouslySetInnerHTML={createMarkup(previewDesc)}
        />
      </div>
    </div>
  );
}

export default BlogPageCard;
