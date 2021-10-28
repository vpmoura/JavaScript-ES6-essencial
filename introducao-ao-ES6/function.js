//Sem arrow
function arrowFn() {
  return "Code here";
}

//Com arrow
const arrowFn2 = () => {
  //Usa-se chaves para mais de uma expressão
  return "Code here";
};

//Funções também são objetos
arrowFn.prop = "Posso criar propriedades";
console.log(arrowFn.prop);

//Receber parâmetros
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());

logFnResult(arrowFn);

//Receber e retornar funções
const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(arrowFn);

handleFnExecution(true); //Executará a função arrowFn
handleFnExecution(); //Não executará a função
