

let buscar = document.getElementById("search");
let url ="https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es-ES";
let url_latest = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1language=es-ES';


const refrescarPagina =()=>{
  location.reload()
}

 let pantalla4= document.getElementById('screen1');
  let pantalla5= document.getElementById('screen2');
  let pantalla6= document.getElementById('screen3');
const switchPantallas1 = (p,po,pi)=>{
  
  pantalla4.style.display= 'block';
  pantalla5.style.display= 'none'
  pantalla6.style.display= 'none'
}


const ShowMovies = () =>{

  switchPantallas1('screen1','screen2','screen3');
  
  let coleccionDepeliculas = document.getElementById('movies');
  let latestPelis = document.getElementById("ultimas");
  const ShowCabeceras = (dos,tres) =>{
    let cabeceraUno = document.getElementById('pelisPopulares');
    let cabeceraDos = document.getElementById('pelisLatest');
    cabeceraUno.style.display = 'block';
    cabeceraDos.style.display = 'block';
  }
  

  ShowCabeceras('pelisPopulares','pelisLatest');
  const renderPeliculas = (movies) =>{
     for( const peli of movies){
      coleccionDepeliculas.innerHTML +=` 
       <p class="titulo">${peli.title}</p>
       <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" class="misImagenes " '>`};
  
       {
    
      }
       
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
      // console.log(movies);
       renderPeliculasLatest(movies);
 
     });
   }
   
   ultimasPeliculas();


}

 


  

