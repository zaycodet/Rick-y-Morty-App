import { AppContainer } from './components/styles.js';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = 'martinhernan1996@gmail.com';
const password = 'zzz666';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

  const logout = () => {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          const characterExists = characters.some((char) => char.id === data.id);
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡Este personaje ya se encuentra en la lista!');
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  };

  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826);
    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          const characterExists = characters.some((char) => char.id === data.id);
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            addRandomCharacter();
          }
        } else {
          addRandomCharacter();
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character =>
      character.id !== Number(id))
    setCharacters(charactersFiltered)
   }

  return (
    <AppContainer className='App'>
      {
      location.pathname !== '/' && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} logout={logout}/>
    }
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
    </AppContainer>
  );
}

export default App;
