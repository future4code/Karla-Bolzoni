export function primeiraLetraMaiuscula(frase){
  const palavras = frase.split(" ")

  for (var i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
  }
  return palavras.join(" ")
}
