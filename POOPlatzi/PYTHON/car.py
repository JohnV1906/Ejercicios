
from account import Account

class Car:
    
    id       =int
    licencia =str
    conductor =Account("","")
    pasajero   =str
    
    
    def __init__(self, licencia, conductor):
     
     self.licencia    = licencia
     self.conductor   = conductor
     