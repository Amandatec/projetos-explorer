const students = [
    {
      name: "Amanda",
      n1: 10,
      n2: 9,
    },
    {
      name: "Felipe",
      n1: 2,
      n2: 3,
    },
    {
      name: "Beatriz",
      n1: 4,
      n2: 4,
    }
  ];
  
  function result(student) {
    return `A média do(a) aluno(a) ${student.name} é de : ${(student.n1 + student.n2)/2}`
  }
  
  function verificarResultado(mediaAluno) {
    if (mediaAluno >= 6) {
      return "PARABÉNS, passou de ano!!";
    } else if(mediaAluno <= 3){
      return "IXI, deu ruim, repetiu.";
    } else {
      return `RECUPERAÇÃO, você terá mais uma chance!`
    }
  }
  
  for (let student of students) {
    let mediaAluno = (student.n1 + student.n2) / 2;
    let resultadoMessage = verificarResultado(mediaAluno);
    alert(`${result(student)}. ${resultadoMessage}.`);
  }