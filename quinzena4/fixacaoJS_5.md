``` javascript
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 const encontraNomes = (item) =>{
   return item.nome
 }
 
 const arrayDeNomes = animais.map(encontraNomes)
 
 return arrayDeNomes
}``` 
