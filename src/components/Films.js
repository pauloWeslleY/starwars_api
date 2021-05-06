import React, { useEffect, useState } from 'react';

export default function Films() {
   const [films, setFilms] = useState([]);
   useEffect(() => {
      async function starFilms() {
         let res = await fetch('https://swapi.dev/api/films/');
         let data = await res.json();
         setFilms(data.results);
      }

      starFilms();
   }, [])

   console.log('filmes', films);

   return (
      <>
         <h1>Films</h1>

         <div>
            {films.map((value) => {
               return (
                  <h3>{ value.title }</h3>
               )
            })}
         </div>
      </>
   );
}