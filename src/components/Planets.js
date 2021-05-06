import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function People() {
   const [planets, setPlanets] = useState([]);
   useEffect(() => {
      async function starPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
   }
      starPlanets();
   }, [])

   console.log('planets', planets);

   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h1 key={planets.planetsid}>Planets</h1>

                  <div>
                     {planets.map((value) => {
                        return (
                           <h3 key={planets.planetsid}>{ value.name }</h3>
                        )
                     })}
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
}