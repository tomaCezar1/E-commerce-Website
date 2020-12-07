import styled from 'styled-components'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'

export default function HomePage(): JSX.Element {
  return (
    <Div id="homepage">
      <h1>Home Page</h1>
      <CarouselComponent />
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
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
