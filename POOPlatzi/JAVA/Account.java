class Account{

    Integer id;
    String nombre;
    String documento;
    String password;
    String Email;

public Account ( String nombre, String documento,String Email){

    this.nombre=nombre;
    this.documento=documento;
    this.Email=Email;


}
public void  imprimirInfo (){

  System.out.println("id: "+ id + "\n" +  " nombre conductor: "+ nombre +  "\n" +  "TI"+ documento +
   "\n" + "password: "+ password + "\n" + "Correo:"+ Email);
}


} 