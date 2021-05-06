import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Vehicles = () => {

   const [vehicles, setVehicles] = useState([]);
   useEffect(() => {
      async function starVehicles() {
         let res = await fetch('https://swapi.dev/api/vehicles/');
         let data = await res.json();
         setVehicles(data.results);
      }
      starVehicles();
   }, [])

   console.log('vehicles', vehicles);

   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h1>Vehicles</h1>

                  <div>
                     {vehicles.map((value) => {
                        return (
                           <h3>{ value.name }</h3>
                        );
                     })}
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default Vehicles;