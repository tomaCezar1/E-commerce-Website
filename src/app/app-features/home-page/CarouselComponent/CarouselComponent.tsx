import { Flex, Icon, Skeleton } from '@chakra-ui/react'
import Router from 'next/router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RightArrow from '../../../../../public/svg/RightArrow.svg'
import LeftArrow from '../../../../../public/svg/LeftArrow.svg'
import { useQuery } from '@apollo/client'
import { ICarouselItems, CarouselQuery } from './CarouselQuery'

function CarouselComponent(): JSX.Element {
  const { loading, error, data } = useQuery<ICarouselItems>(CarouselQuery)

  const items = data?.carouselItems

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const handleClick = (link) => {
    Router.push(`${link}`)
  }

  function slide() {
    if (!items?.length) {
      return (
        <div className="carousel-img-container">
          <img
            src="https://ibb.co/w78VcM2"
            alt="error image"
            className="carousel-img"
          />
        </div>
      )
    } else
      return items?.map((item, index) => {
        return (
          <div key={index} className="carousel-img-container">
            <img
              src={item.image}
              alt="image"
              className="carousel-img"
              onClick={() => handleClick(item.link)}
            />
          </div>
        )
      })
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div className="slick-arrow-bg slick-arrow-bg-next">
        <div
          className="slick-arrow"
          style={{
            ...style,
            right: '12%',
          }}
          onClick={onClick}
        >
          <Icon as={RightArrow} />
        </div>
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div className="slick-arrow-bg">
        <div
          className="slick-arrow"
          style={{
            ...style,
            left: '12%',
          }}
          onClick={onClick}
        >
          <Icon as={LeftArrow} />
        </div>
      </div>
    )
  }

  return (
    <Flex align="center" justify="center">
      <div className="carousel-container">
        <Skeleton isLoaded={!loading} h="100%" w="100%">
          <Slider {...settings}>{slide()}</Slider>
        </Skeleton>
      </div>
    </Flex>
  )
}

export default CarouselComponent
