//1.A) Usamos a propriedade process.argv

//1.B)

//Tentativa de resolução do desafio
const fraseAlteradaFunction = () => {
  const nome = process.argv[2]
  const idade = Number(process.argv[3])

  if (process.argv.length != 4) {
    console.log('Este script espera dois parâmetros.');
    console.log('Exemplo: npm run mostraDados maria 25');
  } else {
    const frase = `Olá, ${nome}! Você tem ${idade} anos.` 
    console.log(frase)
    const fraseAlterada = `${frase} Em 7 anos você terá ${idade + 7} anos!`
    console.log(fraseAlterada);
  }
}

fraseAlteradaFunction();

