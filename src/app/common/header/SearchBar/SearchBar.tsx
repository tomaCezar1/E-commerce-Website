import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import {SearchProductsQuery} from './SearchProductsQuery'
import {useDebounce} from '../../../../utils'
import { apolloClient } from '../../../lib/apolloClient'

export default function SearchBar(): JSX.Element {

  // const { loading, error, data, refetch } = useQuery(SearchProductsQuery, {
  //   variables: { searchQuery: '' }
  // });

  const client = apolloClient;

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);


  // console.log(data);

  useEffect(() => {
    if (debouncedSearchTerm) {
      client.query({query: SearchProductsQuery, variables: { searchQuery: debouncedSearchTerm }})
        .then(res => {
          console.log(res)
        });
      // refetch({searchQuery: debouncedSearchTerm});
      // if(data) {
      //   setResults(data)
      // }
      console.log(debouncedSearchTerm)
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
