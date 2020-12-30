import * as React from 'react';
import Link from 'next/link';

interface BreadPath {
  name: string;
  link: string;
}

interface BreadProps {
  path: BreadPath[];
}

export default function Breadcrumbs({ path }: BreadProps) {
  const basePath: BreadPath = {
    name: 'Cegoltar' + '\xa0' + '/',
    link: '/',
  };

  return (
    <div className="breadcrumb">
      <div className="breadcrumb-default-item">
        <Link href={basePath.link}>{basePath.name}</Link>
      </div>
      <div className="breadcrumb-item">
        {path.map((e, i) => (
          <Link key={i} href={e.link}>
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
