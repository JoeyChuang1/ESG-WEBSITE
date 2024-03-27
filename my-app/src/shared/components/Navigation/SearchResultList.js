import React from "react";
import "./SearchResultList.css";
import SearchResult from "./SearchResult";
const SearchResultsList = props =>{
    return <div className="results-list"> {
    props.results.map((result, id) => {
       return <SearchResult  onClear={props.onClear} result={result} key={id}/>
    })} </div>
}

export default SearchResultsList