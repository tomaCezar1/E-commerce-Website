import { Flex, Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header/>
      <Flex minH="calc(100vh - 57px)" flexDir="column">
        <Flex justifyContent="center">
          {children}
        </Flex>
        <Box mt="auto"></Box>
        <Footer />
      </Flex>
    </>
  )
} 