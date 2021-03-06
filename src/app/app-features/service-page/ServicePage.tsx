import { useContext } from 'react';
import { AppContext } from '../../../context';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import PhoneCall from '../../../../public/svg/PhoneCall.svg';
import Gear from '../../../../public/svg/Gear.svg';
import Wrench from '../../../../public/svg/Wrench.svg';
import Guarantee from '../../../../public/svg/Medal.svg';
import ArrowRight from '../../../../public/svg/ArrowRight.svg';

export default function Service(): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.serviceCenter,
      link: '/service',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="service-page-container">
        <h2 className="service-page-title">{dictionary.serviceCenter}</h2>
        <div className="service-flex-container">
          <div className="service-wrapper">
            <p className="service-info-text">{dictionary.serviceText1}</p>
            <br />
            <p className="service-info-text">{dictionary.serviceText2}</p>
            <br />
            <p className="service-info-text">{dictionary.serviceText3}</p>
            <ul className="service-info-list">
              <li className="service-list-item">
                {dictionary.serviceListItem1}
              </li>
              <li className="service-list-item">
                {dictionary.serviceListItem2}
              </li>
              <li className="service-list-item">
                {dictionary.serviceListItem3}
              </li>
              <li className="service-list-item">
                {dictionary.serviceListItem4}
              </li>
            </ul>
          </div>
          <div className="service-page-contacts">
            <div>
              <div className="service-contact-heading">
                {dictionary.contact}&nbsp;:
              </div>
              <div className="serivice-contact-item">
                {dictionary.phone1}: 067894654
              </div>
              <div className="serivice-contact-item">
                {dictionary.fax}&nbsp;: 022 263561
              </div>
            </div>

            <div>
              <div className="service-contact-heading">
                {dictionary.hours}&nbsp;:
              </div>
              <div className="serivice-contact-item">
                {dictionary.mondayFriday}&nbsp;: 8:30 – 17:30
              </div>
              <div className="serivice-contact-item">
                {dictionary.saturday}&nbsp;: 8:30 – 15:30
              </div>
            </div>

            <div>
              <div className="service-contact-heading">
                {dictionary.cegoltarServiceCentru}&nbsp;:
              </div>
              <div className="serivice-contact-item">
                {dictionary.chisinau}, {dictionary.street}. Petricani 21
              </div>
            </div>
          </div>
        </div>

        <div className="service-images-section">
          <div className="service-logos-wrapper">
            <div className="service-logos-1"></div>
            <div className="service-logos-2" style={{ margin: 'auto' }}></div>
          </div>
          <div className="service-images-text">
            {dictionary.instrumentsReparation}
          </div>
          <div className="service-image-wrapper">
            <div className="service-image-1"></div>
            <div className="service-image-2"></div>
            <div className="service-image-3"></div>
          </div>
        </div>

        <br />
        <h4 className="service-page-algoritm">
          {dictionary.servicePageAlgorithm}&nbsp;:
        </h4>
        <br />
        <div className="service-algoritm-wrapper">
          <div className="service-algoritm-item">
            <i style={{ margin: 'auto' }}>
              <PhoneCall />
            </i>
            <div className="service-algoritm-heading">
              {dictionary.contactUs}
            </div>
            <a className="service-call-now" href="tel:+373 69 000 000">
              {dictionary.servicePageAlgorithmItem1}
            </a>
          </div>

          <i className="service-icon">
            <ArrowRight />
          </i>

          <div className="service-algoritm-item">
            <i style={{ margin: 'auto' }}>
              <Gear />
            </i>
            <div className="service-algoritm-heading">
              {dictionary.diagnostic}
            </div>
            <div className="service-algoritm-text">
              1-3 {dictionary.servicePageAlgorithmItem2}
            </div>
          </div>

          <i className="service-icon">
            <ArrowRight />
          </i>

          <div className="service-algoritm-item" style={{ marginTop: 6 }}>
            <i style={{ margin: 'auto' }}>
              <Wrench />
            </i>
            <div className="service-algoritm-heading">{dictionary.repairs}</div>
            <div className="service-algoritm-text">
              {dictionary.servicePageAlgorithmItem3}
            </div>
          </div>

          <i className="service-icon">
            <ArrowRight />
          </i>

          <div className="service-algoritm-item">
            <i style={{ margin: 'auto' }}>
              <Guarantee />
            </i>
            <div className="service-algoritm-heading">
              {dictionary.guarantee}
            </div>
          </div>
        </div>
        <h4 className="service-page-algoritm">
          {dictionary.servicePageMaintenanceTitle}&nbsp;:
        </h4>
        <br />
        <p className="service-info-text">{dictionary.serviceText4}</p>
        <br />
        <p className="service-info-text">{dictionary.serviceText5}</p>
        <br />
        <p className="service-info-text">{dictionary.serviceText6}</p>

        <br />
        <p className="service-info-text last-text">{dictionary.serviceText7}</p>
      </div>
    </>
  );
}
