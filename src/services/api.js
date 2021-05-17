import { useEffect, useState } from 'react'

function Api() {

   const [plants, setPlanets] = useState([]);

   //todo "Metodo q chama API"
   useEffect(() => {

      async function planetsAll() {
         let res = await fetch('https://swapi.dev/api/planets/1/');
         let data = await res.json();
         setPlanets(data);
      }


      planetsAll();
   }, [])



















   // useEffect(() => {
   //    fetch('https://swapi.dev/api/')
   //       .then(response => response.json())
   //       .then(data => console.log(data))
   // });
}

export default Api;