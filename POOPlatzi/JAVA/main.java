class main {
    public static void main(String[] args) {
    


//System.out.println("hola mundo");  
//System.out.println("hola java quedaste instalado");

/*Car car=new Car();

car.licencia="ASDS56";
car.conductor="john velasco";
car.pasajero="4";
car.imprimirInfo();

Car car1 = new Car();
car1.licencia="EYT78";
car1.conductor="gago";
car1.pasajero="6";
car1.imprimirInfo();*/

    Car car2 = new Car(1,"123", new Account("carlos", "123456","adfadf@"),"4");
    car2.imprimirInfo();
    car2.imprimirInfo();

    uberX toreta=new uberX(1,"QEORI",new Account("jacky","123456789","sczx@"),
    "2","ford","diesel");

    

    toreta.imprimirInfo();
    toreta.setPasajero("cuatro");
    toreta.imprimirInfo();
    toreta.setPasajero("3");
    toreta.imprimirInfo();


    /*uberVans carroF= new uberVans(12,"PWOHIPE" , new Account
    ("daniela","123456789","jkhdskjf@"), "6");
    carroF.imprimirInfo();*/
    


    }

}
