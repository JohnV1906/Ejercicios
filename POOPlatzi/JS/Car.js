// ahora para declarar objetos en js es mas sencillo, ya que en cada una de mis clases voy a asignar mis
// variable slocales, entonces


// dentro de mi funcion Car en los parametros que me recibe , simplemenete le indico las variables que deseo implementar
// ene ste caso licencia y conductor
function Car (licencia,conductor){

    this.id;  
    // dentro de las variables declraradas yo simplemente reasigno como en java, en este caso this.licencia= licencia     
    this.licencia=licencia;
    this.conductor=conductor; 
    this.pasajero;
    
    // para el tema de mi metodo que me va imprimir la informacion, lo declaro de la siguiente manera
    // primero el nombre de mi clase en este caso Car.el metodo protopype y le doy el nombre ami funcion en este
    // caso printInfoCar que sera igual  ,m,i funcion que no recibe parametros  pero que dentro de sus acciones lo que hace
    //es atravez del metodo console.long y mne recibe cada uno de los parametros que deseo que se impriman en consola.
    Car.prototype.printInfoCar= function(){

        console.log(this.conductor)
        // este conductor.nombre esta asi porque lo voy a poner que es de la clase account, entonces ala lo reasigno.
        console.log(this.conductor.nombre)
        console.log(this.conductor.documento)
        console.log(this.licencia)
        console.log(this.marca)
        console.log(this.modelo)
    }

}