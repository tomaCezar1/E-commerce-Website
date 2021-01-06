import JobsPage from '../app/app-features/jobs-page/JobsPage';
import { JobsListQuery } from '../app/app-features/jobs-page/JobsQuery';
import { initializeApollo } from '../app/lib/apolloClient';

export default function Jobs({ jobsList }): JSX.Element {
  return <JobsPage jobsList={jobsList} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const jobsListData = await apolloClient.query({
    query: JobsListQuery,
  });

  return {
    props: {
      jobsList: jobsListData.data.jobs,
    },
  };
}
