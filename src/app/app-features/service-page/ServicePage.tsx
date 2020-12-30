import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import RotaryPhone from '../../../../public/svg/rotary_phone_black.svg';
import ServiceIcon from '../../../../public/svg/service.svg';
import ServiceGear from '../../../../public/svg/service_gear.svg';
import Guarantee from '../../../../public/svg/guarantee.svg';
import Arrow from '../../../../public/svg/arrow.svg';

export default function Service(): JSX.Element {
  const path = [
    {
      name: '\xa0' + 'Service centru',
      link: '/service',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">Service centru</h2>
        <div className="service-flex-container">
          <div style={{ width: '70%' }}>
            <p>
              Service centru Cegoltar SRL – este un service centru modern
              specializat în diagnostica și reparația instrumentelor electrice,
              corpurilor de iluminat, echipament electric de diferită
              complexitate.
              <br />
              <br />
              Compania Cegoltar SRL asigură serviciile in perioada de garantie
              si post-garantie pentru toate produsele INGCO, personalul nostru
              avand autorizari specifice, fiind in relatii de aprtenenriat
              exclusive pe piata interna pentur comercializarea gamei INGCO.
              Toate reparatiile se executa folosind doar piese de schimb
              originale. Dupa efectuarea reparatiilor, produsele sunt verificate
              si testate folosind,Pentru toate reparatiile efectuate, acordam
              garantie pentru piese si manopera conform normelor legale.
              <br />
              Specialiștii noștri minimizează timpul de staționare în service a
              instrumentului electric. Acesta este doar unul dintre avantajele
              oferite.
            </p>
            <ul className="terms-list">
              <li className="terms-list-item">
                Reparații realizate de experți în domeniu.
              </li>
              <li className="terms-list-item">
                Utilizarea exclusivă a pieselor de schimb originale.{' '}
              </li>
              <li className="terms-list-item">
                Test de siguranță la fiecare reparație efectuată.{' '}
              </li>
              <li className="terms-list-item">
                Returnarea instrumentului în decurs de 3-5 zile.{' '}
              </li>
            </ul>
          </div>
          <div className="service-page-contacts">
            <div>
              <div className="service-contact-heading">Contacte:</div>
              <div className="serivice-contact-item">Tel: 067894654</div>
              <div className="serivice-contact-item">Fax: 022 263561</div>
            </div>

            <div>
              <div className="service-contact-heading">Program:</div>
              <div className="serivice-contact-item">
                Luni - Vineri: 8:30 – 17:30
              </div>
              <div className="serivice-contact-item">Sîmbătă: 8:30 – 15:30</div>
            </div>

            <div>
              <div className="service-contact-heading">
                Cegoltar service centru:
              </div>
              <div className="serivice-contact-item">
                Chișinău, str. Petricani 21
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
            Reparația instrumentelor electrice
          </div>
          <div className="service-image-wrapper">
            <div className="service-image-1"></div>
            <div className="service-image-2"></div>
            <div className="service-image-3"></div>
          </div>
        </div>

        <br />
        <h4 className="service-page-algoritm"> Algoritmul Procedurii: </h4>
        <br />
        <div className="service-algoritm-wrapper">
          <div className="service-algoritm-item">
            <div className="service-icon-wrapper">
              <i style={{ margin: 'auto' }}>
                <RotaryPhone />
              </i>
            </div>
            <div className="service-algoritm-heading">CONTACTAȚI-NE</div>
            <a className="service-call-now" href="tel:+373 69 000 000">
              Sună acum
            </a>
          </div>

          <i>
            <Arrow />
          </i>

          <div className="service-algoritm-item">
            <div className="service-icon-wrapper">
              <i style={{ margin: 'auto' }}>
                <ServiceGear />
              </i>
            </div>
            <div className="service-algoritm-heading">Diagnostic</div>
            <div className="service-algoritm-text">1-3 zile</div>
          </div>

          <i>
            <Arrow />
          </i>

          <div className="service-algoritm-item" style={{ marginTop: 6 }}>
            <div className="service-icon-wrapper">
              <i style={{ margin: 'auto' }}>
                <ServiceIcon />
              </i>
            </div>
            <div className="service-algoritm-heading">Reparație </div>
            <div className="service-algoritm-text">
              *Prețul se stabilește în dependență de defect
            </div>
          </div>

          <i>
            <Arrow />
          </i>

          <div className="service-algoritm-item">
            <div className="service-icon-wrapper">
              <i style={{ margin: 'auto' }}>
                <Guarantee />
              </i>
            </div>
            <div className="service-algoritm-heading">Garanție</div>
          </div>
        </div>
        <h4 className="service-page-algoritm">Service de întreținere:</h4>
        <br />
        <p>
          O investiţie bună - service-ul de întreţinere Cegoltar.
          <br />
          <br />
          Întreţinerea regulată prelungeşte durata de viaţă a sculelor
          dumneavoastră electrice. De aceea, întreţinerea acestora în centrul de
          service, este o investiţie bună. Personal de specialitate
          corespunzător calificat efectuează întreţinerea de regulă în trei până
          la maximum cinci zile.
          <br />
          <br />
          Derularea are loc întocmai ca la o reparaţie: vă trimiteţi scula
          electrică direct la centrul de service sau v-o aduceţi la
          distribuitorul dumneavoastră, care se ocupă în continuare de
          întreţinerea acesteia. Completaţi în acest scop formularul de
          reparaţii şi bifaţi simplu punctul „Întreţinere“.
          <br />
          <br />
          *Preţul pentru întreţinere depinde de costurile cu aceasta.
        </p>
      </div>
    </>
  );
}
