import java.util.ArrayList;
import java.util.Map;

class uberBlack extends Car{
// entonces de claro mis atributos de este carro en especial, entonces el tipo de dato que voy a utilizar
// es Map y dentro de MayorMenor va el tipo de dato que se va a recibir en este caso String que va a 
// a representar la marca(String="Marca"), y el siguiente Map dentro de mayorMenor  ira el tipo de dato 
//que recibira en este caso <String, Integer> esta parte me representa el modelo que se requeriran dos datos
// por eso ese Map recibe dos datos, seguido del nombre del atributo en este caso tipoCarroAceptado.
    Map<String, Map<String,Integer>> tipoCarroAceptado;
    //aca basicamente es lo mismo , es un atributo de tipo Arraylist que recibira un tipo de dato <String>
    // y el nombre del atributo sera materialCojineria.
    ArrayList<String> materialCojineria;

// en el primer cionstructor estan las variables del constreuctor que ha sido heredadro mas los atributos 
// declarados dentro de la clase hija.
    public uberBlack(Integer id, String licencia, Account conductor, String pasajero,
     Map<String, Map<String,Integer>> tipoCarroAceptado,ArrayList<String> materialCojineria){
        super(id, licencia,  conductor,  pasajero);
        this.tipoCarroAceptado=tipoCarroAceptado;
        this.materialCojineria=materialCojineria;

}

















}