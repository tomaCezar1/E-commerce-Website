import React, { useState, useContext, useEffect } from 'react'
import {Skeleton} from "@chakra-ui/react";
import { AppContext } from '../../../context'

export default function Menu(): JSX.Element {
  const [subCategories, showSubCategories] = useState(false)
  const { appContext } = useContext(AppContext)

  useEffect(() => {
    console.log(appContext);
  }, [])

  const toggleMouseEnter = () => {
    showSubCategories(!subCategories)
  }

  return (
    <div className="menu-container">
      <div className="categories-list">
        {
          appContext.categories?.map((cat, i) => {
            return <div key={i}>{cat.title}</div>
          })
        }
        {/* {categories.map((category) => {
          const {title, id, parent} = category
          if(parent === null) {
            return (
              <div
                className="menu-list-item"
                key={id}
                onMouseEnter={toggleMouseEnter}
                onMouseLeave={toggleMouseEnter}
              >
                <span className="menu-item-title">{title}</span>
              </div>
            )
          }
        })} */}
      </div>
      <div className="subcategories">

      </div>
    </div>
  )
}
