import Subcategories from '../../../app/app-features/categories/Subcategories';
import { initializeApollo } from '../../../app/lib/apolloClient';
import {
  DropDownOption,
  ProductCategoriesQuery,
} from '../../../app/app-features/categories/ProductCategoriesQueries';
import {
  ProductListQuery,
  ProductsCountQuery,
} from '../../../app/app-features/home-page/product-list/ProductListQuery';

export default function SubcategoryPage({
  products,
  subcategory,
  productsCount,
  currentPage,
  category,
}) {
  return (
    <Subcategories
      products={products}
      subcategory={subcategory}
      productsCount={productsCount}
      currentPage={currentPage}
      category={category}
    />
  );
}

const buildDropdownFilter = (property: string, values: DropDownOption[]) => {
  return {
    property,
    filterValue: { in: values.map((v) => v.value) },
  };
};

const buildNumberRangeFilter = (
  property: string,
  minValue: number,
  maxValue: number
) => {
  const result = { property };
  if (
    minValue !== null &&
    !isNaN(minValue) &&
    maxValue !== null &&
    !isNaN(maxValue)
  ) {
    result['filterValue'] = { between: { lower: minValue, upper: maxValue } };
    // console.log('1');
    return result;
  }
  if (minValue !== null && !isNaN(minValue)) {
    result['filterValue'] = { gte: minValue };
    // console.log('2');
    return result;
  }
  if (maxValue !== null && !isNaN(maxValue)) {
    result['filterValue'] = { lte: maxValue };
    // console.log('3');
    return result;
  }
};

export async function getServerSideProps(context) {
  let uiFilters = [];

  if (context.query.filter) {
    try {
      const filterForm = JSON.parse(decodeURI(context.query.filter as string));
      Object.keys(filterForm).forEach((formKey) => {
        // console.log(formKey);
        if (filterForm[formKey] && filterForm[formKey].length > 0) {
          uiFilters.push(buildDropdownFilter(formKey, filterForm[formKey]));
        } else if (
          filterForm[formKey].minValue !== null ||
          filterForm[formKey].maxValue !== null
        ) {
          uiFilters.push(
            buildNumberRangeFilter(
              formKey,
              filterForm[formKey].minValue,
              filterForm[formKey].maxValue
            )
          );
        }
      });
    } catch (e) {}
  }

  uiFilters = uiFilters.filter((v) => !!v);
  console.log(uiFilters);
  const slug = context.query.subcategorySlug;

  const page = context.query.page || 1;


  let field = 'sortOrder';
  let direction = 'DESC';
  if (context.query.sort === 'cheap') {
    field = 'price';
    direction = 'ASC';
  } else if (context.query.sort === 'expensive') {
    field = 'price';
    direction = 'DESC';
  } else if (context.query.sort === 'new') {
    field = 'createdAt';
    direction = 'DESC';
  } else if (context.query.sort === 'old') {
    field = 'createdAt';
    direction = 'ASC';
  }

  const apolloClient = initializeApollo();

  const productCategoriesData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        slug: { eq: slug },
      },
    },
  });

  const parentId = productCategoriesData.data.productCategories[0].parent;

  const categoryData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        id: {
          eq: parentId,
        },
      },
    },
  });

  const limit = 20;

  const offset = limit * page - limit;

  const categoryId = productCategoriesData.data.productCategories[0].id;

  const productsData = await apolloClient.query({
    query: ProductListQuery,
    variables: {
      filter: {
        categoryId: {
          eq: categoryId,
        },
      },
      paging: {
        limit: limit,
      },
      offset: offset,
      sorting: [
        {
          field: field,
          direction: direction,
        },
      ],
      uiFilters,
    },
  });

  let productsCount: number;
  let productsCountData: any;

  try {
    productsCountData = await apolloClient.query({
      query: ProductsCountQuery,
      variables: {
        filter: {
          categoryId: {
            eq: categoryId,
          },
        },
        sorting: [
          {
            field: 'price',
            direction: 'ASC',
          },
        ],
      },
    });

    productsCount = productsCountData?.data.productAggregate.count.id;
  } catch (e) {
    productsCount = 0;
  }

  return {
    props: {
      products: productsData.data.products,
      subcategory: productCategoriesData?.data?.productCategories[0],
      productsCount: productsCount,
      category: categoryData.data.productCategories[0],
      currentPage: page,
    },
  };
}
