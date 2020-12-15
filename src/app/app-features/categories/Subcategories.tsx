import { useRouter } from "next/dist/client/router";

export default function Subcategories(): JSX.Element {
  const { subcategorySlug } = useRouter().query

  return (
    <div style={{ margin: '75px 0' }}>
      Details about subcategory with slug <b>{subcategorySlug}</b>
    </div>
  )
}
