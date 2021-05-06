import React, { useEffect, useState }  from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Person() {
   const [person, setPerson] = useState([]);
   useEffect(() => {
      async function starPerson() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPerson(data.results);
   }
      starPerson();
   }, [])

   console.log('people', person);

   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h1 key={person.personid}>Person</h1>

                  <div>
                     {person.map((value) => {
                        return (
                           <h3 key={person.personid}>{ value.name }</h3>
                        )
                     })}
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
}