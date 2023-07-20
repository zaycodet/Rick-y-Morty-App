import React from "react";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import { SearchBarContainer } from './styles';


const Nav = ({ onSearch, addRandomCharacter, logout }) => {

    return (
        <SearchBarContainer>
            <h1>Rick and Morty</h1>
            <SearchBar onSearch={onSearch} addRandomCharacter={addRandomCharacter}/>
            <button><Link to='/about' className="nav-link">About</Link></button>
            <button><Link to='/home' className="nav-link">Home</Link></button>
            <button><Link to='/favorites' className="nav-link">Favorites</Link></button>
            <button onClick={logout}>Log out</button>
        </SearchBarContainer>
    )
}

export default Nav;