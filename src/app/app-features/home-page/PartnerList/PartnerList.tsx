import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../../../../public/svg/LeftPartnerIcon.svg';
import RightArrow from '../../../../../public/svg/LeftPartnerIcon.svg';
import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

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
  ];
  const [x, setX] = useState(0);

  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)');
  const [isLargerThan0] = useMediaQuery('(min-width: 0px)');

  let goLeft, goRight;

  if (isLargerThan1250) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (paths.length - 4) ? null : setX(x - 100);
    };
  } else if (isLargerThan770) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (paths.length - 4) ? null : setX(x - 100);
    };
  } else if (isLargerThan580) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (paths.length - 3) ? null : setX(x - 100);
    };
  } else if (isLargerThan0) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (paths.length - 2) ? null : setX(x - 100);
    };
  }

  return (
    <div className="slider-container">
      <i id="goLeft" onClick={goLeft}>
        <LeftArrow />
      </i>
      <div className="slider">
        {paths.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={item} alt="" className="partner-img" />
            </div>
          );
        })}
      </div>
      <i
        id="goRight"
        className="partner-list-arrow-right"
        onClick={goRight}
        style={{
          transform: 'rotate(180deg)',
        }}
      >
        <RightArrow />
      </i>
    </div>
  );
}

export default PartnerList;
