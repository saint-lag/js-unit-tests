/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  // ESCREVA SEUS TESTES ABAIXO:
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(getCharacter() === undefined);
  });
  it('Teste se a função retorna o objeto correto para o parâmetro "Arya" ', () => {
    expect(
      getCharacter('Arya') ===
        {
          name: 'Arya Stark',
          class: 'Rogue',
          phrases: ['Not today', 'A girl has no name.'],
        }
    );
    expect(
      getCharacter('ARYA') ===
        {
          name: 'Arya Stark',
          class: 'Rogue',
          phrases: ['Not today', 'A girl has no name.'],
        }
    );
  });
  it('Teste se a função retorna o objeto correto para o parâmetro "Brienne" ', () => {
    expect(
      getCharacter('Brienne') ===
        {
          name: 'Brienne Tarth',
          class: 'Knight',
          phrases: [
            'Im No Lady, Your Grace.',
            'I, Brienne Of Tarth, Sentence You To Die.',
          ],
        }
    );
    expect(
      getCharacter('BRIENNE') ===
        {
          name: 'Brienne Tarth',
          class: 'Knight',
          phrases: [
            'Im No Lady, Your Grace.',
            'I, Brienne Of Tarth, Sentence You To Die.',
          ],
        }
    );
  });
  it('Teste se a função retorna o objeto correto para o parâmetro "Melissandre" ', () => {
    expect(
      getCharacter('Melissandre') ===
        {
          name: 'Melissandre',
          class: 'Necromancer',
          phrases: [
            'Death By Fire Is The Purest Death.',
            'For The Night Is Dark And Full Of Terrors.',
          ],
        }
    );

    expect(
      getCharacter('MELISSANDRE') ===
        {
          name: 'Melissandre',
          class: 'Necromancer',
          phrases: [
            'Death By Fire Is The Purest Death.',
            'For The Night Is Dark And Full Of Terrors.',
          ],
        }
    );
  });
  it('Teste se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    expect(getCharacter('Pedro') === undefined);
    expect(getCharacter('Maria') === undefined);
    expect(getCharacter('') === undefined);
    expect(getCharacter() === undefined);
  });
});
