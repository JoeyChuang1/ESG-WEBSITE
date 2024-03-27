import React, {useEffect, useState} from 'react';
import {FaSearch} from "react-icons/fa"
import './Search.css'
import { CSSTransition } from 'react-transition-group'
import { useHttpClient } from '../../../shared/hooks/http-hook';
import Backdrop from "../UIElements/Backdrop";
const Search = props =>{
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const onClear = () => {
        props.setSearchTerm('')
        props.fetchPlaces('');
    } 
    
    
    const handleChange = (value) => {
        props.setSearchTerm(value);
        props.fetchPlaces(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon"/>
            <input 
                placeholder='Search your ESGs...'
                value={props.searchTerm}
                onSubmit={onClear}
                onClick={onClear}
                onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}

export default Search;