from car import Car
    
class UberPool(Car):
    
    marca=str
    modelo=str
    
    def __init__(self, licencia, conductor, marca, modelo):
        super.__initi__(licencia,conductor)
        self.marca=marca
        self.modelo=modelo