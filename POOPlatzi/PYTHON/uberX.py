from car import Car
    
class UberX (Car):
    
    marca=str
    modelo=str
    
    def __init__(self, licencia, conductor, marca, modelo):
        super.__init__(licencia,conductor)
        self.marca=marca
        self.modelo=modelo
    
    