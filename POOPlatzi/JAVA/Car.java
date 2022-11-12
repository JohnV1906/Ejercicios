class Car{

    private Integer id;
    private  String licencia;
    private Account conductor;
    // este lo deje privado porque no quiero que nadie modifique ese atributo, en este caso es por 
    // la logica de negocio ya que en un uberX lo logico que debe de decri es que son 4 cupos disponibles.
    protected String pasajero;


public Car(Integer id, String licencia, Account conductor, String pasajero){

    this.id=id;
    this.licencia=licencia;
    this.conductor=conductor;
    this.pasajero=pasajero;

}

public String getPasajero(){
    return pasajero;
}

public void setPasajero(String pasajero){

    if (pasajero == "4"){
        this.pasajero=pasajero;
    }else{
        System.out.println("cupos disponibles no valido");
    }
}
  
public Integer getId() {
    return id;
}

public void setId(Integer id) {
    this.id = id;
}

public String getLicencia() {
    return licencia;
}

public void setLicencia(String licencia) {
    this.licencia = licencia;
}

public Account getConductor() {
    return conductor;
}

public void setConductor(Account conductor) {
    this.conductor = conductor;
}

public void imprimirInfo(){

    System.out.println("id: " + id +"\n "+ "licencia: " + licencia + "\n"+ "Conductor: " +  conductor.nombre +
     "\n" +"documento: "+ conductor.documento+ "\n" +"correo"+ conductor.Email +"\n" + "#Pasajeros: "+ pasajero
      + "\n"+"------------------------------------");

}

}
