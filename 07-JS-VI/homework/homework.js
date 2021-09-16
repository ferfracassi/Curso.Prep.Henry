// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //return nombre[0].toUpperCase() + nombre.slice(1); <-- Solucion by Henry!!
  nombre1 = (nombre.charAt(0)).toUpperCase();
  return (nombre.replace(nombre.charAt(0), nombre1)); 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  //cb(); <-- Solucion by Henry!!
  //}
  usuario = cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  //return cb (n1+n2); <-- Solucion by Henry!!
cb (n1+n2); 
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  /*var sumatoria = numeros.reduce(function (sum, n) { <-- Solucion by Henry!!
    return sum + n; 
  })
    cb(sumatoria);
  }               <-- Solucion by Henry!!
  //Tu código: */
var suma = 0
  for (i=0; i<numeros.length; i++)
  suma = (suma + numeros[i]);
  cb (suma)
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /*array.forEach(function (valor) { <-- Solucion by Henry!!
    cb(valor);
  })
}                                   <-- Solucion by Henry!!*/
  for (i=0; i<array.length; i++) {
    cb (array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
    // var array = [1,2,3,4,5]
  // function cb (e) {console.log(e)}
  // nuevoarray = []
  // var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  //   nuevoArray[i] = cb(array[i]);
  // }
  var newArray = array.map(function(ele) {
    return cb(ele);
});
return newArray;
}
/*var newArray = array.map(function(ele) { <-- Solucion by Henry!!
  return cb(ele);
});
return newArray;
}) <-- Solucion by Henry!! 
*/

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var letra = 'a' , array1 = [] 
   array.forEach(function(elemento, indice, map) {
      if (letra === elemento.charAt(0)) 
        array1.push(elemento);
    })
  return(array1)
}

/*  return array.filter(function(elemento) {    <-- Solucion by Henry!!
    return elemento[0] === "a";
  })
}   <-- Solucion by Henry!! */

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
