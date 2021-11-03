```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

  contador = 0
  for(numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
      contador++
    }
  }
  
  if(contador > 0){
    return `O número ${numeroEscolhido} aparece ${contador}x`
  }
  
  if(contador <=0){
    return `Número não encontrado`
  }
}
```
