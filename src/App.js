import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logotipo from './star_wars_logo.svg';
import './App.css';

import Headers from './components/Navbar';
import Person from './components/Person';
import Planets from './components/Planets';
import Films from './components/Films';
import Nave from './components/Starships';
import Vehicles from './components/Vehicles';

import { Container } from 'reactstrap';


const App = () => {
   return (
      <Router>
         <Headers />
         <Container>
            <Switch>
               <Route exact path='/Films'>
                  <Films />
               </Route>
               <Route exact path='/person'>
                  <Person />
               </Route>
               <Route exact path='/planets'>
                  <Planets />
               </Route>
               <Route exact path='/vehicles'>
                  <Vehicles />
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
