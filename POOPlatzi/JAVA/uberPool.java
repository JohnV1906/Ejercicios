public class uberPool extends Car {

String marca;
String modelo;


public uberPool(Integer id, String licencia, Account conductor, String pasajero, String marca,String modelo){

    super(id,licencia, conductor,pasajero);
    
    this.marca= marca;
    this.modelo= modelo;

}
}
