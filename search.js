
let buscar = document.getElementById("search");



let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let recurso= "search";

let criterio = "movie";

let base_url = `http://api.themoviedb.org/3/${recurso}`;

const call = async (url) => {
    let res = await axios.get(url);
    
    if(!res.data.results){
        error = new Error("La url no es incorrecta");
        alert(' la url no es incorrecta')
        return error;
        
    }
    
    return res.data.results;
}

const render = async (coleccion) => {
   

}



const search = async () => {
    let query = buscar.value;

    //Construccion de la URL 
    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`; 
    render("cargando");
    let movies = await call(url);


    render(movies);
    

    
};
