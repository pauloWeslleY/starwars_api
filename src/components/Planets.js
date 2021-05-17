import React, { useEffect, useState } from 'react';
import Planets from '../assets/planets.svg';
import PlanetsHoth from '../assets/planets_hoth.svg';
import PlanetsCoruscant from '../assets/planets_coruscant.svg';
import {
   Container,
   Row,
   Col,
   Jumbotron,
   Card,
   CardTitle,
   CardText,
   CardColumns,
   CardImg,
   CardSubtitle,
   CardBody,
   ListGroup,
   ListGroupItem,
   List
} from 'reactstrap';

import '../App.css';

export default function People(props) {
   const [planets1, setPlanets1] = useState([]);
   const [planets2, setPlanets2] = useState([]);
   const [planets3, setPlanets3] = useState([]);
   const [planets4, setPlanets4] = useState([]);
   const [planets5, setPlanets5] = useState([]);
   const [planets6, setPlanets6] = useState([]);
   const [planets7, setPlanets7] = useState([]);
   const [planets8, setPlanets8] = useState([]);
   const [planets9, setPlanets9] = useState([]);
   const [planets10, setPlanets10] = useState([]);
   const [planetsAll, setPlanetsAll] = useState([]);
   useEffect(() => {
      async function getPlanets1() {
         let res = await fetch('https://swapi.dev/api/planets/1/');
         let data = await res.json();
         setPlanets1(data);
      }
      async function getPlanets2() {
         let res = await fetch('https://swapi.dev/api/planets/2/');
         let data = await res.json();
         setPlanets2(data);
      }
      async function getPlanets3() {
         let res = await fetch('https://swapi.dev/api/planets/3/');
         let data = await res.json();
         setPlanets3(data);
      }
      async function getPlanets4() {
         let res = await fetch('https://swapi.dev/api/planets/4/');
         let data = await res.json();
         setPlanets4(data);
      }
      async function getPlanets5() {
         let res = await fetch('https://swapi.dev/api/planets/5/');
         let data = await res.json();
         setPlanets5(data);
      }
      async function getPlanets6() {
         let res = await fetch('https://swapi.dev/api/planets/6/');
         let data = await res.json();
         setPlanets6(data);
      }
      async function getPlanets7() {
         let res = await fetch('https://swapi.dev/api/planets/7/');
         let data = await res.json();
         setPlanets7(data);
      }
      async function getPlanets8() {
         let res = await fetch('https://swapi.dev/api/planets/8/');
         let data = await res.json();
         setPlanets8(data);
      }
      async function getPlanets9() {
         let res = await fetch('https://swapi.dev/api/planets/9/');
         let data = await res.json();
         setPlanets9(data);
      }
      async function getPlanets10() {
         let res = await fetch('https://swapi.dev/api/planets/10/');
         let data = await res.json();
         setPlanets10(data);
      }
      async function getPlanetsAll() {
         let res = await fetch('https://swapi.dev/api/planets/?page=4&format=json');
         let data = await res.json();
         setPlanetsAll(data.results);
      }

      getPlanetsAll();
      getPlanets1();
      getPlanets2();
      getPlanets3();
      getPlanets4();
      getPlanets5();
      getPlanets6();
      getPlanets7();
      getPlanets8();
      getPlanets9();
      getPlanets10();

      // fetch('https://swapi.dev/api/planets/?page=4')
      //    .then(response => response.json())
      //    .then(data => {
      //       console.log(data);
      //    });
   }, [])

   return (
      <>
         <Container fluid={true}>
            <Jumbotron>
               <h1 className="text-center mb-3" >Planets</h1>
               <Row>
                  <Col>
                     <hr className="my-2"/>
                     <CardColumns>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 1:</strong> { planets1.name }</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets1.population}</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets1.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets1.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets1.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets1.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets1.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets1.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card>
                           <CardImg top width="100%" src={ Planets } alt="Card image cap" />
                        </Card>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 2:</strong> { planets2.name }</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: { planets2.population }</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets2.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets2.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets2.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets2.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets2.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets2.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 3:</strong> { planets3.name }</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets3.population}</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets3.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets3.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets3.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets3.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets3.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets3.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                           <CardImg top width="100%" src={ PlanetsHoth } alt="Card image cap" />
                           <CardTitle tag="h5"><strong>Planets 4:</strong> {planets4.name}</CardTitle>
                           <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets4.population}</CardSubtitle>
                           <CardText>
                              <ListGroup className="text-muted">
                                 <ListGroupItem>Diameter: { planets4.diameter }</ListGroupItem>
                                 <ListGroupItem>Climate: { planets4.climate }</ListGroupItem>
                                 <ListGroupItem>Gravity: { planets4.gravity }</ListGroupItem>
                                 <ListGroupItem>Created: { planets4.created }</ListGroupItem>
                                 <ListGroupItem>Terrain: { planets4.terrain }</ListGroupItem>
                                 <ListGroupItem>Edited: { planets4.edited }</ListGroupItem>
                              </ListGroup>
                           </CardText>
                        </Card>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 5:</strong> {planets5.name}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets5.population}</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets5.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets5.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets5.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets5.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets5.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets5.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card body inverse color="warning">
                           <CardTitle tag="h5"><strong>Planets 6:</strong> {planets6.name}</CardTitle>
                           <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets6.population}</CardSubtitle>
                           <CardText>
                              <ListGroup className="text-muted">
                                 <ListGroupItem>Diameter: { planets6.diameter }</ListGroupItem>
                                 <ListGroupItem>Climate: { planets6.climate }</ListGroupItem>
                                 <ListGroupItem>Gravity: { planets6.gravity }</ListGroupItem>
                                 <ListGroupItem>Created: { planets6.created }</ListGroupItem>
                                 <ListGroupItem>Terrain: { planets6.terrain }</ListGroupItem>
                                 <ListGroupItem>Edited: { planets6.edited }</ListGroupItem>
                              </ListGroup>
                           </CardText>
                        </Card>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                           <CardTitle tag="h5"><strong>Planets 7:</strong> {planets7.name}</CardTitle>
                           <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets7.population}</CardSubtitle>
                           <CardText>
                              <ListGroup className="text-muted">
                                 <ListGroupItem>Diameter: { planets7.diameter }</ListGroupItem>
                                 <ListGroupItem>Climate: { planets7.climate }</ListGroupItem>
                                 <ListGroupItem>Gravity: { planets7.gravity }</ListGroupItem>
                                 <ListGroupItem>Created: { planets7.created }</ListGroupItem>
                                 <ListGroupItem>Terrain: { planets7.terrain }</ListGroupItem>
                                 <ListGroupItem>Edited: { planets7.edited }</ListGroupItem>
                              </ListGroup>
                           </CardText>
                        </Card>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 8:</strong> {planets8.name}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: { planets8.population }</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets8.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets8.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets8.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets8.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets8.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets8.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card body inverse color="secondary">
                           <CardImg top width="100%" src={ PlanetsCoruscant } alt="Card image cap" />
                           <CardTitle tag="h5"><strong>Planets 9:</strong> {planets9.name}</CardTitle>
                           <CardSubtitle tag="h6" className="mb-2">Population: { planets9.population }</CardSubtitle>
                           <CardText>
                              <ListGroup className="text-muted">
                                 <ListGroupItem>Diameter: { planets9.diameter }</ListGroupItem>
                                 <ListGroupItem>Climate: { planets9.climate }</ListGroupItem>
                                 <ListGroupItem>Gravity: { planets9.gravity }</ListGroupItem>
                                 <ListGroupItem>Created: { planets9.created }</ListGroupItem>
                                 <ListGroupItem>Terrain: { planets9.terrain }</ListGroupItem>
                                 <ListGroupItem>Edited: { planets9.edited }</ListGroupItem>
                              </ListGroup>
                           </CardText>
                        </Card>
                        <Card>
                           <CardBody>
                              <CardTitle tag="h5"><strong>Planets 10:</strong> {planets10.name}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Population: {planets10.population}</CardSubtitle>
                              <CardText>
                                 <ListGroup>
                                    <ListGroupItem>Diameter: { planets10.diameter }</ListGroupItem>
                                    <ListGroupItem>Climate: { planets10.climate }</ListGroupItem>
                                    <ListGroupItem>Gravity: { planets10.gravity }</ListGroupItem>
                                    <ListGroupItem>Created: { planets10.created }</ListGroupItem>
                                    <ListGroupItem>Terrain: { planets10.terrain }</ListGroupItem>
                                    <ListGroupItem>Edited: { planets10.edited }</ListGroupItem>
                                 </ListGroup>
                              </CardText>
                           </CardBody>
                        </Card>
                        <Card>
                        {planetsAll.map((planets, i) => {
                           return (
                              <>
                                 <Row>
                                    <Col>
                                       <Card>
                                          <CardBody>
                                             <CardTitle tag="h5"><strong>Planets: </strong>{ planets.name }</CardTitle>
                                             <CardSubtitle tag="h6" className="mb-2 text-muted">Population: { planets.population }</CardSubtitle>
                                             <CardText>
                                                <List type="unstyled">
                                                   <li>Diameter: { planets.diameter }</li>
                                                   <li>Climate: { planets.climate }</li>
                                                   <li>Gravity: { planets.gravity }</li>
                                                   <li>Created: { planets.created }</li>
                                                   <li>Terrain: { planets.terrain }</li>
                                                   <li>Edited: { planets.edited }</li>
                                                </List>
                                             </CardText>
                                          </CardBody>
                                       </Card>
                                    </Col>
                                 </Row>
                              </>
                           );
                        })}
                        </Card>
                     </CardColumns>
                  </Col>
               </Row>
               <hr className="my-2" />
            </Jumbotron>
         </Container>
      </>
   );
}