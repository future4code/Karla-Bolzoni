import {primeiraLetraMaiuscula} from './ex5'

describe('Retorna a primeira letra de cada palavra maiúscula', () => {
  it('should word', () => {
    const resultado = primeiraLetraMaiuscula('ola')
    expect(resultado).toEqual('Ola')
  })
  it('should two words', () => {
    const resultado = primeiraLetraMaiuscula('ola, mundo')
    expect(resultado).toEqual('Ola, Mundo')
  })
  it('should phrase', () => {
    const resultado = primeiraLetraMaiuscula('eu sou o bob, aluno da labenu')
    expect(resultado).toEqual('Eu Sou O Bob, Aluno Da Labenu')
  })
})