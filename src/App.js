import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logotipo from './Logotipo.svg';
import './App.css';

import Headers from './components/Navbar';
import Person from './components/Person';
import Planets from './components/Planets';
import Films from './components/Films';
import Nave from './components/Starships';
import Vehicles from './components/Vehicles';

import { Container } from 'reactstrap';

const App = () => {

   const [vehicles,  setVehicles] = useState([]);
   const [moves, setFilms] = useState([]);
   useEffect(() => {
      async function getFilms() {
         let res = await fetch('https://swapi.dev/api/films/');
         let data = await res.json();
         setFilms(data.results);
      }
      async function getVehicles() {
         let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
         let data = await res.json();
         setVehicles(data.results);
      }
      getVehicles();
      getFilms();
   }, [])

   return (
      <Router>
         <Headers />
         <Container fluid={true}>
            <Switch>
               <Route exact path='/films'>
                  <Films films={moves} />
               </Route>
               <Route exact path='/person'>
                  <Person />
               </Route>
               <Route exact path='/planets'>
                  <Planets />
               </Route>
               <Route exact path='/vehicles'>
                  <Vehicles data={vehicles}/>
               </Route>
               <Route exact path='/starships'>
                  <Nave />
               </Route>
               <header className="h_star_wars_header">
                  <img src={Logotipo} className="star_wars_logo" alt="logo" />
               </header>
            </Switch>
         </Container>
      </Router>
   );
}

export default App;
