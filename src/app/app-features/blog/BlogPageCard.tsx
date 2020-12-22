function BlogPageCard(): JSX.Element {
  return (
    <div className="blog-card-container">
      <img
        src="https://cdn.incoden.com/Produse/cat1.jpg"
        alt="img"
        className="blog-card-img"
      />
      <div className="blog-card-content">
        <div className="blog-card-title-flex">
          <h1 className="blog-card-title">Titlul stirii</h1>
          <p className="blog-card-date">03.12.2020</p>
        </div>
        <p className="blog-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil
          voluptatum fuga maiores modi expedita perferendis culpa ab quam alias.
        </p>
      </div>
    </div>
  );
}

export default BlogPageCard;
