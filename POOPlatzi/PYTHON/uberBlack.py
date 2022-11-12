from car import Car

class UberBlack(Car):
    
    tipoCarroAceptado=[]
    tipoCojineriaAcepatada=[]

    def __init__(self,licencia,conductor,tipoCarroAceptado,tipoCojineriaAceptada):

        super.__init__(licencia,conductor)
        self.tipoCarroAceptado=tipoCarroAceptado
        self.tipoCojineriaAcepada=tipoCojineriaAceptada
