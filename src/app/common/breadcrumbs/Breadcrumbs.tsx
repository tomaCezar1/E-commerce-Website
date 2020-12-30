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
    name: 'Cegoltar',
    link: '/',
  };

  return (
    <div className="breadcrumb">
      <div className="breadcrumb-default-item">
        <Link href={basePath.link}>{basePath.name}</Link>
      </div>
      <div style={{ display: 'flex' }}>
        {path.map((e, i, a) => {
          return (
            <div
              key={i}
              className={
                i === a.length - 1 ? 'breadcrumb-last-item' : 'breadcrumb-item'
              }
            >
              <span className="breadcrumb-separator">&nbsp;/&nbsp;</span>
              <Link key={i} href={e.link}>
                {e.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
