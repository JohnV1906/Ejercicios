// en esta clase vamopa ver dos metoso que me permiten fiktrar y mapera ,pero ya no styrings, 
//numeros, etc, sino objetis.
// entnces inicialmenet creo my array  la cual la llamo articulos
let articulos=[
    //las llaves me simbolizan un objeto, declaro cada uno de mis objetos
    {nombre: "toreta" , costo: 3000 },
    {nombre: "tv" , costo: 4000 },
    {nombre: "nevera" , costo: 7000 },
    {nombre: "cell" , costo: 16000 },
    {nombre: "xbox" , costo: 14000 },
    // cierrro mmi array
];
// ahora si voy a crear un metodo que me permita  filtarra algunos datos que le voy a especificar 
// y que me cree un nuevo arreglo, sin tocar mi arrglo.
// entonces decalro mi metodo articuloFiltrados  que ser aigua a mi primer array(articulos)(.)y 
// y llamo el metodo filter(filtrado) que me recibe un parametro, dentro de ese parametro que me recibe
// filter lo que voy a hacer es crear una funcion que tambien me recibe un parametro en este caso el 
// singular de mi array principla (articulo) y dentro de las instrucciones que deseop que se me ejecuten 
//dentro de mi funcion.
let articulosFiltrados= articulos.filter(function(articulo){
// le digo que me retorne  el atributo costo de mis articulos menores o iguales a 25000
    return articulo.costo <= 25000
});
// aca es el metodo map, que lo que me permite es mapear recorrer  y traerme a consola todos, en este caso
// nombre que estan dentro de cada uno de mis objetos.
let nombreArticulos =articulos.map(function(articulo){

    return articulo.nombre
});

// este metodo FIND  me permite buscar un articulo en particula
let encuentraArticulo=articulos.find(function(articulo){
// en este caso me permitara encontrar el areticulo nevera
    return articulo.nombre === "nevera"
// recordar que lo que me da resukltado es un nuevo array
});


// esto ya no es array, basicamente con el forEach  y dentro de ese parametro que me recibe
// creo una funcion que me traiga solo los nombres de my arreglo, sin el precio.
articulos.forEach(function(articulo){
// entonces la momento de imprimir me traera solo los nombres de mi objetos, sin los precios.
    console.log(articulo.nombre);

});

// este metodo me a devolver  un booleano true o false, entonces al momento de ejecutar este metodo
// y darle mis indicaciones..
let articulosBaratos=articulos.some(function(articulo){
/// que busque si hay articulo menores o iguales al precio de 10000, entonces el realiza la funcio
// y si encuentra  que si hay articulos de esa caracteristica , returnara true verdadero, de lo contrario
// retornara falso.
    return articulo.costo <= 10000
// y como es un metodo me genera un nuevo arreglo.
});