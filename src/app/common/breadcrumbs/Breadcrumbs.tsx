import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {convertBreadcrumb} from '../../../utils'

export default function Breadcrumbs(): JSX.Element {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs" className="breadcrumb-nav">
      <ul className="breadcrumb">
        <li>
          <a href="/" className="breadcrumb-item">Cegoltar</a>
        </li>
        {breadcrumbs.map((breadcrumb, index, array) => {
          return (
            <>
              <span>&nbsp;/&nbsp;</span>
              <li>
                <Link href={breadcrumb.href}>
                  <a className={index === array.length - 1 ? "breadcrumb-last-item" : "breadcrumb-item"}>
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  )
}
