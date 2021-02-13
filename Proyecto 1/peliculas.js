//Proyecto Replica Netflix

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES';



  const getPelis = axios.get(url);

  let pelisArrayPromise = getPelis.then((response) => response.data.results );
  console.log(pelisArrayPromise);
   resultsGetPelis = getPelis.then((res)=>
       res=res.results);
   


   const renderPelis =(miColeccionPelis) => {
    // Aqui pinatermos las peliculas en pantalla
        //console.log(miColeccionPelis);
    const divPeliculasDomElement =document.getElementById('pelis');
    

    miColeccionPelis.map((movie) => { 
        const divTitulosDeLasPeliculas = document.createElement('div');
        const divImagenesDeLasPeliculas = document.createElement('img');
        divImagenesDeLasPeliculas.setAttribute('class' , 'misImagenes');
        divImagenesDeLasPeliculas.setAttribute('src' , ' movie.backdrop_path')
        divTitulosDeLasPeliculas.setAttribute('class', 'misPelis');
        divTitulosDeLasPeliculas.innerHTML = movie.title;
           console.log(movie.title);
        divImagenesDeLasPeliculas.innerHTML = movie.backdrop_path;
        console.log(movie.backdrop_path);
        divPeliculasDomElement.appendChild(divTitulosDeLasPeliculas);
        divPeliculasDomElement.appendChild(divImagenesDeLasPeliculas);
    });
        
    
}
      pelisArrayPromise.then(renderPelis);

//barra de search netflix

var searchIcon = document.getElementsByClassName("search-box__icon")[0];
var searchBox = document.getElementsByClassName("search-box")[0];

searchIcon.addEventListener("click", activateSearch);

function activateSearch() {  
  searchBox.classList.toggle("active");
}