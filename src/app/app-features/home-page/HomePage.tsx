import CarouselComponent from './CarouselComponent/CarouselComponent'
import PartnerList from './PartnerList/PartnerList'
import ProductCard from './product-card/ProductCard'
import ProductList from './product-list/ProductList'

export default function HomePage(): JSX.Element {
  return (
    <div id="homepage">
      <CarouselComponent style={{ marginTop: '34px' }} />
      <div style={{ marginTop: '40px' }} className="title-1">
        Produsele Cegoltar
      </div>
      <ProductCard />
      <div style={{ height: '5rem' }}></div>
      <PartnerList />
    </div>
  )
}
