import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../../../../public/svg/LeftPartnerIcon.svg';
import RightArrow from '../../../../../public/svg/LeftPartnerIcon.svg';
import { useContext, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { AppContext } from '../../../../context';

function PartnerList(): JSX.Element {
  const paths = [
    '/img/vendors/feman.png',
    '/img/vendors/iek.png',
    '/img/vendors/ingco.png',
    '/img/vendors/iug-kabeli.png',
    '/img/vendors/keaz.png',
    '/img/vendors/kvt.png',
    '/img/vendors/kzs.png',
    '/img/vendors/mepa.png',
    '/img/vendors/navigator.png',
    '/img/vendors/schneider.png',
    '/img/vendors/spotlight.png',
    '/img/vendors/ukrelektroaparat.png',
    '/img/vendors/valon-a.png',
    '/img/vendors/ardic.png',
    '/img/vendors/britop.png',
    '/img/vendors/elctrocanali.png',
    '/img/vendors/elektro plast.png',
    '/img/vendors/far.png',
  ];
  const [x, setX] = useState(0);

  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)');
  const [isLargerThan0] = useMediaQuery('(min-width: 0px)');

  const { appContext } = useContext(AppContext);
  const { homeVendorList } = appContext.dictionary;

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
    <>
      <h1 className="product-list-header">{homeVendorList}</h1>
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
    </>
  );
}

export default PartnerList;
