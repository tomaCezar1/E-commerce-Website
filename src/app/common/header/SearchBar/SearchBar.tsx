import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { SearchProductsQuery } from './SearchProductsQuery';
import { useDebounce } from '../../../../utils';
import { apolloClient } from '../../../lib/apolloClient';
import Overlay from '../../overlay/Overlay';
import { AppContext } from '../../../../context';

export default function SearchBar({ mobile = false, onClose }): JSX.Element {
  const client = apolloClient;
  const { appContext } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();
  const searchContainerRef = useRef(null);
  const { dictionary } = appContext;
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

  useEffect(() => {
    if (showOverlay) {
      setShowOverlay(false);
    }
  }, [router.asPath]);

  return (
    <>
      <div
        id="search-container"
        className={mobile ? 'search-container-mobile' : 'search-container'}
        ref={searchContainerRef}
      >
        <div className="search-bar-container">
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
                setTimeout(() => {
                  setResults([]);
                  setSearchTerm('');
                  setIsSearching(true);
                  document.getElementById('Search').focus();
                }, 300);
              }}
            />
          ) : (
            <div className="search-icon" />
          )}
          <input
            autoComplete="off"
            id="Search"
            placeholder={`${dictionary.search}...`}
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
          />
        </div>
      </div>
      {showOverlay && (
        <Overlay
          className={mobile ? 'search-overlay-mobile' : 'search-overlay'}
          anchor={searchContainerRef.current}
          onBackdropClick={() => {
            setShowOverlay(false);
            if (!searchTerm) {
              onClose();
            }
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
                  <div key={id} style={{ cursor: 'pointer' }}>
                    <Link
                      href="/product/[slug]"
                      as={`/product/${slug}`}
                      key={id}
                    >
                      <div>
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
                  </div>
                );
              })}
          </div>
        </Overlay>
      )}
    </>
  );
}
