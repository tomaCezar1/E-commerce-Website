import React, { useState, useContext, useEffect } from 'react'
import {Skeleton} from "@chakra-ui/react";
import {sortCategories } from '../../../utils/categories'
import { AppContext } from '../../../context'

export default function Menu(): JSX.Element {
  const { appContext } = useContext(AppContext)
  const [categories, setCategories] = useState([])
  const [showSubCategories, setShowSubCategories] = useState(false)

  useEffect(() => {
    setCategories(sortCategories(appContext.categories))
  }, [categories])

  const toggleMouse = () => {
    setShowSubCategories(!showSubCategories)
  }

  return (
    <div id="menu" className="menu-container hide-menu">
      <ul className="categories-list">
        {categories.map((category) => {
          const {title, id, children} = category
          return (
            <li
              className="menu-list-item"
              key={id}
              onMouseEnter={toggleMouse}
              onMouseLeave={toggleMouse}
            >
              <span className="menu-item-title">{title}</span>
              {children && showSubCategories && (
                <ul className="subcategories">
                  {children.map(element => {
                    const {id, title} = element

                    return (
                      <li className="children-item" key={id}>
                        <span className="children-title">{title}</span>
                      </li> 
                    )
                  })}
              </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
