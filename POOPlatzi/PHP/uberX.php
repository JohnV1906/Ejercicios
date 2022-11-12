<?php
require_once("Car.php");
class uberX extends Car {

    public $marca;
    public $modelo;

    public function __construct($licencia,$conductor,$marca,$modelo){
// esta es la forma de la sobregarga de metodos en php, con la palabra reservada parent::__construct()
    parent::__construct($licencia,$conductor);
    $this->marca= $marca;
    $this->modelo=$modelo;

    }   
    
}

?>