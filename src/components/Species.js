import React from 'react';
import {
   Container,
   Row,
   Col,
   Jumbotron,
   List,
} from 'reactstrap';
import '../App.css';
const Species = ({ data }) => {
   return (
      <>
         <Container fluid={true}>
            <Jumbotron>
               <h1 className="text-center">Species</h1>
               <hr className="my-2" />
               <div className="text-center">
                  {data.map((species, i) => {
                     return (
                        <>
                           <Row key={i}>
                              <Col>
                                 <List type="unstyled">
                                    <strong>Name:</strong>
                                    <li><h4 className="text-warning">{ species.name }</h4></li>
                                    <strong>Classification:</strong>
                                    <li>{species.classification}</li>
                                    <strong>Designation:</strong>
                                    <li>{ species.designation }</li>
                                    <strong>Height:</strong>
                                    <li>{ species.average_height }</li>
                                    <strong>Lifespan:</strong>
                                    <li>{ species.average_lifespan }</li>
                                    <strong>Language:</strong>
                                    <li>{ species.language }</li>
                                    <strong>Skin</strong>
                                    <li>{species.skin_colors}</li>
                                    <strong>Eye:</strong>
                                    <li>{ species.eye_colors }</li>
                                    <strong>Hair:</strong>
                                    <li>{species.hair_colors}</li>
                                    <hr className="hrLine" />
                                 </List>
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

export default Species;