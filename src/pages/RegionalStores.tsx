import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import RegionalStore from '../components/RegionalStores/RegionalStore'

export default function RegionalStores() {
  return (
    <div>
      <RegionalStore />
    </div>
  )
}

RegionalStores.Layout = DefaultLayout
