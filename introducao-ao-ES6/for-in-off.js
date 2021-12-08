let arr = [3, 5, 7];
arr.foo = "hello";

//for in verifica cada item e propriedades da variável arr
for (let i in arr) {
  console.log(i);
}

//for of verifica o valor dos itens da variável arr, excluindo demais propriedades
for (let i of arr) {
  console.log(i);
}
