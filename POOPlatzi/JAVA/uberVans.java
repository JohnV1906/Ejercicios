import java.util.ArrayList;
import java.util.Map;



class uberVans extends Car{

        Map<String, Map<String,Integer>> tipoCarroAceptado;
        ArrayList<String> materialCojineria;
        



    public uberVans (Integer id, String licencia, Account conductor, String pasajero,
    Map<String, Map<String,Integer>> tipoCarroAceptado,ArrayList<String> materialCojineria){
        super(id, licencia,  conductor,  pasajero);
        this.tipoCarroAceptado=tipoCarroAceptado;
        this.materialCojineria=materialCojineria;

    }
    public uberVans (Integer id,String licencia, Account conductor,String pasajero) {
        super(id, licencia, conductor, pasajero);

    }
// aca esty sobreescribiendo un metosdo que viene heredado de la clase  Car, donde el numero de pasajeros
// es "4" y aca  es de "6", tener cuidado con el encapsulamientoi.
    @Override
    public void setPasajero(String pasajero) {
        if (pasajero == "6"){
            this.pasajero = pasajero;
        }else{
            System.out.println("cupos disponibles no valido");
        }
    }


}   

