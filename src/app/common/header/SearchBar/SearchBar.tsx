import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import {SearchProductsQuery} from './SearchProductsQuery'
import {useDebounce} from '../../../../utils'

export default function SearchBar(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { loading, error, data } = useQuery(SearchProductsQuery, {
    variables: { searchQuery: debouncedSearchTerm }
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      if(data) {
        setResults(data)
      }
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="search-container">
        <div style={{ margin: "0 auto" }}>
          <div className="search-icon" />
          <input
            id="Search"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
      </div>
      {isSearching && <div>Searching ...</div>}
      {results.products && results.products.map(result => (
        <div key={result.id}>
          {result.name}
        </div>
      ))}
    </>
  )
}