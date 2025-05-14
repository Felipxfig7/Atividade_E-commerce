 //Em um array, a contagem para chamar um nome inicia-se em 0 e vai assim por diante
 const frutas = ['Maçã', 'Uva', 'Laranja']

 console.log(frutas[0])

 //adiciona um item ao array
 frutas.push('Banana');
 console.log(frutas)

//Remove o último item
frutas.pop();
console.log(frutas)

//Confere o tamanho do array
let numeros = [10, 20, 30, 40];
console.log(numeros.length); //4

//filtra em condições
let nomes = ['ana', 'Beatriz', 'João', 'Carlos'];
let nomeFiltrado = nomes.filter(nome => nome == 'João');
console.log(nomeFiltrado);

let cores = ['Azul', 'Amarelo', 'Vermelho'];
cores.forEach(cor => {
    console.log('Cor: ', cor);
});
