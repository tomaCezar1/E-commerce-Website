import * as React from 'react';

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
      <a href={basePath.link} className="breadcrumb-item">
        {basePath.name}
      </a>
      {path.map((e, i, a) => (
        <div key={i} style={{ display: 'flex' }}>
          <span className="breadcrumb-item">&nbsp;/&nbsp;</span>
          <a
            href={e.link}
            className={
              i === a.length - 1 ? 'breadcrumb-last-item' : 'breadcrumb-item'
            }
          >
            {e.name}
          </a>
        </div>
      ))}
    </div>
  );
}
