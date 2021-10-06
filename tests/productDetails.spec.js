const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });
  it ('Verifica os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2)
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0] === productDetails('Alcool gel', 'Máscara')[1]).toBe(false);
  });
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect((productDetails('Alcool gel', 'Máscara')[0].details.productId).endsWith('123')).toEqual(true);
    expect((productDetails('Alcool gel', 'Máscara')[1].details.productId).endsWith('123')).toEqual(true);
  });
  });
