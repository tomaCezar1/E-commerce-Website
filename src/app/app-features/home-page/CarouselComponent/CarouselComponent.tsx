import { Flex, Icon } from '@chakra-ui/react'
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
  console.log(data?.carouselItems)

  const items = data?.carouselItems
  const images = data?.carouselItems[0].image
  const link = data?.carouselItems[0].link
  console.log(images, link)

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

  // const items = [
  //   {
  //     id: 1,
  //     url:
  //       'http://img.nowrunning.com/content/movie/2014/Jagga-Jaso/wall_1024x768_01.jpg',
  //   },
  //   {
  //     id: 2,
  //     url:
  //       'https://alchetron.com/cdn/Cocktail-2012-film-images-6dbd0ec2-2ea4-47aa-88fd-388cabed7f8.jpg',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://cdn.incoden.com/Produse/cat1.jpg',
  //   },
  // ]

  const handleClick = (link) => {
    Router.push(`${link}`)
  }

  //Carousel will not work for 1 image only
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
            {console.log(item)}
            <img
              src={item.image}
              alt="image"
              className="carousel-img"
              onClick={() => handleClick(item.link)}
            />
            {/* <img src={item.url} alt="image" className="carousel-img" /> */}
          </div>
        )
      })
  }

  //to change the styles, comment the inline
  //and add the style in the global styles.scss in the
  //'slick-arrow' class
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
        <Slider {...settings}>{slide()}</Slider>
      </div>
    </Flex>
  )
}

export default CarouselComponent

//Breakpoints for responsive
// responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       infinite: true,
//       dots: true,
//     },
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       initialSlide: 2,
//     },
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     },
//   },
// ],
