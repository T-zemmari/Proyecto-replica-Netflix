
//funciones
let valor = document.getElementById("buscador");
let valorId = document.getElementById("buscadorID");
//Recursos API

let key = "be761d96072c0447097947c70d2686b6";

let recurso= "search";

let criterio = "movie";



let base_url = `http://api.themoviedb.org/3/`;

const call = async (url) => {
    let res = await axios.get(url);
    

    if (res.data.results){
        return res.data.results;

    }
    if (res.data.title){
        return res.data;
    }
    
}


const pintar = async (coleccionPintar) => {
    
    
    const domElement = document.getElementById("screen2");
    
    // console.log(coleccionPintar);
    if (Array.isArray(coleccionPintar)) {
        coleccionPintar.forEach(pelicula => {
            //domElement.innerHTML ="";
            domElement.innerHTML += `
           
            <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' class="nuevaClase" >
            `
        });
    }
    
    if (coleccionPintar.original_title){
        //domElement.innerHTML ="";
        domElement.innerHTML += `
            <p class="titulo">${coleccionPintar.original_title}<p>
            <img src='https://image.tmdb.org/t/p/w500${coleccionPintar.poster_path}' >
            `
        
    }
    return;
};

let pantalla1= document.getElementById('screen1');
let pantalla2= document.getElementById('screen2');
let pantalla3 = document.getElementById('screen3');

const switchPantallas = (lcd1,lcd2,lcd)=>{
   pantalla1.style.display= 'none';
   pantalla2.style.display= 'block';
   pantalla3.style.display= 'none';
}



const buscador = async () => {
    let query = valor.value;
    switchPantallas('screen1','screen2','screen3');
    let url = `${base_url}${recurso}/${criterio}?api_key=${key}&query=${query}`; 
    pintar("cargando");
    // esperar a la api
    let pelis = await call(url);
    // esconder las pantallas del populares y latest

    

    pintar(pelis);
        
};
const buscadorPorID = async () => {
    let query = valorId.value;
    switchPantallas('screen1','screen2','screen3');
   let url = `${base_url}${criterio}/${query}?api_key=${key}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
        
};













































/*let valor = document.getElementById("buscador");

//Recursos API

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let recurso= "search";

let criterio = "movie";

let base_url = `http://api.themoviedb.org/3/${recurso}`;

url_title ='https://api.themoviedb.org/3/search/movie?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&query=name&page=20&include_adult=false'


const cambioDepantalla = (pantalla1 , pantalla2)=> {
    const uno = document.getElementById('screen1').style.display = 'none';
    const dos = document.getElementById('screen2').style.display = 'block';
   };
   
   cambioDepantalla;





const call = async (url) => {
   
    let res = await axios.get(url);
    
    
    if(!res.data.results){
        error = new Error("La url era incorrecta");
        return error;
    }
    
    return (res => {const pelis = res.data.results;
        console.log(pelis)});
    
}

const pintar = async (coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
   
    document.getElementById("screen2").innerHTML = `   
    <p class="titulo">${peli.title}</p>
       <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" class="misImagenes " '>`
    
    


    return;
}



const buscador = async () => {
    cambioDepantalla('screen1','screen2');
    let query = valor.value;

    //Construccion de la URL 
   
    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
    

    
};
*/
































