import ContactBox from './contact-box/ContactBox';
import Map from './Map';
import { AppContext } from '../../../context';
import { useContext } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

function RegionalStore(): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const [isSmallerThan120] = useMediaQuery('(max-width: 1250px)');

  return (
    <>
      <div className="regional-store-title-container">
        <h1 className="regional-store-title">{dictionary.regionalStores}</h1>
      </div>
      <div className="regional-store-row">
        <div className="regional-store-map-cards">
          {/* MAP */}
          <div id="mapid">
            <Map />
          </div>
          <div className="boxes-container">
            <ContactBox
              title={dictionary.office}
              location={dictionary.officeAddress}
              email="cegoltar@inbox.ru"
              phone="022 27-37-82"
            />
            <ContactBox
              title={dictionary.deposit}
              location={dictionary.depositAddress}
              email="cegoltar@inbox.ru"
              phone="022 31-75-02"
            />
          </div>
        </div>
        {isSmallerThan120 ? (
          <div className="map-description">
            <p className="regional-store-text regional-store-text-3">
              {dictionary.regionalStoresText1}
            </p>
            <p className="regional-store-text regional-store-text-2">
              {dictionary.regionalStoresText2}
            </p>
            <p className="regional-store-text regional-store-text-3">
              {dictionary.regionalStoresText3}
            </p>
          </div>
        ) : (
          <div className="map-description">
            <p className="regional-store-text regional-store-text-3">
              {dictionary.regionalStoresText1}
            </p>
            <br />
            <p className="regional-store-text regional-store-text-2">
              {dictionary.regionalStoresText2}
            </p>
            <br />
            <p className="regional-store-text regional-store-text-3">
              {dictionary.regionalStoresText3}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default RegionalStore;
