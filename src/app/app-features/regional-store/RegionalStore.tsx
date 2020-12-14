import ContactBox from './contact-box/ContactBox'
import Map from './Map'

function RegionalStore() {
  return (
    <>
      <div className="regional-store-title-container">
        <h1 className="regional-store-title">Magazine Regionale</h1>
      </div>
      <div className="regional-store-row">
        <div className="regional-store-map-cards">
          {/* MAP */}
          <div id="mapid">
            <Map />
          </div>
          <div className="boxes-container">
            <ContactBox
              title="Oficiu"
              location="mun. Chișinău, str. Petru Rareș, 43/1"
              email="cegoltar@inbox.ru"
              phone="022 27-37-82"
            />
            <ContactBox
              title="Depozit"
              location="mun. Chișinău, str. Petricani 21, depozit nr. 2"
              email="cegoltar@inbox.ru"
              phone="022 31-75-02"
            />
          </div>
        </div>
        <div className="map-description">
          <p className="regional-store-text">
            Compania Cegoltar SRL este distribuitorul oficial și exclusiv al
            companiei INGCO în Republica Moldova. În mun. Chișinău produsele
            companiei pot fi găsite in magazinul specilizat exclusiv INGCO, pe
            tot teritoriul Moldovei produsele sunt distribuite de agenții locali
            (Sud/Centru/Nord) - astfel raza de acoperire pe Teritoriul moldovei
            atinge o valaore de 87%. Mai jos puteți găsi contactele agenților
            noștri atît pentru a procura produse individual, cît și la preț
            angro pentru dezvoltarea afacerii dumneavostră.
            <br />
            <br />
            Noi oferim servicii de calitate superioară conform principiilor
            noastre şi aducem clienţilor valoarea, creşterea şi dezvoltarea
            afacerii. În prezent Cegoltar colaborează cu mai mult de 60
            distriuitori, gestionează mai mult de 60 de branduri globale şi
            locale şi aprovizionează mai mult de 200000 de clienti din toată
            Republica.
            <br />
            <br />
            Pentru a colabora cu Cegoltar ,a beneficia de cooperarea cu brandul
            INGCO și alte produse destinate sferei apelați la oficiul nostru sau
            contactați unul din agenții repsonsabili pentru regiunea
            dumneavoastră.
          </p>
        </div>
      </div>
    </>
  )
}

export default RegionalStore
