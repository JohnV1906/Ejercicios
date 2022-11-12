<?php

require_once('Car.php');
class  uberBlack extends Car{

public $tipoCarroAceptado;
public $tipoCojineriaAceptada;


public function __construct($licencia,$conductor,$tipoCarroAceptado,$tipoCojineriaAceptada){

parent::__construct($licencia,$conductor);

$this->tipoCarroAceptado=$tipoCarroAceptado;
$this->tipoCojineriaAceptada=$tipoCojineriaAceptada;




}


}
?>