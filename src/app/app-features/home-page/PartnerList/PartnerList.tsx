import { Flex, Icon, Skeleton } from '@chakra-ui/react'
import 'slick-carousel/slick/slick-theme.css'
import RightArrow from '../../../../../public/svg/RightPartnerIcon.svg'
import LeftArrow from '../../../../../public/svg/LeftPartnerIcon.svg'
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
    x === 0 ? null : setX(x + 100)
  }

  const goRight = () => {
    console.log(x)
    x === -100 * (paths.length - 5) ? null : setX(x - 100)
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
      </div>
      <i id="goLeft" onClick={goLeft}>
        <LeftArrow />
      </i>
      <i id="goRight" onClick={goRight}>
        <RightArrow />
      </i>
    </div>
  )
}

export default PartnerList
