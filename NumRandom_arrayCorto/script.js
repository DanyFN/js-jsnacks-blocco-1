// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

//METODO 1

var arr = [1, 2, 3, 4, 5];
   var arr2 = [1, 2, 3, 3, 3, 3, 3, 3, 3];
   function checkArray(arr1, arr2) {
     //trovare l'array più corto
     //e aggiungere numeri casuali
     //fino a essere lungo come l'altro
     debugger;
     var lunghezzaArr1 = arr1.length;
     var lunghezzaArr2 = arr2.length;
     //console.log(lunghezzaArr1, lunghezzaArr2);
     if (lunghezzaArr1 < lunghezzaArr2) {
       arrayPiuCorto = arr1;
       arrayPiuLungo = arr2;
       console.log(arrayPiuCorto, arrayPiuLungo);
     } else if (lunghezzaArr1 > lunghezzaArr2){
       arrayPiuCorto = arr2;
       arrayPiuLungo = arr1;
     } else {
       console.log("array uguali");
     }
     var count = 0;
     var condition = !arrayPiuCorto.length == arrayPiuLungo.length;
     console.log(arrayPiuCorto);
     while (!(arrayPiuCorto.length >= arrayPiuLungo.length)) {
       arrayPiuCorto.push(Math.floor(Math.random()*10)+1);
       count++;
     }
     return arrayPiuCorto;
   }
   console.log( checkArray(arr, arr2) );


//METODO 2

var arr = [1, 2, 3];
var arr2 = [1, 2, 3, 3, 4];
console.log( Math.sign(arr.length, arr2.length) );
function checkArray(arr1, arr2) {
  //trovare l'array più corto
  //e aggiungere numeri casuali
  //fino a essere lungo come l'altro
  var lunghezzaArr1 = arr1.length;
  var lunghezzaArr2 = arr2.length;
  //console.log(lunghezzaArr1, lunghezzaArr2);
  var cicla = false;
  debugger;
  if (lunghezzaArr1 < lunghezzaArr2) {
    arrayPiuCorto = arr1;
    arrayPiuLungo = arr2;
    cicla = true;
  } else if (lunghezzaArr1 > lunghezzaArr2){
    arrayPiuCorto = arr2;
    arrayPiuLungo = arr1;
    cicla = true;
  } else {
    console.log("array uguali");
  }
  //se array uguali non cicla
  if (cicla) {
      var count = 0;
      while (!(arrayPiuCorto.length >= arrayPiuLungo.length)) {
        arrayPiuCorto.push(Math.floor(Math.random()*10)+1);
        count++;
      }
      return arrayPiuCorto;
  }
}
console.log( checkArray(arr, arr2) );
