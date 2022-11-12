<?php
// en esta clase principal lo que sde hizo feu importar cada una de las clase que se requieren para poder 
// ejecutar eol objeto, en este caso necesite 4 importaciones.
require_once("Car.php");
require_once("uberX.php");
require_once("uberPool.php");
require_once("Account.php");
require_once("uberVans.php");

// ene ste momento estoy creando un objeto de llamado uberX , y denro de los parametros creo uh objeto
// de la clase Account, y acasda uno de los objetos kle ingreso los parametros iniciados en los constructores
// respectivamente de cada clase.
$uberX= new uberX("APDKLJF", new Account("john velasco","12345689"),"Mazada","2022");
// aca atravez de mi objeto creado invoco el metodo printInfoCar();esto es graciuas al ala herencia
$uberX->printInfoCar();

// aca de igual manera  creo otro objeto pero esta vez de mi clase uberPool, y tendra la misma metodologia
$uberPool= new uberPool("AQLIUDF", new Account("lusciana velasco","987654321"),"ford","2021");
$uberPool->printInfoCar();

//NOTA: recordar que para poder ejecutar e php es directamente de la web, entonces en este caso doy click 
// derecho y elijo la opcion php server proyect y el automaticamentew me abre la ventana web y si el codigo
// esta bien codificado , tendra quye salir loq ue estamops imprimiendo.

$uberVans= new uberVans("cKAIZEN",new Account("german", "1231232312"),"jaguar","cuero");
$uberVans->setPasajero(6);
$uberVans->printInfoCar();



?>