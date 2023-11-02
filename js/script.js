console.log("PRIMERA ENTREGA JAVASCRIPT")

alert("Calculadora de compras en DOLARES o PESOS")

let pesos = 0;
let dolar = 0;

let dolarPrecio = 347.5 * 2;
let pesoPrecio = 2;

let iniciar = prompt("Desea iniciar el programa? (si o no)")

if(iniciar == "si"){
    let tipoPrecio = prompt("Indique el tipo de moneda que desea calcular (dolar o peso): ")
    let precio = parseFloat(prompt("Ingrese un precio:"))
    let end_or_not = prompt("Quiere ingresar otro precio:")

    function tipoMoneda(){
        if(tipoPrecio == "dolar"){
            precioConImpuestos = dolarPrecio * precio;
            dolar = dolar+=precioConImpuestos;
        }
        else if(tipoPrecio == "peso"){
            precioConImpuestos2 = precio * pesoPrecio;
            pesos = pesos+=precioConImpuestos2;
        }
    }
    tipoMoneda()
    
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
        alert("El monto es de" + " " + "$ " + (dolar+=pesos))
    }
    else if(end_or_not != "si"){
        alert("Gracias por usar nuestro programa")
        alert("El monto es de" + " " + "$ " + (dolar+=pesos))
    }
}
else if(iniciar != "si"){
    alert("Gracias por su visita")
}