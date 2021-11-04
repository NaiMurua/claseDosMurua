
//Pido datos de la 1° Consulta
let pidoTexto = prompt("Ingrese una palabra cualquiera : ");

if( pidoTexto == 'HOLA'){
		
	console.log("La palabra ingresada es :  " + pidoTexto);
    alert("HOLA!");
    console.log("FIN DE LA 1° CONSULTA");

} else{

    console.log("La palabra ingresada NO coincide con lo esperado!");
    console.log("FIN DE LA 1° CONSULTA");
}
//Pido datos de la 2° Consulta
let numeroMayor = parseInt(prompt("Ingrese un Numero : "));

if(numeroMayor >  1000){

alert("El numero Ingresado :  " + numeroMayor + "  --> es Mayor a Mil.");
console.log("FIN DE LA 2° CONSULTA");
} else{

    console.log("El Nro ingresado NO es Mayor a Mil!");
    console.log("FIN DE LA 2° CONSULTA");
}
//Pido datos de la 3° Consulta
let numeroDos = parseInt(prompt("Ingrese otro Numero : "));
    if(numeroDos >= 10 &&  numeroDos <=50){

        alert("El numero ingresado :  " + numeroDos + " --> se encuentra en el rango correcto de entre 10 y 50");
        console.log("FIN DE LA 3° CONSULTA");
        alert("Gracias por Utilizar el programa!!");
        console.log("FIN DEL PROGRAMA");
        }
        else{
        console.log("El Nro Ingresado NO se encuentra en el rango correcto de entre 10 y 50");
        console.log("FIN DE LA 3° CONSULTA");
        alert("Gracias por Utilizar el programa!!");
        console.log("FIN DEL PROGRAMA");
        }
//FIN DEL PROGRAMA