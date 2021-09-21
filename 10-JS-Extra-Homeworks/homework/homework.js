// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //var arr = [];                        <-- Opción Henry 
  //for (const clave in objeto) {        <-- Opción Henry   
  //  arr.push([clave, objeto[clave]]);  <-- Opción Henry
  arr = (Object.entries(objeto))
    //var arr = arr + (`["${property}", ${objeto[property]}]`); <-- Mi primera opcion
   return arr
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {}; // objeto vacio donde voy a colocar el par de valores 
  for (var i = 0; i < string.length; i++) { //for para iterar en el string
    if (!obj[string[i]]) { //si el valor del string NO esta en el el objeto
      obj[string[i]] = 1;  // agregamos el valor letra y le damos el valor 
    } else {
      obj[string[i]] = obj[string[i]] + 1; //si ya existe el valor le sumamos 1
      }
    }
    return obj // devolvemos el objeto
}  


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var s2 = s;
  var min = '', may = ''
  var sL = s.length;
  var i = 0;
  for (; i < sL; i++) {
      if (s.charAt(i) === s2.charAt(i).toUpperCase()) {
          var may = may + s.charAt(i);
      } else {var min = min + s.charAt(i);
    }
  } return(may + min);
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //var elemento = []; //reversed = []
  //function stringInvertido(str) {
        var elemento = str.split(' '); //separo la cadena con la frase en palabras
        let resultado = elemento.map((valor) => { //uso map para iterar entre los caracteres de cada palabra
              return valor.split('').reverse().join(''); //separo, invierto, y junto los caracteres de cada palabra
          }); 
    let reversed = resultado.join(' '); //uno cada palabra en una oracion, con un espacio entre ellas.
    return reversed;  //devuelvo la oracion
  }
 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    const a = numero.toString(); //convierto el numero en String y lo asigno a la variable "a"
    const aInv = a.split('').reverse().join(''); //separo, invierto y vuyelvo a unir al numero, ahora al reves
    if (a === aInv) {  //cheque si el numero dado y el invertido son iguales ===
      result = 'Es capicua'; //Devuelvo el valor para True (capicua)
    } else {
      result = 'No es capicua'; //Devuelvo el valor para Falso
    }
    return result;
  }
  
function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace(/[a-c]/gi,""); 
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){return a.length - b.length});
return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const filteredArray = arreglo1.filter(value => arreglo2.includes(value));
  return filteredArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

