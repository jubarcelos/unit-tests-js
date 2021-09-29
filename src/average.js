/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// function sum(array){
//   let total = 0;
//   for (let index in array) {
//     total += array[index];
//   }
// }
// if (Number.isNaN(array)) {
//   const total = sum(array);
//   const mean = total/(array.length);
//   return Math.round(mean);

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  if (array.every((num) => typeof (num) === 'number')) {
    const sum = array.reduce((t, n) => n + t, 0);
    const meanRound = Math.round(sum / array.length);
    return meanRound;
  } 
};

module.exports = average;
