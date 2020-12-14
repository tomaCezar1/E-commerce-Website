import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Categories({subcategories, categoryDetails}): JSX.Element {
  const router = useRouter()

  return (
    <div style={{ margin: '30px 0' }}>
      <div className="title-1">
        {categoryDetails.title}
      </div>
      {
        subcategories.map((subCategory, index) => {
          return (
            <Link
              href={`/categories/[categorySlug]/[subcategorySlug]`}
              as={`/categories/${categoryDetails.slug}/${subCategory.slug}`}
              locale={router.locale}
              key={index}>
              <div style={{cursor: 'pointer'}}>
                {subCategory.title}
                <img src={subCategory.images[0]} style={{width: 'auto', height: '100px'}} alt='' />
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
