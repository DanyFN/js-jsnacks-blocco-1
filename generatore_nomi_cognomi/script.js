// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

// METODO con Funzione

var nomi = ["simone","ivan","daniele", "carlo"];
var cognomi = ["rossi","bianchi","verdi","mercury"];
//console.log(nomi[0] + " " + cognomi[1]);
function randomPerson(arrNomi, arrCognomi) {
  var maxNomi = arrNomi.length;
  var maxCognomi = arrCognomi.length;
  var index1 = Math.floor(Math.random() * maxNomi);
  var index2 = Math.floor(Math.random() * maxCognomi);
  return arrNomi[index1] + " " + arrCognomi[index2];
}
var listaInvitatiCasuali = [];
var count = 0;
while (count < 15) {
  var invitatoCasuale = randomPerson(nomi, cognomi);
  //console.log(invitatoCasuale);
  if (!listaInvitatiCasuali.includes(invitatoCasuale)) {
    listaInvitatiCasuali.push(invitatoCasuale);
    count++;
  }
}
console.log(listaInvitatiCasuali);


//METODO senza Funzione

var arrayNomi = ['Ivan','Marco','Giacomo','Giorgia','Elisa','Beatrice'];
var arrayCognomi = ['Berlusconi','Sgarbi','Zedda','Rossi','Bianchi'];
var listaGatsby = [];
var lunghezzaArrayNomi = arrayNomi.length;
var lunghezzaArrayCognomi = arrayCognomi.length;
i = 0;
while (i < 5) {
  var nomiCasuali = Math.floor(Math.random() * lunghezzaArrayNomi);
  var cognomiCasuali = Math.floor(Math.random() * lunghezzaArrayCognomi);
  var persona = arrayNomi[nomiCasuali] + ' ' + arrayCognomi[cognomiCasuali];
  listaGatsby.push(persona);
  i++;
}
console.log(listaGatsby);
