const listaTarefas = ['Comprar leite', 'ir na farmácia']

const novoItem = process.argv[2]
console.log('Item adicionado com sucesso');

const novaLista = listaTarefas.push(novoItem)

console.log(listaTarefas.join(', '));