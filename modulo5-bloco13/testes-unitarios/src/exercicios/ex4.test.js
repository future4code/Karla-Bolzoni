import {ordenaArray} from './ex4'

describe('Ordena array', () => {
  test('retorna [1,2,3] para [3,2,1]', () => {
    const resultado = ordenaArray([3,2,1])
    expect(resultado).toEqual([1,2,3])
  })

  test('retorna [1, 3, 4, 7] para [4, 7, 1, 3]', () => {
    const resultado = ordenaArray([4, 7, 1, 3])
    expect(resultado).toEqual([1, 3, 4, 7])
  })

  test('retorna [-4, -1, 0, 6, 20] para [20, -1, -4, 0, 6]', () => {
    const resultado = ordenaArray([20, -1, -4, 0, 6])
    expect(resultado).toEqual([-4, -1, 0, 6, 20])
  })
})