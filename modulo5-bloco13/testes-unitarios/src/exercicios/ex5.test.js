import {primeiraLetraMaiuscula} from './ex5'

describe('Retorna a primeira letra de cada palavra maiúscula', () => {
  it('testando uma palavra', () => {
    const resultado = primeiraLetraMaiuscula('ola')
    expect(resultado).toEqual('Ola')
  })
  it('testando duas palavras', () => {
    const resultado = primeiraLetraMaiuscula('ola, mundo')
    expect(resultado).toEqual('Ola, Mundo')
  })
  it('testando uma frase inteira', () => {
    const resultado = primeiraLetraMaiuscula('eu sou o bob, aluno da labenu')
    expect(resultado).toEqual('Eu Sou O Bob, Aluno Da Labenu')
  })
})