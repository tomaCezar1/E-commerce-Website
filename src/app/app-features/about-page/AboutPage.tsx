import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function AboutPage() {
  const path = [
    {
      name: '\xa0' + 'Despre noi',
      link: '/about',
    },
  ];
  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">Despre noi</h2>

        <h4 className="terms-heading">
          Misiunea INGCO este de a produce instrumente de calitate ușor de
          utilizat la un preț accesibil.!
        </h4>
        <p>
          INGCO este un exemplu de combinație de succes de calitate și preț în
          domeniul uneltelor electrice. De 20 de ani, angajații companiei
          lucrează cu sîrguință pentru a se asigura că fiecare instrument produs
          la fabrică să poate rezolva cu ușurință sarcinile atribuite acestuia.
          Astăzi compania are 180 de birouri pe tot globul. Calitatea produselor
          fabricate poate fi ușor comparată cu mărci atât de cunoscute precum
          Bosch și Makita.
          <br />
          <br />
          Compania dezvoltă două linii de produse: INDUSTRIAL și STANDARD.
          Instrumentul liniei INDUSTRIAL aparține celui profesionist și este
          capabil să reziste la sarcini mari ridicate. Linia STANDARD este
          proiectată pentru utilizarea zilnică. Resursa sa este mare, dar nu mai
          este potrivită pentru utilizarea industrială in condiții de
          supraîncărcare. Este demn de remarcat faptul că nivelul de
          automatizare la fabrică la asamblarea instrumentelor atinge 75%, ceea
          ce reprezintă un indicator foarte ridicat, datorită căruia resursa
          operațională este mai mare cu 15-20% în comparație cu instrumentul
          proprietarilor mărcii.
          <br />
          <br />
          Scopul companiei este disponibilitatea instrumentelor profesionale și
          de înaltă calitate pentru utilizatorul final. Conducerea companiei
          este sigură că un brand global de lider poate fi nu numai economic,
          dar și convenabil.
          <br />
          <br />
          Instrumentele INGCO sunt ușor recunoscute prin designul lor unic și
          izbitor, care are brevete unice, fiecare număr poate fi găsit pe
          ambalajul produsului. În plus, fiecare piesă se remarcă prin cel mai
          înalt nivel de asamblare, deoarece compania are propriile sale
          instalații de producție. Rata de deșeuri în ultimii 5 ani a fost de
          0,3% din producția totală. Având grijă de clienții lor, inginerii de
          dezvoltare INGCO introduc noi soluții tehnice.
          <br />
          <br />
          Brandul INGCO a fost apreciat de meșterii de pe intreg globul. Este
          greu să nu apreciezi calitatea, funcționalitatea și ușurința de
          întreținere.
          <br />
          <br />
          INGCO nu face reclamă propriului său brand, ci investește toate
          eforturile sale principale în calitatea produselor sale, ceea ce îi
          permite să aibă un cost de producție destul de mic, iar consumatorul
          final poate cumpăra un produs cu adevărat de înaltă calitate la
          prețuri accesibile.
        </p>
        <h4 className="terms-heading">Despre compania CEGOLTAR</h4>
        <p className="terms-paragraph-18">
          Compania Cegoltar SRL este distribuitorul oficial a companiei INGCO.Pe
          lîngă distribuția instrumentelor INGCO,compania are o istorie ogata pe
          piata Republicii Moldova in domeniul comercializării si asigurării cu
          instalații electrice obiectelor de importanță majoră din tară.
        </p>
        <br />
        <p>
          Compania ”Cegoltar” SRL este reprezentantul oficial al mai multor mari
          companii specializate în producerea produselor destinate industriei
          electrice. Depozitul companiei Cegoltar este permanent completat cu o
          varietate mare de produse.
          <br />
          <br />
          Printre partenerii firmei se regăsesc companiile regionale și
          municipale specializate în montarea liniilor și echipamentelor
          electrice - companiile electrice urbane și regionale, firmele de
          construcții.
          <br />
          <br />
          Suntem gata să negociem orice propunere de colaborare în condiții
          reciproc avantajoase.
        </p>
      </div>
    </>
  );
}
