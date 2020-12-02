import { useQuery } from "@apollo/client";
import { Box, Flex, Icon, Popover, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import Link from "next/link";
import MenuIcon from '../../../../public/svg/MenuIcon.svg'
import { IProductCategoriesData, ProductCategoriesQuery } from "../../app-features/categories/ProductCategoriesQueries";

export default function SubHeader(): JSX.Element {


  const { loading, error, data } = useQuery<IProductCategoriesData>(ProductCategoriesQuery)
  console.log(data)
  const rootProductCategories = data?.productCategories.filter(cat => cat.parent === null);
  console.log(data?.productCategories);

  return (
    <Flex
      background="primary.100"
      height="45px"
      align="center"
      justify="center"
    >
      <Flex maxW="1133px" w="100%">
        <Popover placement="bottom-start" autoFocus={false}>
          <PopoverTrigger>
            <Flex
              className="cursor-pointer"
              width="318px"
              height="45px"
              background="accent.500"
              justifyContent="space-evenly"
              align="center"
              color="white"
            >
              <Icon as={MenuIcon} />
              <Text fontWeight="medium">
                Catalogul Produselor
              </Text>
            </Flex>
          </PopoverTrigger>
          <PopoverContent h="300px" p="20px">
            {
              loading
                ? <div>Loading...</div>
                : rootProductCategories.map(category =>
                  <Link href={`/categories/${category.id}`} key={category.id}>
                    <Flex>
                      {category.title}
                    </Flex>
                  </Link>
                )
            }
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex
        justify='center'
        align='center'
      >
        <Text>Magazine Regionale</Text>
        <Text>Service Centru</Text>
        <Text>&#350;tiri</Text>
      </Flex>
    </Flex>
  )
}