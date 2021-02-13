//Proyecto Replica Netflix

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&lang';

 const divPeliculasDomElement1 =document.getElementById('id1');
 const divPeliculasDomElement2 =document.getElementById('id2');
 const divPeliculasDomElement3 =document.getElementById('id3');
 const divPeliculasDomElement4 =document.getElementById('id4');
 const divPeliculasDomElement5 =document.getElementById('id5');
 const divPeliculasDomElement6 =document.getElementById('id6');
 const divPeliculasDomElement7 =document.getElementById('id7');
 const divPeliculasDomElement8 =document.getElementById('id8');
 const divPeliculasDomElement9 =document.getElementById('id9');
 const divPeliculasDomElement10 =document.getElementById('id10');
 const divPeliculasDomElement11 =document.getElementById('id11');
 const divPeliculasDomElement12 =document.getElementById('id12');
 const divPeliculasDomElement13 =document.getElementById('id13');
 const divPeliculasDomElement14 =document.getElementById('id14');
 const divPeliculasDomElement15 =document.getElementById('id15');
 const divPeliculasDomElement16 =document.getElementById('id16');


   const mostarImagenes = () =>{
    const obtenerJson = fetch(url).then(resultado => resultado.json());
    const obtenerImagen = obtenerJson.then(data => data.results['0'].backdrop_path).then(console.log);
   // const obtenerTitulo = obtenerJson.then(data => data.results['0'].title).then(console.log);
   obtenerJson.then(data => {
                       divPeliculasDomElement1.innerHTML =
                       `<img src="" class="imgPeliculas" width="12em" height="12em" >
                       <p class="titulo">${data.results['0'].title}</p>  `;
                       divPeliculasDomElement2.innerHTML =
                       `<img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo"> ${data.results['1'].title}</p>  `;
                       divPeliculasDomElement3.innerHTML =            `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['2'].title}</p>  `;
                       divPeliculasDomElement4.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['3'].title}</p>  `;
                       divPeliculasDomElement5.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['4'].title}</p>  `;
                       divPeliculasDomElement6.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['5'].title}</p>  `;
                       divPeliculasDomElement7.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['6'].title}</p>  `;
                       divPeliculasDomElement8.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo"> ${data.results['7'].title}</p>  `;
                       divPeliculasDomElement9.innerHTML =
                       `<img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo">${data.results['8'].title}</p>  `;
                       divPeliculasDomElement10.innerHTML =
                       `<img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo"> ${data.results['9'].title}</p>  `;
                       divPeliculasDomElement11.innerHTML =            `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['10'].title}</p>  `;
                       divPeliculasDomElement12.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['11'].title}</p>  `;
                       divPeliculasDomElement13.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['12'].title}</p>  `;
                       divPeliculasDomElement14.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['13'].title}</p>  `;
                       divPeliculasDomElement15.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="8em" height="8em" >
                       <p class="titulo" > ${data.results['14'].title}</p>  `;
                       divPeliculasDomElement16.innerHTML = 
                       `
                       <img src="" class="imgPeliculas" width="12em" height="12em" >
                       <p class="titulo"> ${data.results['15'].title}</p>  `;
                       }
                  )
    
    }
   // funcion apagar que no es mas que un F% en toda regla
     const apagar = () => {

        document.location.reload();
     }
     



  /*const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&lang'
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

*/