import { Flex } from '@chakra-ui/react'
import React from 'react'
import Map from './Map'
import ContactBox from './contact-box/ContactBox'
import styled from 'styled-components';

function RegionalStore() {
  return (
    <div style={{ background: '#F8F8F8', width: '100vw', margin: 'auto' }}>
      <Flex direction="column" align="center" justify="center" m="auto">
        <Flex flexDirection="column" align="center" justify="center">
          <Container>
            <Title>Magazine Regionale</Title>
          </Container>
          <Flex flexDirection="row" w={1121} align="flex-start">
            <div>
              <div className="map-container">
                {/* MAP */}
                <div id="mapid">
                  <Map />
                </div>
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
              <Text>
                Compania Cegoltar SRL este distribuitorul oficial și exclusiv al
                companiei INGCO în Republica Moldova. În mun. Chișinău produsele
                companiei pot fi găsite in magazinul specilizat exclusiv INGCO,
                pe tot teritoriul Moldovei produsele sunt distribuite de agenții
                locali (Sud/Centru/Nord) - astfel raza de acoperire pe
                Teritoriul moldovei atinge o valaore de 87%. Mai jos puteți găsi
                contactele agenților noștri atît pentru a procura produse
                individual, cît și la preț angro pentru dezvoltarea afacerii
                dumneavostră.
              </Text>
              <Text>
                Noi oferim servicii de calitate superioară conform principiilor
                noastre şi aducem clienţilor valoarea, creşterea şi dezvoltarea
                afacerii. În prezent Cegoltar colaborează cu mai mult de 60
                distriuitori, gestionează mai mult de 60 de branduri globale şi
                locale şi aprovizionează mai mult de 200000 de clienti din toată
                Republica.
              </Text>
              <Text>
                Pentru a colabora cu Cegoltar ,a beneficia de cooperarea cu
                brandul INGCO și alte produse destinate sferei apelați la
                oficiul nostru sau contactați unul din agenții repsonsabili
                pentru regiunea dumneavoastră.
              </Text>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  line-height: 42.19px;
  padding: 0;
  display: flex;
  align-items: flex-start;
  // margin-left: -1.35rem;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4rem;
  margin-top: 16.4px;
  &:first-child {
    margin-top: 0;
  }
`
const Container = styled.div`
  // margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-self: flex-start;
  //   margin-left: 154px;
  //   margin-right: 165px;
`

export default RegionalStore
