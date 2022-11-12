<?php
// esta es la forma de importar una clase en php, en este caso importe la clase Car.php
require_once('Car.php');
class  uberVans extends Car{
// la ventaja de php es que noi es fuertemente tipado como java, entonces nos ahorramos escrinir map, 
//arrayliost etc, solamente declaro el tipoo de visibilidad en este caso publi, y el nombre del atributop, 
//en este caso $tipoCarroAcepatado y etc.....
public $tipoCarroAceptado;
public $tipoCojineriaAceptada;

// esta la forma de declarar u constgreuctopr en php
public function __construct($licencia,$conductor,$tipoCarroAceptado,$tipoCojineriaAceptada){
// esta la forma de llamar el suoper en php, en este caso es parent::__contrict()
    parent::__construct($licencia,$conductor);

    $this->tipoCarroAceptado=$tipoCarroAceptado;
    $this->tipoCojineriaAceptada=$tipoCojineriaAceptada;

    }

public function setPasajero($pasajero){
    if($pasajero==6){
        $this->pasajero=$pasajero;
    }else{
        echo "necesitas asignar 6 pasajeros";
    
    }
    
    }



}


?>