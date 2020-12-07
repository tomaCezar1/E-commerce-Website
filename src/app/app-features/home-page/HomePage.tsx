import { Flex } from '@chakra-ui/react'
import ProductDetails from '../product-details/ProductDetails'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'

export default function HomePage(): JSX.Element {
  return (
    <Flex maxW="1152px" w="100%" id="homepage">
      <h1>Home Page</h1>
      <CarouselComponent />
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
      <div style={{ height: '5rem' }}></div>
      <ProductDetails />
    </Flex>
  )
}
