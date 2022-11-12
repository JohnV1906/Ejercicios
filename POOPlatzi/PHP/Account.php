<?php
class Account {
// aca basicamente declaro mis atributos, no es necesario el igual=integer etc, solamente con public $id;
//es suficiente, php por defecto identifica el tipo de dato 
   public $id;      
   public $nombre;  
   public $documento;  
   public $password;
   public $Email;  

public function __construct($nombre,$documento){

   $this->nombre= $nombre;
   $this->documento=$documento;

   }

} 
?>







