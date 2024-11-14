//Isso é um comentário
/**
 * Isso também é um comentário
 */

import { console } from "inspector";

//tipos de dados

let valor = 1; // number ou numério (inteiros)
let valorBooleano = false; // boolean ou booleano (falso ou verdadeiro)
let valorTexto = string = "Olá Pessoal"; // string ou cadeia de caracteres
let valorIndefinido = undefined; // Undefined ou indefinido, assume qualquer tipo
let valorNulo = null; // tipo Nulo

const outroValor = 0;

console.log("Mensagem no terminal");
console.log("teste");

//palavras reservadas - são palavras que não podem ser utilizadas para ser nome de funções, variáveis, constantes etc...

if (1) {
} else {
  console.log("");
}

while (0) {}

do {} while (0);
{
}

for (let index = 0; index < 10; index ++){
  console.log(index);
}

const chave = 10;

switch (chave) {
  case 10:
    console.log("Chave 10");
    break
  default:
    console.log("Chave Inválida");
    break
}

function teste(valor: number) {
  return "";
}

// let novoValor: number;
let novoValor = 5 + 3;
// novoValor = "5";
novoValor = 5;
console.log();

// number
// Inteiros, double, float, números com casas decimais
//
