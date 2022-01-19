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
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const productsArray = productDetails('Alcool gel', 'Máscara');
    for (let item in productsArray) {
      expect(typeof productsArray[item]).toEqual('object');
    }
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const productsArray = productDetails('Alcool gel', 'Máscara');
    expect(new Set(productsArray).size).toEqual(productsArray.length);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    const productsArray = productDetails('Alcool gel', 'Máscara');
    for (let item in productsArray) {
      const itemChars = productsArray[item].details.productId.split('');
      expect(itemChars[itemChars.length - 1]).toBe('3');
      expect(itemChars[itemChars.length - 2]).toBe('2');
      expect(itemChars[itemChars.length - 3]).toBe('1');
    }
  });
});
