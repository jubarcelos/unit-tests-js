/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('a')).toBeUndefined();
    expect(circle(isNaN)).toBeUndefined();
  });

  it ('Verifica se circle retorna um objeto.', () => {
    expect(typeof circle(1)).toEqual('object');
  });

  it ('Verifica se o objeto retornado tem 3 propriedades.', () => {
    expect(Object.keys(circle(3)).length).toBe(3);
  });

  it ('Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
  });

  it ('Verifica o retorno da função, dentro de um objeto, para circunferência de círculo de raio 2.', () => {
    expect(circle(2).circumference).toBeLessThanOrEqual(12.6);
  });

  it ('Verifica se a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.', () => {
    expect(circle(3).area).toBeLessThanOrEqual(28.3);
  });

  it ('Verifica se a função retorna, dentro de um objeto, os dados de um círculo de raio 3.', () => {
  expect(circle(3).circumference).toBeCloseTo(18.84);
  expect(circle(3).radius).toBeCloseTo(3);
  expect(circle(3).area).toBeCloseTo(28.26);
  });
});