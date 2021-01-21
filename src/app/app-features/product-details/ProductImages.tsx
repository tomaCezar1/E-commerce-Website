import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

function ProductImages(props) {
  const [currentImg, setCurrentImg] = useState(0);

  const toggleClick = (index) => {
    setCurrentImg(index);
  };

  return (
    <>
      <div className="react-magnify-lib">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'error',
              src: props.images[currentImg],
              width: 333,
              height: 333,
            },
            largeImage: {
              src: props.images[currentImg],
              width: 999,
              height: 999,
            },
            imageClassName: 'big-image',
            enlargedImageStyle: { objectFit: 'cover' },
            enlargedImageContainerDimensions: {
              width: '200%',
              height: '150%',
            },
          }}
        />
      </div>
      <div className="mobile-image-component">
        <img src={props.images[currentImg]} alt="" className="big-image" />
      </div>
      <div className="mobile-small-img-component">
        {props.images.map((img, index) => (
          <img
            onClick={() => toggleClick(index)}
            className={`small-img ${
              currentImg === index ? 'small-img-active' : ''
            }`}
            key={index}
            src={img}
            alt="error"
            data-index={index}
          />
        ))}
      </div>
      <div className="small-img-container">
        {props.images.map((img, index) => (
          <img
            onClick={() => toggleClick(index)}
            className={`small-img ${
              currentImg === index ? 'small-img-active' : ''
            }`}
            key={index}
            src={img}
            alt="error"
            data-index={index}
          />
        ))}
      </div>
    </>
  );
}

export default ProductImages;
