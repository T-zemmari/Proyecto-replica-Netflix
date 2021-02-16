

let buscar = document.getElementById("search");
let url ="https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es-ES";
let url_latest = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1language=es-ES';


let coleccionDepeliculas = document.getElementById('movies');
let latestPelis = document.getElementById("ultimas");
const renderPeliculas = (movies) =>{
   for( const peli of movies){
    coleccionDepeliculas.innerHTML +=` 
     <p class="titulo">${peli.title}</p>
     <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" class="misImagenes " '>`};
    
   
     
 }

 const renderPeliculasLatest = (movies) =>{
  for(const movie of movies){
    latestPelis.innerHTML+=` 
    <p class="titulo">${movie.title}</p>
    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="misImagenes">`;
  } 
 }



  const peliculasPopulares = () =>{
   fetch(url).then(r => r.json())
   .then(res =>{
    const movies = res.results;
    //console.log(movies);
    renderPeliculas(movies);
  })

}
  peliculasPopulares();

  const ultimasPeliculas = ()=>{
    fetch(url_latest).then(r => r.json())
    //.then(console.log)
     .then(res => {
      const movies = res.results;
      console.log(movies);
      renderPeliculasLatest(movies);

    });
  }
  
  ultimasPeliculas();
  const cambioDepantalla = (pantalla1 , pantalla2)=> {
    const uno = document.getElementById('screen1').style.display = 'none';
    const dos = document.getElementById('screen2').style.display = 'block';
   };
   
   cambioDepantalla;

