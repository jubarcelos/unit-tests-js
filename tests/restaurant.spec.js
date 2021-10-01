const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  // test 1
  it('Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função', () => {
    const emptyRestaurant = createMenu();
    expect(emptyRestaurant).toHaveProperty('fetchMenu');
  });
  // test 2
  it('Verifique se `otherRestaurant.fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    const myMenu = { food: {}, drink: {} };
    const otherRestaurant = createMenu(myMenu);
    expect(otherRestaurant.fetchMenu()).toHaveProperty('food');
    expect(otherRestaurant.fetchMenu()).toHaveProperty('drink');
  });
  // test 3
  it('Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função `otherRestaurant.fetchMenu`', () => {
    const myMenu = { food: {}, drink: {} };
    const otherRestaurant = createMenu(myMenu);
    expect(otherRestaurant.fetchMenu()).toStrictEqual(myMenu)
  });
  // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.

  // TESTE 4: 
  it('Verifique se `otherRestaurant.consumption`, após a criação do menu, retorna um array vazio.', () => {
    const myMenu = { food: {}, drink: {} };
    const otherRestaurant = createMenu(myMenu);
    expect(otherRestaurant.consumption).toStrictEqual([]);
  });
  
  it('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `otherRestaurant.order ela será adicionada ao array retornado em `otherRestaurant.consumption`', () => {

    otherRestaurant.order('coxinha');
    expect(otherRestaurant.consumption).toEqual(expect.arrayContain(['coxinha']));
  });
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.

  // TESTE 6: 
  it('Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    otherRestaurant.order("agua");
    otherRestaurant.order("sopa");
    otherRestaurant.order("sashimi");
    expect(otherRestaurant.consumption).toEqual(['agua', 'sopa', 'sashimi']);
  });
  
  // TESTE 7
  it('Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    const myMenu = { food: {}, drink: {} };
    const otherRestaurant = createMenu(myMenu);
    otherRestaurant.order('coxinha');
    otherRestaurant.order('agua');
    otherRestaurant.order('coxinha');
    expect(otherRestaurant.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  });
    
  // TESTE 8: 
  it('Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    const myMenu = { food: {}, drink: {} };
    const otherRestaurant = createMenu(myMenu);
    otherRestaurant.order('coxinha');
    otherRestaurant.order('agua');
    otherRestaurant.order('coxinha');
    expect(otherRestaurant.pay()).toBe(12.0)
    
  });
  // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
});
