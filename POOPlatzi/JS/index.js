// ahiora si al momento de crear un objeto dentro de mi clase principal lo que ago primeramente la pabra VAR
//seguido de el nombre que le voy a dar a mi objeto, en este caso car= a la palabra recerbada new Car, osea 
//nuevo objeto de mi clase Car(le asigno el primer parametro qwue me exige el constructor ya creado en la clase Car, 
// seguido de mi segundo para metro que me exije el contructor, pero como ese parametro es del tipo account, entonces 
// lo invoco atravez del new Account, y simplemente ingreso los paramtros exigidos atravez de mi constructor de Acciunt.
var car= new Car ("QWERT", new Account("john velasco", 1061705546));
// aca simplemente atravez de mi objeto llamo el metodo de impresion de la informacion del carro.
car.printInfoCar ();

// ahora si para poder ejecutar en java Script no se puede dentro del lenguaje, si no que toca atravez de la web, por eso
// es necesario crear un archi HTML , em este caso ya lo tenemos creado (index.html), entonces para poder ejecutar
// simplemente abrto una ventana en el navegador, le doy control+O y el me abrir una ventana que me pide que que archivo
// deseo abrir entonces yo selecciono mi archivop index.html, entonces el me abre el archivo, y para poder abrir la consola
// me vopy a herrameintas de desarrolador y voy a la opcion conla, y ahi si mi archivo esta bien codificado, 
//entonces me aparecera lo que yo quise imprimir.
// ojo NOTA: dentro del archivo html debo importar atravez de un script  src:, mi clase index.js,Car.js y Account.js.