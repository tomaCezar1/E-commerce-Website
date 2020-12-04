import { Flex, Icon, Skeleton } from '@chakra-ui/react'
import Router from 'next/router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RightArrow from '../../../../../public/svg/RightArrow.svg'
import LeftArrow from '../../../../../public/svg/LeftArrow.svg'
import { useQuery } from '@apollo/client'
import { useState } from 'react'

function PartnerList(): JSX.Element {
  const paths = [
    'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
    'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
    'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
  ]

  const [x, setX] = useState(0)

  const goLeft = () => {
    console.log(x)
    x === 0 ? null : setX(x + 105)
  }

  const goRight = () => {
    console.log(x)
    x === -105 * (paths.length - 5) ? null : setX(x - 105)
  }

  return (
    <div className="slider-container">
      <div className="slider">
        {paths.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={item} alt="" className="partner-img display" />
            </div>
          )
        })}
        <button id="goLeft" onClick={goLeft}>
          <LeftArrow />
        </button>
        <button id="goRight" onClick={goRight}>
          <RightArrow />
        </button>
      </div>
    </div>
  )
}

export default PartnerList

// const paths = [
//   'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
//   'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
//   'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
//   'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
//   'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
//   'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
//   'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
//   'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
//   'https://source.unsplash.com/BeOW_PJjA0w/1600x900',
// ]

// const arr = []
// const [x, setX] = useState(arr)

// const goLeft = () => {}

// const goRight = () => {}

// return (
//   <div className="slider-container">
//     <div className="slider">
//       {paths.map((item, index) => {
//         return (
//           <div key={index}>
//             <img src={item} alt="" className="partner-img current" />
//             {arr}
//           </div>
//         )
//       })}
//       <button id="goLeft" onClick={goLeft}>
//         <LeftArrow />
//       </button>
//       <button id="goRight" onClick={goRight}>
//         <RightArrow />
//       </button>
//     </div>
//   </div>
// )
