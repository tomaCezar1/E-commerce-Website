import React from 'react';
import RegionalStore from '../app/app-features/regional-store/RegionalStore';
import Breadcrumbs from '../app/common/breadcrumbs/Breadcrumbs';

export default function RegionalStorePage() {
  const path = [
    {
      name: '\xa0' + 'Magazine Regionale',
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
