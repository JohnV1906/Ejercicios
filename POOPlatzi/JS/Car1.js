class Car1{

    constructor(id,licencia,conductor, pasajero){

        this.id= id;       
        this.licencia=licencia;
        this.conductor=conductor; 
        this.pasajero= pasajero;

    }

    printInfoCar() {

        /*console.log("ID:"+ this.id);
        //console.log("licancia: " + this.licencia);
        console.log("nombre: " +this.conductor.nombre);
        console.log("identificacion: " +this.conductor.documento);
        console.log("# pasajeros : " +this.pasajero);
        console.log("marca vehiculo: " +this.marca);
        console.log("modelo vehiculo: " +this.modelo);*/

        console.log("ID:"+ this.id+ "\n" + "licancia: " + this.licencia + "\n" + "nombre: " +this.conductor.nombre
        +"\n" + "identificacion: " +this.conductor.documento + "\n" + "# pasajeros : " +this.pasajero + 
        "\n" + "marca vehiculo: " +this.marca +"\n" + "modelo vehiculo: " + this.modelo+"\n"
        +"--------------------------------------------------" );
    }
    

}