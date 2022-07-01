import { validateCharacter } from '../src/validateCharacter'

describe(" Testando validateCharacter", () => {
  test("Deve retornar erro caso o objeto tenha o nome vazio", () => {
    const result = validateCharacter({
      name:"",
      life:1500,
      strength: 300,
      defense: 500
    })
    expect(result).toBe(false)
  })

  test("Deve retornar erro caso o objeto tenha a vida igual a zero", () => {
    const result = validateCharacter({
      name:"Personagem1",
      life:0,
      strength: 300,
      defense: 500
    })
    expect(result).toBe(false)
  })
})