const Text = () => {
    document.querySelector("#javascript").innerHTML = "esto es javascript";
    console.log("esto es javascript en consola");
}
Text();
//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicacion
console.log(8 * 6);

//Division
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);

console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 