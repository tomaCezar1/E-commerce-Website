import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { convertBreadcrumb } from '../../../utils';

export default function Breadcrumbs({ path = [] }): JSX.Element {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    let pathArray;
    if (router) {
      if (path && path.length > 0) {
        pathArray = path.map((element, i) => {
          return {
            breadcrumb: element.name,
            href: element.path === '/' ? element.path : '/' + element.path,
          };
        });
        setBreadcrumbs(pathArray);
      } else {
        const linkPath = router.asPath.split('/');
        linkPath.shift();

        pathArray = linkPath.map((element, i) => {
          return {
            breadcrumb: element,
            href: '/' + linkPath.slice(0, i + 1).join('/'),
          };
        });

        setBreadcrumbs(pathArray);
      }
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

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

Breadcrumbs.defaultProps = {
  path: [],
};
