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

  test("Deve retornar erro caso o objeto tenha a força igual a zero", () => {
    const result = validateCharacter({
      name:"Personagem1",
      life:300,
      strength: 0,
      defense: 500
    })
    expect(result).toBe(false)
  })

  test("Deve retornar erro caso o objeto tenha a defesa igual a zero", () => {
    const result = validateCharacter({
      name:"Personagem1",
      life:300,
      strength: 500,
      defense: 0
    })
    expect(result).toBe(false)
  })

  test("Deve retornar true para as entradas válidas", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  test("Deve retornar erro caso exista uma propriedade inválida", () => {
    const input = validateCharacter ({
      name: "",
      life: 1500,
      strength: 0,
      defense: 500,
    })

    expect(input).toBe(false)
  })
})