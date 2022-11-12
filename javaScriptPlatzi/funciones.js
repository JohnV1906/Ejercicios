// hay dos tipode funcion 
// las declarativas son iguales que en java lo metodos 

function miFuncion(){

    return 3;

}
miFuncion();

// funciones de expresion o anonimas, estas funcion tien dentro de elklas otra funcion
miFuncion()=function(a,b){

    return a+b;
}

miFuncion();
