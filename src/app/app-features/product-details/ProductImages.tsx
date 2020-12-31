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
              width: 600,
              height: 800,
            },
            imageClassName: 'big-image',
            enlargedImageStyle: { objectFit: 'cover' },
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
