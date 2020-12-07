import { useState } from 'react'

function ProductImages(props) {
  const [currentImg, setCurrentImg] = useState(null)

  return (
    <>
      <div>
        <img className="big-image" src={currentImg} />
      </div>
      <div className="small-img-container">
        {props.images.map((img, index) => (
          <img
            onClick={() => setCurrentImg(props.images[index])}
            className="small-img"
            key={index}
            src={img}
          />
        ))}
      </div>
    </>
  )
}

export default ProductImages
