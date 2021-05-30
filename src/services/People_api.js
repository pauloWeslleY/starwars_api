import { useEffect, useState } from 'react';

const PeopleApi = () => {

   const [people2, setPeople2] = useState([]);
   useEffect(() => {

      async function getPeople2() {
         let res = await fetch('https://swapi.dev/api/people/2/');
         let data = await res.json();
         setPeople2(data);
      }

      getPeople2();
   }, [])
   console.log('people', people2);
}

export default PeopleApi;
