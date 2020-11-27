import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from 'next/link';
import FacebookIcon from '../../../public/svg/FacebookIcon.svg';
import LinkedInIcon from '../../../public/svg/LinkedInIcon.svg';
import InstagramIcon from '../../../public/svg/InstagramIcon.svg';


export default function Footer() {
  return (
    <Flex as="footer" background="primary.500" height="300px" pt="46px" justifyContent="center">
      <Flex width="1133px" flexDir='column'>
        <Flex className='footer-container' flexDir='row'>
          <Flex className='footer-info' flexDir="column" color="white">
            <Text fontSize="large" mb="32px">
              Informatii
            </Text>
            <Link href="/about-us">Despre noi</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
          </Flex>
          <Flex flexDir="column" color="white">
            <Text fontSize="large" mb="32px">
              Informatii
            </Text>
            <Link href="/about-us">Despre noi</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
            <Link href="/">Conditii De Garantie</Link>
          </Flex>
        </Flex>
        <hr className='footer-hr'/>
        <Flex flexDir='row' justifyContent='space-between' className='footer-copy-div'>
          <Flex flexDir='row'>
            <Icon className='footer-icons' as={FacebookIcon}/>
            <Icon className='footer-icons' as={InstagramIcon}/>
            <Icon className='footer-icons' as={LinkedInIcon}/>
          </Flex>
          <Text className='footer-copywright' fontSize='12px' color="gray" fontWeight='400'>
            Copywright &copy; 2020 Cegoltar S.R.L. str. Petricani, 21 MD-2005
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}