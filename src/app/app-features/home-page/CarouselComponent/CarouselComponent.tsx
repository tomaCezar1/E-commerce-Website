import { useCallback, useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
import Router from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RightArrow from '../../../../../public/svg/RightArrow.svg';
import LeftArrow from '../../../../../public/svg/LeftArrow.svg';
import { useQuery } from '@apollo/client';
import { CarouselItems, CarouselQuery } from './CarouselQuery';

function CarouselComponent({ style = {} }): JSX.Element {
  const { loading, data } = useQuery<CarouselItems>(CarouselQuery, {
    variables: { sorting: [{ field: 'sortOrder', direction: 'ASC' }] },
  });
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleClick = useCallback(
    (e, link) => {
      if (!link || link === '/' || dragging) {
        e.stopPropagation();
      } else {
        Router.push(`${link}`);
      }
    },
    [dragging]
  );

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

  function slide() {
    if (!items?.length) {
      return (
        <div className="carousel-img-container">
          <img
            src="https://cdn.incoden.com/Diferite/not-found.png"
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
    const { style, onClick } = props;
    return (
      <div className="slick-arrow-bg slick-arrow-bg-next" onClick={onClick}>
        <div
          className="slick-arrow"
          style={{
            ...style,
          }}
        >
          <i className="icons">
            <RightArrow />
          </i>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div className="slick-arrow-bg" onClick={onClick}>
        <div
          className="slick-arrow"
          style={{
            ...style,
          }}
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
        <Slider
          {...settings}
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {slide()}
        </Slider>
      </Skeleton>
    </div>
  );
}

export default CarouselComponent;
