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
console.log("resto",21 % 5);

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

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar();
  viajar('Argentina');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(20);
  esTipoDato("carlos");
  var cs = esTipoDato(3);
  console.log(cs);
  function esTipoDato(valor) {
    // La función recibe un argumento "valor".
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
    let dato = valor;
    if (dato === "carlos") {
        console.log("=>",dato);
        document.querySelector("#javascript1").innerHTML = dato;
      return  dato;
    }
    
  console.log("->",dato);
  
  }
  function esNumeroEntero(numero) {
    // La función recibe un argumento "numero".
    // Verifica si este es un número entero o no.
    // Returna true si lo es, de lo contrario, retorna false.
    // Tu código:
    let numero1 = numero;
    if (numero1 -4  ===0) {
        
        console.log("eee",true);

      return true; 
    } else {
        console.log("eee",false);
      return false;
    }
  }
  esNumeroEntero(4)
  function esFechaValida(fecha) {
    // La función recibe un argumento "fecha".
    // Comprueba si este corresponde a una fecha válida.
    // Si es así, retorna true, sino retorna false.
    // Tu código:
     let dato = new Date
    
    if ( fecha === dato.getFullYear  ) {
        console.log("es verdadera",fecha1);
      return true; 
    } else {
        console.log("es falsa",fecha1);
      return false;
    }
  }
  let fecha1 = new Date;
  
  esFechaValida(fecha1.getFullYear);
  function esMayorDeEdad(fechaNacimiento) {
    // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
    // de nacimiento de una persona.
    // Determina si esta persona es mayor de edad (tiene 18 años o más).
    // Devuelve true si lo es, caso contrario, retorna false.
    // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
    // Tu código:

    let dato = new Date
     let resta = dato.getFullYear() - fechaNacimiento;
    // console.log(resta);
    if ( dato.getFullYear() -fechaNacimiento   >= 18) {
        console.log("es verdadera", resta);
      return true; 
    } else {
        console.log("es falsa",);
      return false;
    }

  }
  esMayorDeEdad(2000);

  function sonIguales(x, y) {
    // La función recibe dos argumentos "x" e "y".
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
    if (x === 2 && y ===2) {
        console.log("x&y son iguales", true);
      return true;
    } else {
        console.log("x&y son distintas", false);
      return false;
    }
  }
  sonIguales(2,3);

  function tienenMismaLongitud(str1, str2) {
    // La función recibe dos argumentos "str1" e "str2" que son strings.
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    
       console.log("esto es i:",str1);
      if ( str1.length === str2.length ) {
        console.log("suma de c+i:", true);
        return true;
      } else {
        console.log("suma de c+i:", false);
        return false;
      }
      
      
    
  }
  tienenMismaLongitud("carlos", "zapata");
  function menosQueNoventa(num) {
    // Retorna true si el argumento "num" es menor que noventa.
    // De lo contrario, retorna false.
    // Tu código:
    if (num <=90) {
      console.log("es menor a 90 e igual a 90:", num, true );
      return true;
    } else {
      console.log("es mayor a 90:",num, false );
      return false;
    }
  
  }
  menosQueNoventa(91);
  function mayorQueCincuenta(num) {
    // Retorna true si el argumento "num" es mayor que cincuenta.
    // De lo contrario, retorna false.
    // Tu código:
    num = parseInt(prompt("ingrese valor"));

    let j = num;
        
  
    switch (j) {
        case 50:
          document.querySelector("#javascript2").innerHTML = num;
          console.log("num es 50");
        return true;        
        
          case 51:
            document.querySelector("#javascript2").innerHTML = num;
            console.log("num es 51");
            return true;
            
            case 49:
              document.querySelector("#javascript2").innerHTML = num;
            console.log("num es 49");
            return false;
            
       }

    
      
  }

  function esImpar(num) {
    // Retorna true si "num" es impar.
    // De lo contrario, retorna false.
    // Tu código:
    if (num %2 !==0) {
    console.log("es impar");
      return true;
    } else {
      console.log("es par");
      return false;
    }
  }
  esImpar(4)
  function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
switch (num) {
  case 1:
    console.log("es positivo");
    break;
    case -1:
      console.log("es negativo");
      break;
      case 0:
        console.log("es 0");
        return false;
  
  default:
    console.log("indefinido");
    break;
}

  }
esPositivo(0);

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let letras = letra;

  switch (letras) {
      case "a":
      console.log("es vocal ", letras);
      break;
      case "e":
      console.log("es vocal ", letras);
      break;
      case "i":
      console.log("es vocal ", letras);
      break;
      case "o":
      console.log("es vocal ", letras);
      break;
      case "u":
      console.log("es vocal ", letras);
      break;
  
    default:
      console.log("dato incorrecto");
      break;
  }

}
esVocal("jj")

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  let res= str+"!";
  console.log("res:",res);
  return res;

}agregarSimboloExclamacion("hello world");

function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  nombre = "carlos";
  apellido = "zapata";
  console.log(nombre+" "+apellido);
  return nombre+" "+apellido
} combinarNombres();
function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

  console.log("hola "+ nombre);
  
}
obtenerSaludo("carlos");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Tu código:
  let area = alto * ancho;
  console.log(area + " metros cuadradoa");
}obtenerAreaRectangulo(4,5);
function retornarPerimetro(lado) {
  // La función recibe como argumento la medida de un lado de un cuadrado.
  // Debes retornar su perímetro.
  // Tu código:
  let perimetro = lado * 4;
  console.log("el perimetro es "+ perimetro);
} retornarPerimetro(6);
function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:

  let areatriangulo = (base * altura)/2;
  console.log(areatriangulo);
  
}
areaDelTriangulo(9, 5);
function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  let cambio = euro * 1.20;
  console.log("euro cambio",cambio);
}deEuroAdolar(20);

function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  
   
  for (let i = 2; i < numero; i++) {
    let Nnp;
    if (numero % i === 0) {
      //console.log("no es primo",i);
       Nnp = false
    
    
    }
    else if (numero % i !== 0) {
      //console.log("es primo",i);    
    }
    if (Nnp === false) {
      console.log("no es primo");
    } else {
      console.log("es primo",);
    }
    
  }
  

}
esNumeroPrimo(103)
function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  let elevar2=  Math.pow(num,2);
  console.log(elevar2);
}
elevarAlCuadrado(5);
function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  let elevar3=  Math.pow(num,3);
  console.log(elevar3);
}
elevarAlCubo(3);

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  let exponente = Math.pow(num, exponent);
  console.log(exponente);
}elevar(3,4)
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:

  let redondear = Math.round(num);
  console.log(redondear);
}
redondearNumero(4.34);
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  let redondear = Math.round(num);
  console.log(redondear);
}redondearHaciaArriba(9.78);

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  let randon = Math.random(3);
  console.log("random es:",randon);
}numeroRandom();