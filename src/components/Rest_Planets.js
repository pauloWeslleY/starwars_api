import React from 'react';
import {
   Container,
   Row,
   Col,
   Jumbotron,
   Card,
   CardTitle,
   CardText,
   CardSubtitle,
   CardBody,
   List
} from 'reactstrap';
import '../App.css';

const planetsMore = ({data}) => {

   const planets_name = data;
   const planets = data[2];
   console.log('All', planets);
   console.log('planetsName', planets_name[1]);

   return (
      <>
         <Container fluid={true}>
            <Jumbotron>
               <h1 className="text-center">All Planets</h1>
               <hr className="my-2" />
               <div className="text-center">
                  {planets_name.map((planets, i)=>{
                     return(
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
                     )
                  })}
               </div>
            </Jumbotron>
         </Container>
      </>
   );
}

export default planetsMore;