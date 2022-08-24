const alunasGama = ['Suzana', 'Giovana', 'Cibele']

//Acessar informções num array
//console.log(alunasGama[1] + " ... " +alunasGama[2]);

//Operador Spread
const alunasXp = [...alunasGama, "Simara"];

// Map: retorna um novo array sem alterar o array original
console.log ("--- Map ---")
alunasXp.map(aluna => console.log(aluna + " Map"))

//Filter: Retorna um novo array com os elementos filtrados
console.log ("--- Filter ---")
const numeros = [10, 12, 4, 15, 22, 17]
const numPares = numeros.filter(numero => numero%2 == 0)
console.log(`Pares ${numPares}`)

//Find
console.log ("--- Find ---")
const animes = ["Dragon Ball", "Naruto", "One Piece", "Demon Slayer"];
console.log(animes.find(anime => anime = "Dragon Ball"))

//Sort
console.log ("--- Sort ---")
const animesOrdem = animes.sort();
console.log(animesOrdem);
const decrescente = animes.sort((a,b) => b.localeCompare(a));
console.log(decrescente)

//Reduce - Reduz o array  a resultado de uma operação matemática
console.log ("--- Reduce ---")
const numberArrays = [5, 9, 8, 4, 5, 158];
const number = numberArrays.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
});

console.log(number);




