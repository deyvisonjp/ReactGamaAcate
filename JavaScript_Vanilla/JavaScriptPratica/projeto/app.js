const livros = require('./fakeDatabase');
// Pegar input do usuário
const readline = require('readline-sync');

const [{nome, autor, categoria, paginas, recomenda, leu}] = livros;

const entradaInicial = readline.question('Deseja buscar um livro (S/N)?: ');
if (entradaInicial.toLocaleUpperCase() == 'S') {
  console.log('Essas são as categorias disponíveis: ')
  //console.log(livros.map(livro => `${livro.id}  -  ${livro.categoria}`))
  console.log('Fé ::', 'Programação de Computadores ::', 'História brasileira');
  
  const entradaCategoria = readline.question('Qual categoria voce escolhe? ')
  const retornoCategoria = livros.filter(livro => livro.categoria === entradaCategoria)
  console.log(entradaCategoria)
  console.table(retornoCategoria);

} else {
  const livrosOrdemPagina = livros.sort((a,b) => a.paginas - b.paginas);
  console.log("Livros na minha lista de leitura")
  console.table(livrosOrdemPagina);
}
