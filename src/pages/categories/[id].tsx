import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import DefaultLayout from "../../components/DefaultLayout";
import { ProductsCategoriesQuery } from "../../components/products/ProductsQueries";
import { useQuery } from "@apollo/client";



export default function ProductCategory() {

  const { id } = useRouter().query
  console.log(id);

  const { loading, error, data } = useQuery(ProductsCategoriesQuery, {
    variables: { id }
  });
  const products = data?.productCategories;

  console.log(data?.productCategories)
  console.log(products)



  return (
    <Flex maxW="1133px" w="100%" pt="30px">
      <Text fontSize="xl">
        Details about Category with id <b>{id}</b>
      </Text>
      {products?.map((obj) => {
        <p>{obj}</p>
      })}
    </Flex>
  )
}
ProductCategory.Layout = DefaultLayout