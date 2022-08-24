const pessoa = {
  nome: "Deyvison",
  idade: "34",
  estado: "Minas Gerais"
}

//Notação de ponto
console.log(pessoa.nome);

//Notação de colchetes
console.log(pessoa['idade']);

// Desusutruturando Objetos
const {nome, idade, estado} = pessoa;

console.log(`Nome: ${nome} - Idade: ${idade} - Estado: ${estado}`);

//2º Parte
const filmes = [
  {
    id: 1,
    titulo: "Dilema das Redes",
    descricao: "Um documentário sobre tecnologia",
    duracao: 120
  },
  {
    id: 2,
    titulo: "Green Book",
    descricao: "Um brilhante pianista desafiando uma cultura racista",
    duracao: 200
  },
  {
    id: 3,
    titulo: "Star Wars",
    descricao: "Uma disputa política entre um império tirano e ditatorial e um grupo libertário.",
    duracao: 240
  },
  {
    id: 4,
    titulo: "Corra",
    descricao: "Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Com o tempo, ele percebe que a família dela esconde algo muito perturbador.",
    duracao: 120
  },
]

const [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao));