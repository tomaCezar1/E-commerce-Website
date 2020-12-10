import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../../context'

export default function Menu(): JSX.Element {
  const { appContext } = useContext(AppContext)
  const [activeCategory, setActiveCategory] = useState(0)

  const [rootCategories, setRootCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]); 


  useEffect(() => {
    const rooCats = appContext.categories.filter(c => !c.parent);
    setRootCategories(rooCats);
    setChildCategories(appContext.categories.filter(c => c.parent === rooCats[0].id))
  }, [appContext])

  const toggleMouse = (index: number, id: string) => {
    setActiveCategory(index)
    setChildCategories(appContext.categories.filter(c => c.parent === id))
  }

  return (
    <div id="menu" className="menu-container hide-menu">
      <ul className="categories-list">
        {rootCategories.map((category, index) => {
          const {title, id} = category

          return (
            <li
              className={activeCategory === index ? "menu-list-item highlighted" : "menu-list-item"}
              key={id}
              onMouseEnter={() => toggleMouse(index, id)}
            >
              <span className="menu-item-title">{title}</span>
            </li>
          )
        })}
        <ul className="subcategories">
          {childCategories?.map(element => {
              const {id, title} = element

              return (
                <li className="children-item" key={id}>
                  <span className="children-title">{title}</span>
                </li> 
              )
          })}
        </ul>   
      </ul>
    </div>
  )
}
