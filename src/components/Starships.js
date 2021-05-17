import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Starships() {
   const [starships, setStarships] = useState([]);
   useEffect(() => {
      async function starStarships() {
      let res = await fetch('https://swapi.dev/api/starships/');
      let data = await res.json();
      setStarships(data.results);
   }
      starStarships();
   }, [])

   console.log('starships', starships);

   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h1 key={starships.starshipsid}>Starships</h1>

                  <div>
                     {starships.map((value, i) => {
                        return (
                           <h3 key={i}>{ value.name }</h3>
                        )
                     })}
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
}