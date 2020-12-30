import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function DeliveryPage() {
  const path = [
    {
      name: 'Livrare',
      link: '/delivery',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">Livrare</h2>
        <h4 className="terms-heading">Ridicare in magazin</h4>
        <p>
          Puteți ridica produsul în orașul Chișinău sau in oricare alte magazine
          distribuitoare din toată Moldova.
        </p>
        <h4 className="terms-heading">Livrare în Chișinău</h4>
        <p>
          Livrarea mărfurilor plătite în Simferopol se efectuează prin serviciul
          nostru de curierat de luni până vineri între orele 8:30-17:00. Dacă nu
          aveți posibilitatea să acceptați mărfurile în timpul orelor de lucru
          ale serviciului de curierat, livrarea poate fi amânată la o altă oră
          sau zi liberă, sub rezerva acordului acestei probleme cu directorul de
          vânzări.
          <br />
          <br />
          Suma minimă de comandă pentru livrare gratuită în Chișinău este de
          2700lei.
          <br />
          <br />
          Cost de livrare în Chișinău pentru comenzi sub 2700lei - 125lei.
          <br />
          <br />
          Termenul de livrare de la plasarea și confirmarea comenzii - 36 ore.
        </p>
        <h4 className="terms-heading">Livrare în toată Moldova</h4>
        <p>
          Livrarea în regiuni se efectuează cu ajutorul agenților regionali și
          se livreaza la unul din magazinele distribuitoare din regiunile
          Republicii Moldova(lista este atașată).
          <br />
          <br />
          Suma minimă de comandă pentru livrare gratuită în toată Modlova este
          de 5500lei.
          <br />
          <br />
          Pentru oricare negocieri de condiții apelati agenții regionali.
        </p>
      </div>
    </>
  );
}
