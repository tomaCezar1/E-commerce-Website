import { Skeleton } from '@chakra-ui/react'
import { useState } from 'react'

function ProductImages(props) {
  // const { loading, error, data } = useQuery<ICarouselItems>(CarouselQuery)
  // const items = data?.carouselItems

  const [currentImg, setCurrentImg] = useState(0)

  const toggleClick = (index) => {
    setCurrentImg(index)
  }

  return (
    <>
      <div>
        <img className="big-image" src={props.images[currentImg]} />
      </div>
      <div className="small-img-container">
        {/* <Skeleton h="100%" w="100%"> */}
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
        {/* </Skeleton> */}
      </div>
    </>
  )
}

export default ProductImages
