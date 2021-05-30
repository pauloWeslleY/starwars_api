import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Logotipo from './Logotipo.svg';
import "./style/global.css";

import Headers from "./components/Header/Navbar";
import Person from "./components/Person/Person";
import Planets from "./components/Planets/Planets";
import PlanetsMore from "./components/Planets/Rest_Planets";
import Films from "./components/Films/Films";
import Nave from "./components/Starships/Starships";
import Vehicles from "./components/Vehicles/Vehicles";
import Species from "./components/Species/Species";

import { Container } from 'reactstrap';

const App = () => {
   const [starships, setStarships] = useState([]);
   const [vehicles,  setVehicles] = useState([]);
   const [species, setSpecies] = useState([]);
   const [planetsMore, setPlanetsM] = useState([]);
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
      async function getStarships() {
         let res = await fetch('https://swapi.dev/api/starships/?format=json');
         let data = await res.json();
         setStarships(data.results);
      }
      async function getSpecies(){
         let res = await fetch('https://swapi.dev/api/species/?format=json');
         let data = await res.json();
         setSpecies(data.results);
      }
      async function getPlanetsM(){
         let res = await fetch("https://swapi.dev/api/planets/?format=json");
         let data = await res.json();
         setPlanetsM(data.results);
      }
      getPlanetsM();
      getSpecies();
      getVehicles();
      getFilms();
      getStarships();
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
                  <Nave data={starships}/>
               </Route>
               <Route exact path='/species'>
                  <Species data={species} />
               </Route>
               <Route exact path='/planetsMore'>
                  <PlanetsMore data={planetsMore} />
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
