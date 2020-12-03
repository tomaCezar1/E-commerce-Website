import { Flex, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import FacebookIcon from '../../../../public/svg/FacebookIcon.svg'
import LinkedInIcon from '../../../../public/svg/LinkedInIcon.svg'
import InstagramIcon from '../../../../public/svg/InstagramIcon.svg'
import CegoltarLogo from '../../../../public/svg/cegoltar-footer-logo.svg'

export default function Footer() {
  return (
    <Flex
      as="footer"
      background="#124193"
      height="100%"
      pt="46px"
      pb="25px"
      justifyContent="center"
    >
      <Flex flexDir="column" width="1152px" ml="auto" mr="auto">
        <Flex className="footer-container" flexDir="row">
          <Flex className="footer-info-container" width="100%">
            <Flex className="footer-info" flexDir="column">
              <Text fontSize="24px" mb="19px">
                Informatii
              </Text>
              <Link href="/about-us">Despre noi</Link>
              <Link href="/">Condiții de garanție</Link>
              <Link href="/">Magazine regionale</Link>
              <Link href="/">Livrare</Link>
              <Link href="/">Termeni și condiții</Link>
            </Flex>
            <Flex
              className="footer-info footer-info-second-child"
              flexDir="column"
            >
              <Text fontSize="24px" mb="19px">
                Informatii
              </Text>
              <Link href="/about-us">Despre noi</Link>
              <Link href="/">Condiții de garanție</Link>
              <Link href="/">Magazine regionale</Link>
              <Link href="/">Livrare</Link>
              <Link href="/">Termeni și condiții</Link>
            </Flex>
          </Flex>
          <Flex direction="column" alignSelf="start" align="start">
            <Text noOfLines={2} className="contact-info">
              <Flex direction="column">
                <span>Call centru:</span>
                <span> +373 69 606 707</span>
              </Flex>
            </Text>
            <Icon as={CegoltarLogo} height="52px" width="256px" />
          </Flex>
        </Flex>

        <hr className="footer-hr" />

        <Flex flexDir="row" justifyContent="space-between">
          <Flex flexDir="row">
            <Icon
              className="footer-icons"
              as={FacebookIcon}
              width="16px"
              height="16px"
            />
            <Icon
              className="footer-icons"
              as={InstagramIcon}
              width="16px"
              height="16px"
            />
            <Icon
              className="footer-icons"
              as={LinkedInIcon}
              width="16px"
              height="16px"
            />
          </Flex>
          <Text className="footer-copywright">
            Copywright &copy; 2020 Cegoltar S.R.L. str. Petricani, 21 MD-2005
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
