const user = {
  name: "Vinicius",
  lastName: "Moura",
};

//O objeto não muda, o que se muda é a sua referência
const getUserWithFullName = () => {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
};
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);
