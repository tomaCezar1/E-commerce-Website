import styled from 'styled-components'
import ProductDetails from '../product-details/ProductDetails'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'
import ProductCard from './product-card/ProductCard'

export default function HomePage(): JSX.Element {
  return (
    <Div id="homepage">
      <div style={{ height: '5rem' }}></div>
      <CarouselComponent />
      <div style={{ height: '5rem' }}></div>
      <ProductCard/>
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
      <div style={{ height: '5rem' }}></div>
      <ProductDetails />
      <div style={{ height: '5rem' }}></div>
    </Div>
  )
}

const Div = styled.div`
  max-width: 1152px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
