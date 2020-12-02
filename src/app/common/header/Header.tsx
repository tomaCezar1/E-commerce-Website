import Image from 'next/image'
import Link from 'next/link'
import { Flex, Text, Box } from '@chakra-ui/layout'
import PhoneIcon from '../../../../public/svg/phone.svg';
import ShoppingCartIcon from '../../../../public/svg/ShoppingCartIcon.svg'
import HeartIcon from '../../../../public/svg/HeartIcon.svg'
import { Icon, useBreakpoint } from '@chakra-ui/react';
import { IBreakPoint } from '../../lib/types/common';
import SubHeader from './SubHeader';

export default function Header(): JSX.Element {

  const breakPoint: IBreakPoint = useBreakpoint('base') as any
  console.log(breakPoint)

  return (
    <>
    <Flex 
      as="nav" 
      h={57}
      background="primary.500"
      color="#fff"
      align="center"
      justify="center"
    >
      <Flex maxW="1133px" w="100%" paddingX={["30px", "30px", "30px", 0]} align="center" justifyContent="space-between">
        <Flex>          
          <Link href="/">
          <div>
            <Image
              className="cursor-pointer"
              src="/logo.png"
              alt="Logo"
              width={151}
              height={30}
            />
          </div>
          </Link>
          <Flex as="a" href="tel:069000000" ml={54} fontSize="sm" align="center">
            <Icon as={PhoneIcon} mr="13px" mb="1px"/>
            {breakPoint !== 'base' && 
              <Text fontWeight="medium">
                069 00 00 00
            </Text>
            }
          </Flex>
        </Flex>
        {(breakPoint === 'xl' || breakPoint === 'lg') && 
          <Box>
            <input type="text"/>
          </Box>
        }
        <Flex align="center">
          {(breakPoint === 'xl' || breakPoint === 'lg') && 
          <>
            <Link href="/checkout">
              <div>
                <Icon w="18px" h="17px" as={ShoppingCartIcon} className="cursor-pointer" />
              </div>
            </Link>
            <Link href="/checkout">
              <div>
                <Icon w="18px" h="17px" as={HeartIcon} ml="28px" className="cursor-pointer" />
              </div>
            </Link>
          </>
          }
          <Box ml="38px">
            RO | RU
          </Box>
        </Flex>  
      </Flex>
    </Flex>
    <SubHeader/>
    </>
  )
}
