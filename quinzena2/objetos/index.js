//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.a)O que será impresso no console?
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
// SAÍDA: Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])
// SAÍDA: Virginia Cavendish
console.log(filme.transmissoesHoje[2])
// SAÍDA: Canal: Globo horário: 14h

//2.a) O que vai ser impresso no console?
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
// SAÍDA: nome: Juca idade: 3 raca: SRD

console.log(gato)
// SAÍDA: nome: Juba idade 3 raca: SRD

//console.log(tartaruga)
// SAÍDA: 

//2.b) A síntaxe de três pontos antes de um objeto copia um objeto para dentro de outro.

//3.a) o que vai ser impresso no console?

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
// SAÍDA: FALSE, porque no atributo PROPRIEDADE estamos chamando "BACKENDER" que precisa estar entre aspas.
console.log(minhaFuncao(pessoa, "altura"))
// SAÍDA: undefined, porque ALTURA não foi definda dentro do objeto PESSOA.

/*==================================================================================
EXERCÍCIOS DE ESCRITA DE CÓDIGO!
===================================================================================*/
//EXERCÍCIO 1
const idPessoa = {
	nome: "Eduardo" ,
	apelido : ["Dudu" , "Edu" , "Du"]
}

function imprimeIdentificacao(id) {

	const frase = `Eu sou ${id.nome}, mas pode me chamar de: ${id.apelido[0]}, ${id.apelido[1]} ou ${id.apelido[2]}.`

	console.log(frase)
}

imprimeIdentificacao(idPessoa)

const novoIdPessoa = {...idPessoa , 
	apelido:["duda" , "duzinho" , "ed"]
}

imprimeIdentificacao(novoIdPessoa)

//EXERCÍCIO 2

const primeiraPessoa = {
	nome: "Paulo" , 
	idade: "22" ,
	profissao: "Escritor"
}
const segundaPessoa = {
	nome: "Maria" , 
	idade: "32" ,
	profissao: "Atriz"
}

function imprimeInfoPessoa(objeto) {
	const dadosPessoa = [objeto.nome , objeto.nome.length , objeto.idade , objeto.profissao, objeto.profissao.length]

	console.log(dadosPessoa)
}
imprimeInfoPessoa(primeiraPessoa)

//EXERCÍCIO 3

let carrinho = []

let fruta1 = {
	nome: "banana" , 
	disponibilidade: true
}

let fruta2 = {
	nome: "abacaxi" , 
	disponibilidade: false
}

let fruta3 = {
	nome: "pera",
	disponibilidade: true
}

function pegaFruta(fruta){
	carrinho.push(fruta)

	console.log(carrinho)
}
pegaFruta(fruta1)
pegaFruta(fruta2)
pegaFruta(fruta3)

/*=======================================================================
DESAFIOS!
========================================================================*/
//1.
function cadastro(){
	
	const objetoCadastro = {
		nome: prompt("Qual seu nome?"),
		idade: Number(prompt("Qual sua idade?")),
		profissao:prompt("Qual sua profissão?")
	}

	console.log(objetoCadastro)
	console.log(`tipo ${typeof objetoCadastro}`)
}
cadastro()

//2.
function filmesPreferidos(){
	const filme1 = {
		nomeFilme: "meu malvado favorito" ,
		anaLancamento: 2020
	}
	const filme2 = {
		nomeFilme: "pose" ,
		anaLancamento: 2020
	}
	const foiLancadoPrimeiro = filme1.anaLancamento > filme2.anaLancamento
	const foiLancadoJunto = filme1.anaLancamento === filme2.anaLancamento

	const pergunta1 = `O primeiro filme foi lançado antes do segundo? ${foiLancadoPrimeiro}`
	const pergunta2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${foiLancadoJunto}`

	console.log(filme1, filme2)
	console.log(pergunta1)
	console.log( pergunta2);

}
filmesPreferidos()

//3.

function disponibilidadeFruta(fruta){
	const estoque = fruta.disponibilidade
	const inverteEstoque = !estoque


	console.log(inverteEstoque)

}

disponibilidadeFruta(fruta2)
disponibilidadeFruta(fruta3)

