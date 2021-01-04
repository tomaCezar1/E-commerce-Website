import CarouselComponent from './CarouselComponent/CarouselComponent';
import PartnerList from './PartnerList/PartnerList';
import ProductList from './product-list/ProductList';

export default function HomePage({ homePageInfo }): JSX.Element {
  return (
    <div className="homepage-container">
      <CarouselComponent />
      <ProductList homePageInfo={homePageInfo} />
      <PartnerList />
    </div>
  );
}
