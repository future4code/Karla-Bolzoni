function checaTriangulo(
  a: number,
  b: number,
  c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno"
  } else if (a === b && b === c) {
    return "Equilátero"
  } else {
    return "Isósceles"
  }
}

console.log('Checa triângulo:', checaTriangulo(2, 2, 2));