import React from 'react'
import DefaultLayout from '../components/DefaultLayout';
import RegionalStores from '../components/MagazineRegionale/RegionalStores';

export default function MagazineRegionale() {
    return (
        <div>
            <RegionalStores />
        </div>
    )
}

MagazineRegionale.Layout = DefaultLayout;