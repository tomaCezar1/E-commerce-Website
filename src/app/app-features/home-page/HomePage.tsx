import CarouselComponent from './CarouselComponent/CarouselComponent';
import PartnerList from './PartnerList/PartnerList';
import ProductList from './ProductList/ProductList';

export default function HomePage({ homePageInfo }): JSX.Element {
  return (
    <div className="homepage-container">
      <CarouselComponent />
      <ProductList products={homePageInfo.products} />
      <PartnerList />
    </div>
  );
}
