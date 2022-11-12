from car import Car

class UberVans(Car):

    tipoCarroAceptado=[]
    tipoCojineriaAceptada=[]
    
    def __init__(self,licencia,conductor,tipoCarroAceptado,tipoCojineriaAceptada):
        super.__init__(licencia,conductor)
        self.tipoCarroAceptado=tipoCarroAceptado
        self.tipoCojineriaAceptada= tipoCojineriaAceptada

        
    