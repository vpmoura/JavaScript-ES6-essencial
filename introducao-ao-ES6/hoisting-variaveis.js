//com variável
const fn = () => {
  console.log(text);

  var text = "Exemplo";

  console.log(text);
};
fn();

//com função
const fn2 = () => {
  log('Hoisting de função');

  function log(value) {
    console.log(value);
  }
};
fn2();
