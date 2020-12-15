import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import { SearchProductsQuery } from './SearchProductsQuery'
import { useDebounce } from '../../../../utils'
import { apolloClient } from '../../../lib/apolloClient'
import Overlay from '../../overlay/Overlay';
import { SkeletonText, SkeletonCircle } from '@chakra-ui/react';

export default function SearchBar(): JSX.Element {
  const client = apolloClient;

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false)

  const searchInputRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      client.query({query: SearchProductsQuery, variables: { searchQuery: debouncedSearchTerm }})
        .then(res => {
          setResults(res.data.products)
          setIsSearching(false)
        });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <>
      <div id="search-container" className="search-container" ref={searchInputRef}>
        <div style={{ margin: "0 auto", position: 'relative' }}>
        {searchTerm ? <div className={showOverlay ? "close-circle-icon" : "close-circle-icon2"} onClick={() => {
          setResults([])
          setSearchTerm('')
          setIsSearching(true)
          document.getElementById('Search').focus()
        }}/> : <div className="search-icon" />}
          <input
            id="Search"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className={showOverlay ? "search-bar-active" : "search-bar"} 
            onFocus={() => {
              setShowOverlay(true)
              document.getElementById('menu').classList.add('hide-menu')
              setIsSearching(true)
            }}
            onBlur={!searchTerm ? () => {
              setShowOverlay(false)
              setIsSearching(false)
            } : null}
          />
        </div>
      </div>
      {showOverlay && 
        (<Overlay anchor={searchInputRef.current} onBackdropClick={(e) => setShowOverlay(false)}>
          <div className={!results.length ? "search-results-container" : "search-results-container-scroll"} >
            {isSearching && !results.length && (
              <>
                <div className="search-skeleton-wrapper">
                  <SkeletonCircle size="10" />
                  <div className="search-skeleton-text">
                    <SkeletonText noOfLines={2} spacing="2" />
                  </div>
                  <SkeletonCircle size="4" />
                </div>
                <div className="search-skeleton-wrapper">
                <SkeletonCircle size="10" />
                <div className="search-skeleton-text">
                  <SkeletonText noOfLines={2} spacing="2" />
                </div>
                <SkeletonCircle size="4" />
                </div>
                <div className="search-skeleton-wrapper">
                  <SkeletonCircle size="10" />
                  <div className="search-skeleton-text">
                    <SkeletonText noOfLines={2} spacing="2" />
                  </div>
                  <SkeletonCircle size="4" />
                </div>
              </>
            )}
            {!isSearching && !results.length && (
              <div className="no-items-container">
                <span className="no-items-text">No items found</span>
              </div>
            )}
            {results && results.map(({id, name, price, images}) => {
              return (
                <div key={id}>
                  <div className="search-results-divider" />
                  <div className="search-product-wrapper">
                    <img src={images[0]} className="search-product-image" />
                    <div className="search-product-text">
                      <span className="search-product-name">
                        {name}
                      </span>
                      <span className="search-product-price">
                        {price} lei
                      </span>
                    </div>
                    <Link href="/">
                      <div className="button-to-product" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </Overlay>
      )}
    </>
  )
}
