import ProductDetails from '../product-details/ProductDetails'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'
import ProductCard from './product-card/ProductCard'
import ProductList from './product-list/ProductList'

export default function HomePage(): JSX.Element {
  return (
    <div id="homepage">
      <h1>Home Page</h1>
      <CarouselComponent />
      <div style={{ height: '5rem' }}></div>
      <ProductCard />
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
      <div style={{ height: '5rem' }}></div>
      <ProductDetails />
      <div style={{ height: '5rem' }}></div>
      <ProductList />
    </div>
  )
}
