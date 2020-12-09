import React, {useState, useContext} from 'react'
import {Skeleton} from "@chakra-ui/react";

export default function Menu(): JSX.Element {
  const [subCategories, showSubCategories] = useState(false)

  const toggleMouseEnter = () => {
    showSubCategories(!subCategories)
  }

  return (
    <div className="menu-container">
      <div className="categories-list">
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