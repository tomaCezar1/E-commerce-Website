import { Flex, Icon, Skeleton } from '@chakra-ui/react';
import Router from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RightArrow from '../../../../../public/svg/RightArrow.svg';
import LeftArrow from '../../../../../public/svg/LeftArrow.svg';
import { useQuery } from '@apollo/client';
import { CarouselItems, CarouselQuery } from './CarouselQuery';

function CarouselComponent({ style = {} }): JSX.Element {
  const { loading, error, data } = useQuery<CarouselItems>(CarouselQuery, {
    variables: { sorting: [{ field: 'sortOrder', direction: 'ASC' }] },
  });

  const items = data?.carouselItems;

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleClick = (e, link) => {
    if (!link || link === '/') {
      e.stopPropagation();
    } else {
      Router.push(`${link}`);
    }
  };

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
      );
    } else
      return items?.map((item, index) => {
        return (
          <div key={index} className="carousel-img-container">
            <img
              src={item.image}
              alt="image"
              className="carousel-img"
              onClick={(e) => handleClick(e, item.link)}
            />
          </div>
        );
      });
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="slick-arrow-bg slick-arrow-bg-next">
        <div
          className="slick-arrow"
          style={{
            ...style,
            right: '9%',
          }}
          onClick={onClick}
        >
          <i className="icons">
            <RightArrow />
          </i>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="slick-arrow-bg">
        <div
          className="slick-arrow"
          style={{
            ...style,
            left: '8%',
          }}
          onClick={onClick}
        >
          <i className="icons">
            <LeftArrow />
          </i>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container" style={style}>
      <Skeleton isLoaded={!loading} h="100%" w="100%">
        <Slider {...settings}>{slide()}</Slider>
      </Skeleton>
    </div>
  );
}

export default CarouselComponent;
