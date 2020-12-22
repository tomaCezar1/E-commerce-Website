import BlogPage from '../../app/app-features/blog/BlogPage';
import Breadcrumbs from '../../app/common/breadcrumbs/Breadcrumbs';

export default function Index(): JSX.Element {
  return (
    <div>
      <Breadcrumbs />
      <BlogPage />
    </div>
  );
}
