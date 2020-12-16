import {useState, useCallback, useContext} from 'react';
import { AppContext } from '../context'
import Breadcrumbs from '../app/common/breadcrumbs/Breadcrumbs'

export default function Cart(): JSX.Element {
  const { cart, addToCart, removeFromCart } = useContext(AppContext)
  const [, updateState] = useState()

  const forceUpdate = useCallback(() => updateState({}), [])

  return (
    <div>
      <Breadcrumbs />
    </div>
  )
}