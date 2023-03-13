// Écrire un programme qui prend en entrée un chiffre romain sous forme de chaîne de caractères et qui renvoie
//en sortie le chiffre arabe correspondant. Le chiffre romain sera composé des symboles I, V, X, L, C, D et M représentant respectivement les valeurs 1, 5, 10, 50, 100, 500 et 1000. La valeur maximale à convertir est 3999. Si le chiffre romain est mal formé, le programme devrait renvoyer une erreur.

var input_roman = process.argv[2];

const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

function getArabeValue(input) {
  var input_arabe = 0;
  for (var i = 0; i < input.length; i++) {
    // Traitement des Cas spéciaux
    if (input[i] === "I" && input[i + 1] === "V") {
      input_arabe = input_arabe + V - I;
      i++;
    } else if (input[i] === "I" && input[i + 1] === "X") {
      input_arabe = input_arabe + X - I;
      i++;
    } else if (input[i] === "X" && input[i + 1] === "L") {
      input_arabe = input_arabe + L - X;
      i++;
    } else if (input[i] === "X" && input[i + 1] === "C") {
      input_arabe = input_arabe + C - X;
      i++;
    } else if (input[i] === "C" && input[i + 1] === "D") {
      input_arabe = input_arabe + D - C;
      i++;
    } else if (input[i] === "C" && input[i + 1] === "M") {
      input_arabe = input_arabe + M - C;
      i++;
    } else if (input[i] == "I") input_arabe = input_arabe + I;
    else if (input[i] === "V") input_arabe = input_arabe + V;
    else if (input[i] === "X") input_arabe = input_arabe + X;
    else if (input[i] === "L") input_arabe = input_arabe + L;
    else if (input[i] === "C") input_arabe = input_arabe + C;
    else if (input[i] === "D") input_arabe = input_arabe + D;
    else if (input[i] === "M") input_arabe = input_arabe + M;
    else {
      console.log("Vous avez entré un chiffre qui n'existe pas ");
    }
  }
  return input_arabe;
}

if (getArabeValue(input_roman) > 3999) {
  console.log("Vous avez depassé la limite");
} else {
  console.log("Le nombre arabe est : " + getArabeValue(input_roman));
}
