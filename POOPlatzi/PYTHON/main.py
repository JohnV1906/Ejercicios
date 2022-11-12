## lo primero que ago en python es impor la clase de donde voy a llamar mi objeto, en este caso es linea dice:
## para Carro que es el nombre de mi archivo importar Carro
from car import Car
from account import Account
from uberX import UberX

if __name__ == "__main__":
    
   ## print("hola mundo")
    ##print("cabezon")
 ## auqi ya cree el objeto car, lo uncoi que se hace es declarar el nombre quye le voy a dar a mi objeto en este caso car
 ## seguido de = a la clase de donde proviene mi objeto en este caso CAR seguido de parentesis()   
##car = Car()  
##car.licencia="WEPRIU0897" 
##print("licencia: " + car.licencia)

##car1= Car()
##car1.conductor="shosue"
## esta funcion VARS lo que hace es imprimir toda la informacion de mi objeto, nonhay necesidad 
# en mi clase Car crear un metodo para ello.
##print(vars(car1))

##car2= Car()
##car2.licencia="QEORIU987"
##car2.pasajero="2"
##print(vars(car2))


    carro =Car("qertertqert",Account("john velasco",1061705546))
    print(vars(carro))
    print(vars(carro.conductor))
    
    
    
    ##carX= UberX("alskjd",Account("gorgojito","456123"),"ford","titanium")
    ##print(vars(carX))
    ##print(vars(carX.conductor))
    

