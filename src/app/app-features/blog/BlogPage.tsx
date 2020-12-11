import BlogPageCard from './BlogPageCard'

function BlogPage(): JSX.Element {
  return (
    <>
      <div className="blog-page">
        <h1 className="blog-page-title">Știri</h1>
        <div className="blog-page-container">
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
        </div>
      </div>
    </>
  )
}

export default BlogPage
