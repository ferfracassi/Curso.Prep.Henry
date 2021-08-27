// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "null";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 125;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var str = "Henry";
  return str;
  }

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
      var sumados = x + y;
   return (sumados);
  }
  suma ( 6, 4 );



function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restados = x - y;
  return (restados);
 }
resta ( 6, 4 );


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multi = x * y;
  return (multi);
 }
 multiplica ( 6, 4 );

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divi = x / y;
  return (divi);
 }
 divide ( 6, 3 );  


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  }

return false;
}

sonIguales( 15,16 );

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  }

return false;

}

tienenMismaLongitud("gato", "perro")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }

return false;
}

menosQueNoventa( 75 );

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  }
    return false;
}
mayorQueCincuenta(61)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return ( x % y )
}

obtenerResto(5,2);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num%2) === 0) {
    return true;
  }
    return false;
}

esPar(4);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num%2) === 0) {
    return false
  }
  return true
}

esImpar(5)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  num = num ** 2;
  return (num)
}

elevarAlCuadrado(3)


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  num = num ** 3;
  return (num)
}

elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  num = num ** exponent;
  return (num);
}

elevar(2,8)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  num = Math.round(num);
  return (num);
}

redondearNumero(7.56)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  num = Math.ceil(num);
  return (num);
}
redondearHaciaArriba(8.02)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  num = Math.random();
  return (num);
}
numeroRandom()

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
 
  if (Math.sign(numero) === 0) {
    return false;
  }
    if (Math.sign(numero) === 1) {
    return "Es positivo";
  }
      if (Math.sign(numero) === -1) {
      return "Es negativo";
  }
}

esPositivo(5)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
str = str +  "!";
return (str);
}

agregarSimboloExclamacion("hello world")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  str = nombre + " " + apellido;
  return (str)
}
combinarNombres("Soy", "Henry")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  str = "Hola" + " " + nombre + "!";
  return (str);
}
obtenerSaludo("Martin")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  AreaRectangulo = alto * ancho;
  return AreaRectangulo
}
obtenerAreaRectangulo(10, 20) 

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  PerimetroCuadrado = lado * 4;
  return PerimetroCuadrado
}
retornarPerimetro(20)

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  AreaTriangulo = (base * altura) / 2;
  return AreaTriangulo;
}
areaDelTriangulo(15, 20)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  dolares = euro * 1.20;
  return dolares
}
deEuroAdolar(10)

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

if (letra.length > 1) {
  return ("Dato incorrecto");
} else if (letra === 'a') {
     return("Es vocal"); 
      } else if (letra === 'e') {
        return("Es vocal"); 
      } else if (letra === 'i') {
        return("Es vocal"); 
      } else if (letra === 'o') {
        return("Es vocal"); 
      } else if (letra === 'u') {
        return("Es vocal"); 
      } else {
        return("Dato incorrecto"); 
      }
    }
//Es la solución menos elegante de todas las que probe, creí que con el comparador 
//lógico OR ||, se podia solucionar facil, pero no pude. Guarde en un archivo de texto, algunas opciones
//mas logicas, según mi punto de vista.


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
