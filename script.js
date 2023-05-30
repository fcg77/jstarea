const repuesto = {

    id: 1010,
    nombre: "amortiguador",
    marca: "monroe",
    categoria: "tren delantero",
    auto: "corsa",
    año: 2016,
    cantidad: 16,
  
    añadir: function(){

        console.log(" Añadiendo al inventario de " + this.nombre)

    },

    eliminar: function(){

        
        alert("estoy eliminando de inventario")
    },
}

repuesto.añadir()
repuesto.eliminar()


const helado = {
    
    id: 12,
    sabor: "pistacho",
    categoria: "premium",
    cantidad: 10,
    ubicacion: "freezer2",
  
    consultar: function(){

        console.log("Cantidad disponible es " + this.cantidad +" litros de helado de " + this.sabor)

    },

    stockear: function(){

        alert("has solicitado mas helado de " + this.sabor + " extitosamente!")
    },
}

helado.consultar()
helado.stockear()


const pava = {
    
    id: 51,
    marca: "Yelmo",
    watts: 2300,
    cantidad: 20,
    temperatura: 96,
  
    calentar: function(){

        alert("la pava calentó a " + this.temperatura + " grados extitosamente!")
    },

    apagar: function(){

        console.log("la pava se ha apagado")

    },

}

pava.calentar()
pava.apagar()
