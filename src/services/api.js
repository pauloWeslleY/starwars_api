import { useEffect } from 'react'

function Api() {
   //! "Metodo q chama API"
   useEffect(() => {
      fetch('https://swapi.dev/api/')
         .then(response => response.json())
         .then(data => console.log(data))
   });

}

export default Api;

// Promise((resolve) => {
//   setTimeout(() => {
//     resolve("3 minutos depois...");
//   }, 3000);

//   fetch("https://swapi.dev/api/people/1/")
//     .then((res) => res.json())
//     .then((dados) => console.log(dados));
// });