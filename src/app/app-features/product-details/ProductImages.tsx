import { Skeleton } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function ProductImages(props) {
  // const { loading, error, data } = useQuery<ICarouselItems>(CarouselQuery)
  // const items = data?.carouselItems

  const [currentImg, setCurrentImg] = useState(null)
  const [clicked, setClicked] = useState(true)
  const isClicked = !clicked

  useEffect(() => {
    setCurrentImg(props.images[0])
  }, [props])

  const setImg = (event, index) => {
    setCurrentImg(index)
    setClicked(isClicked)

    if (event.target.className === 'small-img small-img-active') {
      event.target.className = 'small-img'
      console.log('removed')
    } else {
      event.target.className = 'small-img small-img-active'
      console.log('added class')
    }
  }

  return (
    <>
      <div>
        <img className="big-image" src={currentImg} />
      </div>
      <div className="small-img-container">
        {/* <Skeleton isLoaded={!loading} h="100%" w="100%"> */}
        {props.images.map((img, index) => (
          <img
            onClick={
              // () => setCurrentImg(props.images[index])
              () => setImg(event, props.images[index])
            }
            // className={isClicked ? `small-img small-img-active ` : `small-img`}
            className="small-img"
            key={index}
            src={img}
            alt="error"
          />
        ))}
        {/* </Skeleton> */}
      </div>
    </>
  )
}

export default ProductImages
