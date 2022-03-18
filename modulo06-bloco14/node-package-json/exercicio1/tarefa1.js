//1.A) Usamos a propriedade process.argv

//1.B)

const nome = process.argv[2]
const idade = Number(process.argv[3])
const frase = `Olá, ${nome}! Você tem ${idade} anos.`

console.log(frase)

//1.C)
const fraseAlterada = `${frase} Em 7 anos você terá ${idade + 7}`
console.log(fraseAlterada);

//Tentativa de resolução do desafio
// const fraseAlteradaFunction = (nome, idade) => {
//    nome = process.argv[2]
//    idade = process.argv[3]
//   if(nome === '' || idade === NaN){
//     console.log('esperamos dois valores');
//   }else{ 
//     console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
//   }
// }

//console.log('teste',fraseAlteradaFunction(,process.argv[3]));

