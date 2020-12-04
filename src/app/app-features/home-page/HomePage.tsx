import { Flex } from '@chakra-ui/react'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'

export default function HomePage(): JSX.Element {
  return (
    <Flex
      maxW="1133px"
      w="100%"
      justify="center"
      align="center"
      flexDir="column"
    >
      <div style={{ height: '5rem' }}></div>
      <CarouselComponent />
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
      <div style={{ height: '5rem' }}></div>
    </Flex>
  )
}
