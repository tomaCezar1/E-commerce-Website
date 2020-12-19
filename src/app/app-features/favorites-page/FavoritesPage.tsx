import Breadcrumbs from '../../../app/common/breadcrumbs/Breadcrumbs'

export default function FavoritesPage(): JSX.Element {
  return (
    <>
      <Breadcrumbs />
      <div className="no-items-text">
          Nu ați adăugat încă nici un produs la favorite
      </div>
    </>
  )
}