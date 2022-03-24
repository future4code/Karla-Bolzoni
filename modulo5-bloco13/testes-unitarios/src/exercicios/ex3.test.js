import { isExportDeclaration } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("retorna true para [1,2,1]", () => {
    const resultado = checaItensDuplicados([1,2,1])
    expect(resultado).toEqual(true)
  })

  test("retorna false para [1,2,3]", () => {
    const resultado = checaItensDuplicados([1,2,3])
    expect(resultado).toEqual(false)
  })

  test("retorna true para [a,a,b]", () => {
    const resultado = checaItensDuplicados(["a","a","b"])
    expect(resultado).toEqual(true)
  })
  
});
