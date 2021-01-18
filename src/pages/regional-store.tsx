import React, { useContext } from 'react';
import RegionalStore from '../app/app-features/regional-store/RegionalStore';
import Breadcrumbs from '../app/common/breadcrumbs/Breadcrumbs';
import { AppContext } from '../context';

export default function RegionalStorePage() {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.regionalStores,
      link: '/regional-store',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <RegionalStore />
    </>
  );
}
