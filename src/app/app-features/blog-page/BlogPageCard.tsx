import { useMediaQuery } from '@chakra-ui/react';
import { formatDate, createMarkup } from '../../../utils';

function BlogPageCard({ blogPost }): JSX.Element {
  const { title, createdAt, previewDesc } = blogPost;

  const [isSmallerThan581] = useMediaQuery('(max-width: 580px');

  return (
    <div className="blog-card-container">
      <img
        src="https://cdn.incoden.com/Produse/cat1.jpg"
        alt="img"
        className="blog-card-img"
      />
      <div className="blog-card-content">
        <div
          className={
            isSmallerThan581
              ? 'blog-card-title-flex-mobile'
              : 'blog-card-title-flex'
          }
        >
          <h1 className="blog-card-title">{title}</h1>
          <p className="blog-card-date">{formatDate(createdAt)}</p>
        </div>
        {!isSmallerThan581 && (
          <p
            className="blog-card-description"
            dangerouslySetInnerHTML={createMarkup(previewDesc)}
          />
        )}
      </div>
    </div>
  );
}

export default BlogPageCard;
