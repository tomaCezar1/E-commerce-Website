import { Flex } from '@chakra-ui/react'
import CarouselComponent from './CarouselComponent/CarouselComponent'

export default function HomePage(): JSX.Element {
  return (
    <Flex maxW="1152px" w="100%" id="homepage">
      <h1>Home Page</h1>
      <CarouselComponent />
    </Flex>
  )
}
