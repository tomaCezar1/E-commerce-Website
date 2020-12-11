import BlogPage from '../app/app-features/blog/BlogPage'
import BlogPageCard from '../app/app-features/blog/BlogPageCard'
import Breadcrumbs from '../app/common/breadcrumbs/Breadcrumbs'

export default function News(): JSX.Element {
  return (
    <div>
      <Breadcrumbs />
      <BlogPage />
      <BlogPageCard />
    </div>
  )
}
