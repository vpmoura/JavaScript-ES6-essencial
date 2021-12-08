/*Spread, Adiciona elementos de um array para dentro de outro array ou argumento de função, usando a sintaxe dos três pontos (...) seguido pelo nome
da variável (...var)
*/

var partes = ["ombro", "joelhos"];
var musica = ["cabeca", ...partes, "e", "pés"];
console.log(musica);

function fn(x, y, z) {
  return x + y + z;
}
var args = [0, 1, 2];
console.log(fn(...args));
