const students = [
  {
    name: "Grace",
    grade: 7,
  },
  {
    name: "Jennifer",
    grade: 4,
  },
  {
    name: "Paul",
    grade: 10,
  },
];

const getApprovedStudents = (studentsList) => {
  return studentsList.filter((student) => student.grade >= 7);
};

//A imutabilidade do array se mantém
console.log("Alunos aprovados:");
console.log(getApprovedStudents(students));
console.log("Lista de alunos:");
console.log(students);
