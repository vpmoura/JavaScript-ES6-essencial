const user = {
  name: "Vinicius",
  lastName: "Moura",
};

//Recuperando as chaves do objeto
console.log("Propriedades do objeto user:", Object.keys(user));

//Recuperando os valores das chaves do objeto
console.log("\nValores das propriedades do objeto user:", Object.values(user));

//Retorna um array de arrays contendo [ nome_group, valor_prop ]
console.log("\nLista de propriedades e valores:", Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, { fullName: "Vincius Moura" });

console.log("\nAdiciona a propriedade fullName no objeto user", user);

//A referência do objeto não é alterada, cria-se um novo objeto
console.log(
  "\nRetorna um novo objeto mergeando dois ou mais objetos",
  Object.assign({}, user, { age: 24 })
);
console.log(user);

//Previne todas as alterações em um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariável newObj após as alterações:", newObj);

//Permite apenas a alteração de propriedades existentes em um objeto, não permitindo delete ou add de propriedades
const person = { name: "Colega Cabelo" };
Object.seal(person);

person.name = "Vinicius Moura";
delete person.name;
person.age = 24;

console.log("\nVariável person após as alterações: ", person);
