// PRIMERA OPCION DEL FOR

let estudiantes =["john","dany","lusciana","gago","lila"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola,${estudiantes}`);

}
/*for(let i=0; i< estudiantes.length; i++){

    saludarEstudiantes(estudiantes[i]);

}*/

// esta es la segunda fornma de declarar otro for , basicamente  dentro del for  declaramos una varibale
//estudiante OF estudiante, ose vamos a llamar estudiantes del arreglo estudiantes

 for (let estudiante of estudiantes){
// aca simplemente volvemos a llamr mi funcion  y le ingreso el parametro (estudiante)
    saludarEstudiantes (estudiante);
}
// en el momento de imprimir en la web, me imprime lo mismo que la forma del primer for.



// basicamente el primer for es inicializa r una variable i que va a iterar hasta la lingitu de mi arreglo
// y la segunda es cuando  declaro una variable en singular (estudiante) de mi arreglo(estudiantes), 
