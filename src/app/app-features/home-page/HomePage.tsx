import { Flex } from '@chakra-ui/react'
import CarouselComponent from './CarouselComponent/CarouselComponent'

export default function HomePage(): JSX.Element {
  return (
    <Flex maxW="1152px" w="100%" height="2500px" backgroundColor='#b3b3b3'>
      <h1>Home Page</h1>
      <CarouselComponent />
    </Flex>
  )
}
