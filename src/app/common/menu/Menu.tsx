import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../context';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menu({ onClose }): JSX.Element {
  const router = useRouter();
  const { appContext } = useContext(AppContext);
  const [activeCategory, setActiveCategory] = useState(0);

  const [rootCategories, setRootCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);

  useEffect(() => {
    const rooCats = appContext.categories.filter((c) => !c.parent);
    setRootCategories(rooCats);
    setChildCategories(
      appContext.categories.filter((c) => c.parent === rooCats[0].id)
    );
  }, [appContext]);

  const toggleMouse = (index: number, id: string) => {
    setActiveCategory(index);
    setChildCategories(appContext.categories.filter((c) => c.parent === id));
  };

  return (
    <div id="menu" className="menu-container hide-menu">
      <ul className="categories-list">
        {rootCategories.map((category, index) => {
          const { title, id, slug } = category;

          return (
            <Link
              href={'/categories/[categorySlug]'}
              as={`/categories/${slug}`}
              locale={router.locale}
              key={id}
            >
              <li
                className={
                  activeCategory === index
                    ? 'menu-list-item highlighted'
                    : 'menu-list-item'
                }
                onMouseEnter={() => toggleMouse(index, id)}
                onClick={() => onClose(false)}
              >
                <span className="menu-item-title">{title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className="subcategories">
        {childCategories?.map((element) => {
          const { id, title, slug } = element;
          return (
            <Link
              href={'/categories/[categorySlug]/[subcategorySlug]?page=1'}
              as={`/categories/${rootCategories[activeCategory].slug}/${slug}?page=1`}
              locale={router.locale}
              key={id}
            >
              <li className="children-item" onClick={() => onClose(false)}>
                <span className="children-title">{title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
