
class Account:
    
   id         =int
   nombre     =str
   documento  =str
   password   =str
   Email      =str
   
   
   def __init__(self , nombre,documento):
      
      self.nombre    =nombre
      self.documento  =documento
   