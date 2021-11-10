const users = ["Vinicius", "Irineu", "Tiringa"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W"),
};

const persons = [
  {
    name: "Vinicius",
    age: 26,
    gender: gender.MAN,
  },
  {
    name: "Irineu",
    age: 18,
    gender: gender.MAN,
  },
  {
    name: "Jennifer",
    age: 43,
    gender: gender.WOMAN,
  },
];

//Retornar a quantidade de itens de um array
console.log("Items:", persons.length);

//Verificar se é array
console.log("A variável persons é um array:", Array.isArray(persons));

//Iterar itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
});
