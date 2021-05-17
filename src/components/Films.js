import React, { useEffect, useState } from 'react';
import {
   Button,
   UncontrolledCollapse,
   CardBody,
   Card,
   Container,
   Row,
   Col,
   Jumbotron,
   List
} from 'reactstrap';

function Films({films}) {

   const [films1, setFilms1] = useState([]);
   const [films2, setFilms2] = useState([]);
   const [films3, setFilms3] = useState([]);
   const [films4, setFilms4] = useState([]);
   const [films5, setFilms5] = useState([]);
   const [films6, setFilms6] = useState([]);
   useEffect(() => {
      async function starFilms1() {
         let res = await fetch('https://swapi.dev/api/films/1/');
         let data = await res.json();
         setFilms1(data);
      }
      async function starFilms2() {
         let res = await fetch('https://swapi.dev/api/films/2/');
         let data = await res.json();
         setFilms2(data);
      }
      async function starFilms3() {
         let res = await fetch('https://swapi.dev/api/films/3/');
         let data = await res.json();
         setFilms3(data);
      }
      async function starFilms4() {
         let res = await fetch('https://swapi.dev/api/films/4/');
         let data = await res.json();
         setFilms4(data);
      }
      async function starFilms5() {
         let res = await fetch('https://swapi.dev/api/films/5/');
         let data = await res.json();
         setFilms5(data);
      }
      async function starFilms6() {
         let res = await fetch('https://swapi.dev/api/films/6/');
         let data = await res.json();
         setFilms6(data);
      }

      starFilms1();
      starFilms2();
      starFilms3();
      starFilms4();
      starFilms5();
      starFilms6();
   }, [])
   //? CRIAR FUNÇÃO PRA MOSTRA OS DETALHES NA TELA
   return (
      <>
         <Container className="themed-container" fluid={true}>
            <Row>
               <Col>
                  <Jumbotron>
                     <h1 className="text-center">Films</h1>
                     <div>
                        {films.map((value, i) => {
                           return (
                              <h3 className="text-center" key={i}>{ value.title }</h3>
                           )
                        })}
                     </div>
                     <hr className="my-2" />
                     <div className="text-center">
                        <Button outline color="warning" id="toggler" style={{ marginBottom: '1rem' }}>Filme 1</Button>
                        <Button outline color="warning" id="toggler2" style={{ marginBottom: '1rem' }}>Filme 2</Button>
                        <Button outline color="warning" id="toggler3" style={{ marginBottom: '1rem' }}>Filme 3</Button>
                        <Button outline color="warning" id="toggler4" style={{ marginBottom: '1rem' }}>Filme 4</Button>
                        <Button outline color="warning" id="toggler5" style={{ marginBottom: '1rem' }}>Filme 5</Button>
                        <Button outline color="warning" id="toggler6" style={{ marginBottom: '1rem' }}>Filme 6</Button>
                        <UncontrolledCollapse toggler="#toggler">
                           <Card>
                              <CardBody>
                                 <List type="unstyled">
                                    <li><h4>Filme 1: {films1.title}</h4></li>
                                    <li><strong>Episode</strong>: { films1.episode_id }</li>
                                    <li><strong>Director</strong>: { films1.director }</li>
                                    <li><strong>Sinopse</strong>: { films1.opening_crawl }</li>
                                    <li><strong>Planets</strong>: { films1.planets }</li>
                                    <li><strong>Species</strong>: { films1.species }</li>
                                    <li><strong>Starships</strong>: { films1.starships }</li>
                                    <li><strong>Url</strong>: { films1.url }</li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse toggler="#toggler2">
                           <Card>
                              <CardBody>
                                <List type="unstyled">
                                    <li><h4>Filme 2: {films2.title}</h4></li>
                                    <li><p><strong>Episode</strong>: { films2.episode_id }</p></li>
                                    <li><p><strong>Director</strong>: { films2.director }</p></li>
                                    <li><p><strong>Sinopse</strong>: { films2.opening_crawl }</p></li>
                                    <li><p><strong>Planets</strong>: { films2.planets }</p></li>
                                    <li><p><strong>Species</strong>: { films2.species }</p></li>
                                    <li><p><strong>Starships</strong>: { films2.starships }</p></li>
                                    <li><p><strong>Url</strong>: { films2.url }</p></li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse toggler="#toggler3">
                           <Card>
                              <CardBody>
                                 <List type="unstyled">
                                    <li><h4>Filme 3: {films3.title}</h4></li>
                                    <li><p><strong>Episode</strong>: { films3.episode_id }</p></li>
                                    <li><p><strong>Director</strong>: { films3.director }</p></li>
                                    <li><p><strong>Sinopse</strong>: { films3.opening_crawl }</p></li>
                                    <li><p><strong>Planets</strong>: { films3.planets }</p></li>
                                    <li><p><strong>Species</strong>: { films3.species }</p></li>
                                    <li><p><strong>Starships</strong>: { films3.starships }</p></li>
                                    <li><p><strong>Url</strong>: { films3.url }</p></li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse toggler="#toggler4">
                           <Card>
                              <CardBody>
                                <List type="unstyled">
                                    <li><h4>Filme 4: {films4.title}</h4></li>
                                    <li><p><strong>Episode</strong>: { films4.episode_id }</p></li>
                                    <li><p><strong>Director</strong>: { films4.director }</p></li>
                                    <li><p><strong>Sinopse</strong>: { films4.opening_crawl }</p></li>
                                    <li><p><strong>Planets</strong>: { films4.planets }</p></li>
                                    <li><p><strong>Species</strong>: { films4.species }</p></li>
                                    <li><p><strong>Starships</strong>: { films4.starships }</p></li>
                                    <li><p><strong>Url</strong>: { films4.url }</p></li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse toggler="#toggler5">
                           <Card>
                              <CardBody>
                                <List type="unstyled">
                                    <li><h4>Filme 5: {films5.title}</h4></li>
                                    <li><p><strong>Episode</strong>: { films5.episode_id }</p></li>
                                    <li><p><strong>Director</strong>: { films5.director }</p></li>
                                    <li><p><strong>Sinopse</strong>: { films5.opening_crawl }</p></li>
                                    <li><p><strong>Planets</strong>: { films5.planets }</p></li>
                                    <li><p><strong>Species</strong>: { films5.species }</p></li>
                                    <li><p><strong>Starships</strong>: { films5.starships }</p></li>
                                    <li><p><strong>Url</strong>: { films5.url }</p></li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                        <UncontrolledCollapse toggler="#toggler6">
                           <Card>
                              <CardBody>
                                 <List type="unstyled">
                                    <li><h4>Filme 6: {films6.title}</h4></li>
                                    <li><p><strong>Episode</strong>: { films6.episode_id }</p></li>
                                    <li><p><strong>Director</strong>: { films6.director }</p></li>
                                    <li><p><strong>Sinopse</strong>: { films6.opening_crawl }</p></li>
                                    <li><p><strong>Planets</strong>: { films6.planets }</p></li>
                                    <li><p><strong>Species</strong>: { films6.species }</p></li>
                                    <li><p><strong>Starships</strong>: { films6.starships }</p></li>
                                    <li><p><strong>Url</strong>: { films6.url }</p></li>
                                 </List>
                              </CardBody>
                           </Card>
                        </UncontrolledCollapse>
                     </div>
                  </Jumbotron>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default Films;