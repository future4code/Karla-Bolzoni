```javascript
function calculaPrecoTotal(quantidade) {
  const valorReal = 1.30
  const valorComDesconto = 1.00
  let valorTotal
  if(quantidade >= 12){
    valorTotal = quantidade * valorComDesconto
  }else{
    valorTotal = quantidade * valorReal
  }
  return valorTotal
}
``` 
