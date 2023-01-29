import React from 'react';
import { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);



  //alternatív szintaxis:
  // async function featchMovieHandler() {
  //a useCallback arra szükséges, hogy adjon egy visszatérési értéket, hogy már egyszer lefutott, és így használhassuk a useEffectet aminek hatására automatikusan csak ELSŐRE fut így le magam a fügvény.
  const featchMovieHandler = useCallback(async function () {
    setIsLoading(true);
    SetError(null);
    try {
      const response = await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/movies.json');
      // const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Valami hiba van!');
      }
      const data = await response.json();
      const loadedMovies= [];
      for (const key in data){
        loadedMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].release_date
        })
      }
      // const transformedMovies = data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(transformedMovies);
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      SetError(error.message);

    }
    setIsLoading(false);
  }
    , []);


  useEffect(() => {
    featchMovieHandler();
  }, [featchMovieHandler])



  // function featchMovieHandler() {
  //   fetch('https://swapi.dev/api/films/')
  //   .then((response)=>{
  //       return response.json();
  //     })
  //  .then((data) => {
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  /*response.json(). jsonná alakítja a bejövő adatokat mivel minden 
  tulajdonság név elején és végén van "-l*/
  /*fetch('innen szedi az adatot',lehet plusz elemet hozzáadni) */



  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2', 
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];


  async function addMovieHandler(movie) {
    console.log(movie);
   const response =  await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Contet-Type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={featchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
