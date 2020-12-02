import React from 'react'
import LeftRectangle from '../../../public/svg/LeftRectangleSlide.svg'
import LeftArrow from '../../../public/svg/LeftRectangleArrow.svg'

export default function LeftIcon() {
  return (
    <>
      <div>
        <img src={LeftRectangle} alt="" style={{ position: 'relative' }} />
        <img src={LeftArrow} alt="" style={{ position: 'absolute' }} />
      </div>
    </>
  )
}
