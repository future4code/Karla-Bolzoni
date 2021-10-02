/*==================================================
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:
====================================================

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

1) O que será impresso no console?

Amanda Rangel, 0, usuarios
Laís Petra, 1, usuarios
Letícia Chijo, Chijo, usuarios

Foram impressos 3 objetos


2) O que será impresso no console?

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    console.log(novoArrayB)

imprime: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
Os VALORES referentes a CHAVE nome de cada objeto.

3)O que será impresso no console?

    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)

IMPRIME:Todos os objetos que tenham a chave apelido diferente de Chijo

======================================================
EXERCÍCIOS DE ESCRITA DE CÓDIGO:
======================================================*/
//EXERCÍCIO 1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)criar um novo array que contenha apenas os nomes dos doguinhos

 const buscaNomes = (item) => {
     return item.nome
 }
 const listarNomes = pets.map(buscaNomes)
 console.log(listarNomes)

 //b) criar um novo array com os cachorros salsicha

 let raca = "Salsicha"

 const buscaRaca = (item) => { 

    if(item.raca === raca){
         return true
     }else{
         return false
     }
 }

 const listarRaca = pets.filter(buscaRaca)
 console.log(listarRaca);

 //c) Criar um novo array para enviar msg aos clientes poodles

 const listaDeMensagem = (item) => {
    const nomeCliente = item.nome
    const mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeCliente}!` 
    return mensagem
 }

 raca = "Poodle"
 const enviaMensagem = pets.filter(buscaRaca).map(listaDeMensagem)
 console.log(enviaMensagem)

//Exercício 2 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) array que contenha apenas o nome de cada item

 const nomeProduto = (item) => {
     return item.nome
 }

 const listarNomesProdutos = produtos.map(nomeProduto)
 console.log(listarNomesProdutos)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 const buscaProdutos = (item) => {
     const preco = item.preco
     const produtoComDesconto = preco * 0.95
     
     const criaNovaLista = {
         nome:item.nome, 
         preco: produtoComDesconto
     }
     return criaNovaLista
 }

 const aplicaDesconto = produtos.map(buscaProdutos)
 console.log(aplicaDesconto)

 //c) Novo array que contenha apenas os objetos da categoria Bebidas

 const filtraBebidas = (item) => {
     if(item.categoria === "Bebidas"){
         return true
     }else{
         return false
     }
  }

  const novoArrayBebidas = produtos.filter(filtraBebidas)
  console.log(novoArrayBebidas)

  //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

  let palavra = "Ypê"
  const filtraPalavra = (item) => {
      if(item.nome.includes(palavra)){
          return true
      }else{
          return false
      }
  }

  let arrayFiltraPalavra = produtos.filter(filtraPalavra)
  console.log(arrayFiltraPalavra)

  //e) Novo array cada item é uma frase "Compre [NOME] por [PREÇO]". 
  //Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const mensagemCompra = (item) => {
    const frase = `Compre ${item.nome} por ${item.preco}!`
    return frase
}

const novoFiltro = produtos.filter(filtraPalavra).map(mensagemCompra)


console.log(novoFiltro);
