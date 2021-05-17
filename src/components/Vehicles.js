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

      getVehicles2();
      getVehicles3();
   }, [])
   console.log('All Vehicles', vehicles3);
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
                     {vehicles2.map((vehicles1, i) => {
                        return (
                           <>
                              <Row key={i}>
                                 <Col>
                                    <Card body className="text-center">
                                       <CardTitle tag="h5">{vehicles1.name}</CardTitle>
                                       <CardSubtitle tag="h6" className="mb-2 text-muted">Model: { vehicles1.model }</CardSubtitle>
                                       <CardText>
                                          <List type="unstyled">
                                             <strong>Manufacturer:</strong>
                                             <li>{vehicles1.manufacturer}</li>
                                             <strong>Passengers:</strong>
                                             <li>{ vehicles1.passengers }</li>
                                             <strong>Capacity:</strong>
                                             <li>{vehicles1.cargo_capacity}</li>
                                             <strong>Class:</strong>
                                             <li>{vehicles1.vehicle_class}</li>
                                             <strong>Consumables:</strong>
                                             <li>{vehicles1.consumables}</li>
                                             <strong>Speed Max:</strong>
                                             <li>{vehicles1.max_atmosphering_speed}</li>
                                             <strong>Length:</strong>
                                             <li>{vehicles1.length}</li>
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
               </TabContent>
            </Jumbotron>
         </Container>
      </>
   );
}

export default Vehicles;