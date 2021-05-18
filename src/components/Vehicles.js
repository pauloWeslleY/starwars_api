import React, { useEffect, useState } from 'react';
import {
   Container,
   Row,
   Col,
   Jumbotron,
   Card,
   CardText,
   CardTitle,
   CardSubtitle,
   List,
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import '../App.css';

const Vehicles = ({data}) => {
   const [vehicles2, setVehicles2] = useState([]);
   const [vehicles3, setVehicles3] = useState([]);
   const [vehicles4, setVehicles4] = useState([]);
   useEffect(() => {
      async function getVehicles2() {
         let res = await fetch('https://swapi.dev/api/vehicles/?page=2&format=json');
         let data = await res.json();
         setVehicles2(data.results);
      }
      async function getVehicles3() {
         let res = await fetch('https://swapi.dev/api/vehicles/?page=3&format=json');
         let data = await res.json();
         setVehicles3(data.results);
      }
      async function getVehicles4() {
         let res = await fetch('https://swapi.dev/api/vehicles/?page=4&format=json');
         let data = await res.json();
         setVehicles4(data.results);
      }

      getVehicles2();
      getVehicles3();
      getVehicles4();
   }, [])
   const [activeTab, setActiveTab] = useState('1');
   const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
   }
   return (
      <>
         <Container fluid={true}>
            <Jumbotron>
               <h1 className="text-center">Vehicles</h1>
               <hr className="my-2" />
               <Nav tabs>
                  <NavItem className="navigation">
                     <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                        Vehicles 1
                     </NavLink>
                  </NavItem>
                  <NavItem className="navigation">
                     <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                        Vehicles 2
                     </NavLink>
                  </NavItem>
                  <NavItem className="navigation">
                     <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                        Vehicles 3
                     </NavLink>
                  </NavItem>
                  <NavItem className="navigation">
                     <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                        Vehicles 4
                     </NavLink>
                  </NavItem>
               </Nav>
               <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                     {data.map((vehicles, i) => {
                        return (
                           <>
                              <Row key={i}>
                                 <Col>
                                    <Card body className="text-center">
                                       <CardTitle tag="h5">{vehicles.name}</CardTitle>
                                       <CardSubtitle tag="h6" className="mb-2 text-muted">Model: { vehicles.model }</CardSubtitle>
                                       <CardText>
                                          <List type="unstyled">
                                             <strong>Manufacturer:</strong>
                                             <li>{vehicles.manufacturer}</li>
                                             <strong>Passengers:</strong>
                                             <li>{ vehicles.passengers }</li>
                                             <strong>Capacity:</strong>
                                             <li>{vehicles.cargo_capacity}</li>
                                             <strong>Class:</strong>
                                             <li>{vehicles.vehicle_class}</li>
                                             <strong>Consumables:</strong>
                                             <li>{vehicles.consumables}</li>
                                             <strong>Speed Max:</strong>
                                             <li>{vehicles.max_atmosphering_speed}</li>
                                             <strong>Length:</strong>
                                             <li>{vehicles.length}</li>
                                          </List>
                                       </CardText>
                                    </Card>
                                 </Col>
                              </Row>
                           </>
                        );
                     })}
                  </TabPane>
                  <TabPane tabId="2">
                     {vehicles2.map((vehicles2, i) => {
                        return (
                           <>
                              <Row key={i}>
                                 <Col>
                                    <Card body className="text-center">
                                       <CardTitle tag="h5">{vehicles2.name}</CardTitle>
                                       <CardSubtitle tag="h6" className="mb-2 text-muted">Model: { vehicles2.model }</CardSubtitle>
                                       <CardText>
                                          <List type="unstyled">
                                             <strong>Manufacturer:</strong>
                                             <li>{vehicles2.manufacturer}</li>
                                             <strong>Passengers:</strong>
                                             <li>{ vehicles2.passengers }</li>
                                             <strong>Capacity:</strong>
                                             <li>{vehicles2.cargo_capacity}</li>
                                             <strong>Class:</strong>
                                             <li>{vehicles2.vehicle_class}</li>
                                             <strong>Consumables:</strong>
                                             <li>{vehicles2.consumables}</li>
                                             <strong>Speed Max:</strong>
                                             <li>{vehicles2.max_atmosphering_speed}</li>
                                             <strong>Length:</strong>
                                             <li>{vehicles2.length}</li>
                                          </List>
                                       </CardText>
                                    </Card>
                                 </Col>
                              </Row>
                           </>
                        );
                     })}
                  </TabPane>
                  <TabPane tabId="3">
                     {vehicles3.map((vehicles3, i) => {
                        return (
                           <>
                              <Row key={i}>
                                 <Col>
                                    <Card body className="text-center">
                                       <CardTitle tag="h5">{vehicles3.name}</CardTitle>
                                       <CardSubtitle tag="h6" className="mb-2 text-muted">Model: { vehicles3.model }</CardSubtitle>
                                       <CardText>
                                          <List type="unstyled">
                                             <strong>Manufacturer:</strong>
                                             <li>{vehicles3.manufacturer}</li>
                                             <strong>Passengers:</strong>
                                             <li>{ vehicles3.passengers }</li>
                                             <strong>Capacity:</strong>
                                             <li>{vehicles3.cargo_capacity}</li>
                                             <strong>Class:</strong>
                                             <li>{vehicles3.vehicle_class}</li>
                                             <strong>Consumables:</strong>
                                             <li>{vehicles3.consumables}</li>
                                             <strong>Speed Max:</strong>
                                             <li>{vehicles3.max_atmosphering_speed}</li>
                                             <strong>Length:</strong>
                                             <li>{vehicles3.length}</li>
                                          </List>
                                       </CardText>
                                    </Card>
                                 </Col>
                              </Row>
                           </>
                        );
                     })}
                  </TabPane>
                  <TabPane tabId="4">
                     {vehicles4.map((vehicles4, i) => {
                        return (
                           <>
                              <Row key={i}>
                                 <Col>
                                    <Card body className="text-center">
                                       <CardTitle tag="h5">{vehicles4.name}</CardTitle>
                                       <CardSubtitle tag="h6" className="mb-2 text-muted">Model: { vehicles4.model }</CardSubtitle>
                                       <CardText>
                                          <List type="unstyled">
                                             <strong>Manufacturer:</strong>
                                             <li>{vehicles4.manufacturer}</li>
                                             <strong>Passengers:</strong>
                                             <li>{ vehicles4.passengers }</li>
                                             <strong>Capacity:</strong>
                                             <li>{vehicles4.cargo_capacity}</li>
                                             <strong>Class:</strong>
                                             <li>{vehicles4.vehicle_class}</li>
                                             <strong>Consumables:</strong>
                                             <li>{vehicles4.consumables}</li>
                                             <strong>Speed Max:</strong>
                                             <li>{vehicles4.max_atmosphering_speed}</li>
                                             <strong>Length:</strong>
                                             <li>{vehicles4.length}</li>
                                          </List>
                                       </CardText>
                                    </Card>
                                 </Col>
                              </Row>
                           </>
                        );
                     })}
                  </TabPane>
               </TabContent>
            </Jumbotron>
         </Container>
      </>
   );
}

export default Vehicles;