<?php
require_once("Account.php");
class Car{
    public $id;       
    public $licencia;
    public $conductor; 
    protected $pasajero; 
  
    // esta es la manera de declarar el constructor en php.
public function __construct($licencia,$conductor){

    $this->licencia=$licencia;
    $this->conductor=$conductor;


    }
// esta esla manera de declarar un metodo en funcion en php
public function printInfoCar(){
// este ECHO  es el comando para imprimir, no hay ndecesidad del igual, solo comienzo a declara la impresion
// como se ve acontinuacion.

    echo "conductor:". $this->conductor->nombre."<br>"."licencia:".$this->licencia."<br>"."documento: "
    .$this->conductor->documento."<br>";
    }




public function getPasajero(){
    return  $this->pasajero;
}

public function setPasajero($pasajero){
    if($pasajero==4){
        $this->pasajero=$pasajero;
    }else{
        echo "necesitas asignar 4 pasajeros";

    }

}
}
?>s