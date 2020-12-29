import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function Categories({
  subcategories,
  categoryDetails,
}): JSX.Element {
  const router = useRouter();

  return (
    <div style={{ margin: '32px 0' }}>
      <Breadcrumbs />
      <div className="title-1">{categoryDetails.title}</div>
      <div className="subcat-container">
        <div className="subcategories-grid">
          {subcategories.map((subCategory, index) => {
            return (
              <Link
                href={'/categories/[categorySlug]/[subcategorySlug]'}
                as={`/categories/${categoryDetails.slug}/${subCategory.slug}`}
                locale={router.locale}
                key={index}
              >
                <div className="subcat-card-wrapper">
                  <img
                    src={subCategory.images[0]}
                    className="subcat-card-image"
                    alt=""
                  />
                  <span className="subcat-title-text">{subCategory.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="subcat-banner">Baner</div>
      </div>
    </div>
  );
}
