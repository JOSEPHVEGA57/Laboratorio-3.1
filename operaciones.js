// Paso 1: Declaración de Variables
let num1, num2;
let operacion;

// Paso 2: Función para realizar Operaciones
function realizarOperacion(num1, num2, operacion) {  // Inicialización de variables
    if (operacion === "suma") {   
        return num1 + num2;  // Condicional para Suma
    } 
    else if(operacion === "resta"){
        return num1 - num2;  // Condicional para Resta
    }
    else if(operacion === "multiplicacion"){
        return num1 * num2;  // Condicional para Multiplicación
    }
    else if(operacion === "division"){
        if (num2 === 0) { 
            return "Error: división por cero no permitida";
        }
        return num1 / num2;
    } 
    else{
        return "Operación no válida";
    }
}

// Bucle para Realizar Múltiples Operaciones
while(true){
    // Solicitar al usuario ingrese el primer número
    num1 = parseFloat(prompt("Ingrese el primer número (o escriba 'salir' para terminar)"));

    // Si la entrada no es un número o el usuario escribe 'salir', termina el bucle
    if (isNaN(num1)){
        console.log("Adiós.");
        break;
    }

    // Solicitar al usuario ingrese el segundo número
    num2 = parseFloat(prompt("Ingrese el segundo número"));

    // Si el segundo número no es válido, pide de nuevo
    if (isNaN(num2)){
        console.log("Por favor ingrese un número válido.");
        continue; // Regresa al inicio del bucle
    }

    // Solicitar al usuario que ingrese la operación
    operacion = prompt("Ingrese la operación (Suma, Resta, División, Multiplicación)");

    // Si el usuario ingresa 'salir', termina el bucle
    if(operacion.toLowerCase() === "salir"){
        console.log("Adiós.");
        break;
    }

    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    console.log(`Resultado: ${resultado}`);
}
