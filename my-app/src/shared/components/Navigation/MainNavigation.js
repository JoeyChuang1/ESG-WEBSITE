//main navigation will contain all the link
import React, {useState} from "react";
import { Link } from 'react-router-dom'
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';
import Backdrop from "../UIElements/Backdrop";
import Backdrop2 from "../UIElements/Backdrop2";
import Search from "./Search"
import SearchResultsList from "./SearchResultList";
import { useHttpClient } from '../../../shared/hooks/http-hook';
import {FaSearch} from "react-icons/fa"
const MainNavigation = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };


    const fetchPlaces = async (value) => {
        try {
          const responseData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/places`
          );
          console.log(responseData.places)
          const result = responseData.places.filter((place) => {
              return (
                  value && place.title.toLowerCase().includes(value.toLowerCase())
              )
          })
          console.log(result)
          setResults(result)
        } catch (err) {
        }
      };

    const onClear = () => {
        setSearchTerm('')
        fetchPlaces('');
    } 
    
    
    const handleChange = (value) => {
        setSearchTerm(value);
        fetchPlaces(value);
    }
 
    return(
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>

        <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}> 
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">ESG it</Link>
            <p className="tagline">CHANGE THE WORLD TODAY</p>
        </h1>
        <div className="search-bar-container">
        <div className='input-wrapper'>
            <FaSearch id="search-icon"/>
            <input 
                placeholder='Search your ESGs...'
                value={searchTerm}
                onSubmit={onClear}
                onClick={onClear}
                onChange={(e) => handleChange(e.target.value)}/>
        </div>
        {results && results.length > 0 && <SearchResultsList results={results} onClear={onClear}/> }
       </div>
        <nav className="main-navigation__header-nav">
            <NavLinks/>
        </nav>
    </MainHeader>
    </React.Fragment>)
};

export default MainNavigation;