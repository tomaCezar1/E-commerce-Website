import { Flex, Text } from "@chakra-ui/react";
import Link from 'next/link'

export default function Footer() {
  return (
    <Flex as="footer" background="primary.500" height="300px" pt="46px" color="white" justifyContent="center">
      <Flex width="1133px">
        <Flex justifyContent="space-between">
          <Flex flexDir="column">
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
      </Flex>
    </Flex>
  )
}