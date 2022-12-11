import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import React from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import Error from "./components/Error/Error";
import Favorites from './components/Favorites/Favorites'

//import characters, { Rick } from './data.js'

function App() {
  //const dispatch = React.useDispatch()
  const [characters, setCharacters] = React.useState([]);

  // const onSearch = (valor) => {
  //   //en valor esta el id
  //   setCharacter([...character, {name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',}]);

  // };
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const [access, setAccess] = useState(false);
  const username = "jcmm@gmail.com";
  const password = "123456";
  const navigate = useNavigate();
  function login(userData) {
    if (userData.password && userData.username) {
      if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate("/home");
      } else {
        alert("No existen registros con esos datos");
      }
    }
  }
  const location = useLocation();
  const onClose = (e) => {
    setCharacters(characters.filter((data) => data.id !== e));
    //dispatch(deleteFavorite(e));
  };
  if (location.pathname === "/") {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path=":404" element={<Error />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Nav onSearch={onSearch} />

        <hr />
        <div style={{ width: "100%" }}>
          <Routes>
            <Route
              path="/home"
              element={<Cards onClose={onClose} characters={characters} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path=":404" element={<Error />} />
            <Route path='/favorites' element ={<Favorites />}/>
          </Routes>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
