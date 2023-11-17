console.log("PRIMERA ENTREGA JAVASCRIPT")

alert("Calculadora de compras en DOLARES o PESOS")

const precios = [];

class Precio{
    constructor(pesos, dolar){
        this.pesos=pesos;
        this.dolar=dolar;
    }
}

const imp_Moneda ={
    impDolar: 347.5 * 2,
    impPeso: 2
}

let iniciar = prompt("Desea iniciar el programa? (si o no)")

if(iniciar == "si"){
    let tipoPrecio = prompt("Indique el tipo de moneda que desea calcular (dolar o peso): ")
    let precio = parseFloat(prompt("Ingrese un precio:"))
    let end_or_not = prompt("Quiere ingresar otro precio:")

    function tipoMoneda(){
        if(tipoPrecio == "dolar"){
            pesos = 0;
            precioConImpuestos = imp_Moneda.impDolar * precio;
            const nuevoPrecio = new Precio(pesos,precioConImpuestos);
            precios.push(nuevoPrecio);
        }
        else if(tipoPrecio == "peso"){
            precioConImpuestos2 = precio * imp_Moneda.impPeso;
            dolar = 0;
            const nuevoPrecio = new Precio(precioConImpuestos2,dolar);
            precios.push(nuevoPrecio);
        }
    }
    tipoMoneda()

    function tipoResult(){
        if(tipoPrecio === "dolar"){
            const sumDolar = precios.reduce((accumulator,task)=>{
                return accumulator + task.dolar
            },0)
            alert("El monto es de" + " " + "$ " + (sumDolar))
        }
        else if(tipoPrecio === "peso"){
            const sumPeso = precios.reduce((accumulator,task)=>{
                return accumulator + task.pesos
            },0)
            alert("El monto es de" + " " + "$ " + (sumPeso))
        }
    }


    if(end_or_not === "si"){
        while(tipoPrecio === "dolar"){
            precio = parseFloat(prompt("Ingrese un precio:"))
            end_or_not = prompt("Quiere ingresar otro precio:")
            tipoMoneda()
            if(end_or_not == "no"){
                break
            }
        }
        while(tipoPrecio === "peso"){
            precio = parseFloat(prompt("Ingrese un precio:"))
            end_or_not = prompt("Quiere ingresar otro precio:")
            tipoMoneda()
            if(end_or_not == "no"){
                break
            }
        }
        alert("Gracias por usar nuestro programa")
        tipoResult()
        console.log(precios)
    }
    else if(end_or_not != "si"){
        alert("Gracias por usar nuestro programa")
        tipoResult()
        console.log(precios)
    }
}
else if(iniciar != "si"){
    alert("Gracias por su visita")
}