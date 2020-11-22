import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import DefaultLayout from "../../components/DefaultLayout"

export default function ProductCategory() {

  const {id} = useRouter().query
  console.log(id);


  return(
    <Flex maxW="1133px" w="100%" pt="30px">
      <Text fontSize="xl">
        Details about Category with id <b>{id}</b>
      </Text>
    </Flex>
  )
}
ProductCategory.Layout = DefaultLayout