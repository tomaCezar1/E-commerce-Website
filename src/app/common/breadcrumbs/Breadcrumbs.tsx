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
    <nav aria-label="breadcrumbs" className="breadcrumb-nav">
      <ul className="breadcrumb">
        <li>
          <a href="/" className="breadcrumb-item">
            Cegoltar
          </a>
        </li>
        {breadcrumbs.map((breadcrumb, index, array) => {
          if (index === 0 && !path) {
            return null;
          } else {
            return (
              <div key={breadcrumb.href} style={{ display: 'flex' }}>
                <span className="breadcrumb-item">&nbsp;/&nbsp;</span>
                <li>
                  <Link href={breadcrumb.href}>
                    <a
                      className={
                        index === array.length - 1
                          ? 'breadcrumb-last-item'
                          : 'breadcrumb-item'
                      }
                    >
                      {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                  </Link>
                </li>
              </div>
            );
          }
        })}
      </ul>
    </nav>
  );
}

Breadcrumbs.defaultProps = {
  path: [],
};
