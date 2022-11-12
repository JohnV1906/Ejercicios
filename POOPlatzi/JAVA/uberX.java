public class uberX extends Car {

String marca;
String modelo;

// aca en el contructor de esta calase le inserto los atributos de la clase padre y adiciono los de la clase
//propia, en este caso marca y modelo
public uberX(Integer id, String licencia, Account conductor, String pasajero, String marca,String modelo){
// aca en la sobrecarga de contrucctores  con la palabra super traigo(llamo) tambei los atributos sin necesidad
// del tipo de dato.
    super(id,licencia, conductor,pasajero);
    
    this.marca= marca;
    this.modelo= modelo;

// en conclusion la palabra super hara referencia los atributos y metodo de la calse padre o super clase
// y this hace referencia a los atributos y metodos de la clase hija ose la clase que recibe la herencia.
}

@Override
public void imprimirInfo() {
    super.imprimirInfo();
    System.out.println("Marca:"+ marca+ "Modelo:"+ modelo);
}

}
   
