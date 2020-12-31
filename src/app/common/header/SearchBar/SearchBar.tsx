import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SearchProductsQuery } from './SearchProductsQuery';
import { useDebounce } from '../../../../utils';
import { apolloClient } from '../../../lib/apolloClient';
import Overlay from '../../overlay/Overlay';
import { SkeletonText, SkeletonCircle } from '@chakra-ui/react';

export default function SearchBar({ mobile = false }): JSX.Element {
  const client = apolloClient;

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const searchContainerRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      client
        .query({
          query: SearchProductsQuery,
          variables: { searchQuery: debouncedSearchTerm },
        })
        .then((res) => {
          setResults(res.data.products);
          setIsSearching(false);
        });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div
        id="search-container"
        className={mobile ? 'search-container-mobile' : 'search-container'}
        ref={searchContainerRef}
      >
        <div style={{ margin: '0 auto', position: 'relative' }}>
          {searchTerm ? (
            <div
              className={
                showOverlay
                  ? mobile
                    ? 'close-circle-icon-mobile'
                    : 'close-circle-icon'
                  : 'close-circle-icon2'
              }
              onClick={() => {
                setResults([]);
                setSearchTerm('');
                setIsSearching(true);
                document.getElementById('Search').focus();
              }}
            />
          ) : (
            <div className="search-icon" />
          )}
          <input
            autoComplete="off"
            id="Search"
            placeholder="Caută..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={
              showOverlay
                ? mobile
                  ? 'search-bar-active-mobile'
                  : 'search-bar-active'
                : 'search-bar'
            }
            onFocus={() => {
              setShowOverlay(true);
              setIsSearching(true);
            }}
            onBlur={
              !searchTerm
                ? () => {
                    setShowOverlay(false);
                    setIsSearching(false);
                  }
                : null
            }
          />
        </div>
      </div>
      {showOverlay && (
        <Overlay
          className={mobile ? 'search-overlay-mobile' : 'search-overlay'}
          anchor={searchContainerRef.current}
          onBackdropClick={() => {
            setShowOverlay(false);
            document.getElementById('Search').blur();
          }}
        >
          <div
            className={
              !results.length
                ? 'search-results-container'
                : mobile
                ? 'search-results-container-scroll-mobile'
                : 'search-results-container-scroll'
            }
          >
            {isSearching && !results.length && (
              <>
                <div className="search-skeleton-wrapper">
                  <SkeletonCircle size={mobile ? '7' : '10'} />
                  <div
                    className={
                      mobile
                        ? 'search-skeleton-text-mobile'
                        : 'search-skeleton-text'
                    }
                  >
                    <SkeletonText noOfLines={2} spacing="2" />
                  </div>
                  <SkeletonCircle size="4" />
                </div>
                <div className="search-skeleton-wrapper">
                  <SkeletonCircle size={mobile ? '7' : '10'} />
                  <div
                    className={
                      mobile
                        ? 'search-skeleton-text-mobile'
                        : 'search-skeleton-text'
                    }
                  >
                    <SkeletonText noOfLines={2} spacing="2" />
                  </div>
                  <SkeletonCircle size="4" />
                </div>
                <div className="search-skeleton-wrapper">
                  <SkeletonCircle size={mobile ? '7' : '10'} />
                  <div
                    className={
                      mobile
                        ? 'search-skeleton-text-mobile'
                        : 'search-skeleton-text'
                    }
                  >
                    <SkeletonText noOfLines={2} spacing="2" />
                  </div>
                  <SkeletonCircle size="4" />
                </div>
              </>
            )}
            {!isSearching && !results.length && (
              <div
                className={
                  mobile ? 'no-items-container-mobile' : 'no-items-container'
                }
              >
                <span className="no-items-text">Nu au fost găsite produse</span>
              </div>
            )}
            {results &&
              results.map(({ id, name, price, images, slug }) => {
                return (
                  <>
                    <Link href="/product/[slug]" as={`/product/${slug}`}>
                      <div
                        key={id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowOverlay(false)}
                      >
                        <div className="search-results-divider" />
                        <div className="search-product-wrapper">
                          <img
                            src={images[0]}
                            className={
                              mobile
                                ? 'search-product-image-mobile'
                                : 'search-product-image'
                            }
                          />
                          <div className="search-product-text">
                            <span
                              className={
                                mobile
                                  ? 'search-product-name-mobile'
                                  : 'search-product-name'
                              }
                            >
                              {name}
                            </span>
                            <span
                              className={
                                mobile
                                  ? 'search-product-price-mobile'
                                  : 'search-product-price'
                              }
                            >
                              {price} lei
                            </span>
                          </div>

                          <div className="button-to-product" />
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
        </Overlay>
      )}
    </>
  );
}
