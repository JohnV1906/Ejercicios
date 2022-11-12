let estudiantes =["junior","any","majo","lucas"];

function saludarEstudiantes(estudiante){

    console.log(`Hola,${estudiantes}`);
}
//mientras  lo que recibe como parametro () sea verdad entonces lo que esta en llaves{} se ejecutar

// entonces ientras la longitud de estudiantes sea mayor a cero se ejecutara el ciclo
while(estudiantes.length > 0){
    // este loop lo que hace crear una varibale estudiante  que sera igual a nuestyro arreglo estudiantes.shif
    // que  es un metodo de mutacion, y lo que hace es como extraer cada uno de los elementos de mi arreglo
    let estudiante=estudiantes.shift();
    // y se llamara la funcion 
    saludarEstudiantes(estudiante);
}