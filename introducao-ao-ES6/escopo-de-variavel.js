//Com var
var test = "example";

(() => {
  console.log(`Valor dentro da função ${test}`);

  if (true) {
    var test = "example";
    console.log(`Valor dentro do if "${test}"`);
  }
  console.log(`Valor após a execução do if "${test}"`);
})();

//Let e const possuem o mesmo comportamento de escopo
(() => {
  let test2 = "valor função";
  console.log(`Valor dentro da função "${test2}"`);

  if (true) {
    let test2 = "example";
    console.log(`Valor dentro do if "${test2}"`);
  }
  console.log(`Valor após a execução do if "${test2}"`);
})();
