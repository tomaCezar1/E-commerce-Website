import BlogPage from '../../app/app-features/blog/BlogPage';
import Breadcrumbs from '../../app/common/breadcrumbs/Breadcrumbs';

export default function Index(): JSX.Element {
  const path = [
    {
      name: 'Știri',
      link: '/news',
    },
  ];

  return (
    <div>
      <Breadcrumbs path={path} />
      <BlogPage />
    </div>
  );
}
