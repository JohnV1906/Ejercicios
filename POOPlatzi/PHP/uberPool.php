<?php
require_once("Car.php");
class uberPool extends Car {

   public $marca;
   public $modelo;

   public function __construct($licencia,$conductor,$marca,$modelo){

   parent::__construct($licencia,$conductor);
   $this->marca=$marca;
   $this->modelo=$modelo;

   }
}
?>