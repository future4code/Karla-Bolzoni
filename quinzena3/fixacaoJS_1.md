```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  
  const valorDoCarro = valorTotalVendas / qtdeCarrosVendidos
  
  let comissao = (0.05 * valorDoCarro) + 100
  let comissaoTotal = comissao * qtdeCarrosVendidos
  let salarioFixo = 2000
  let salarioFinal = salarioFixo + comissaoTotal
  
  if(qtdeCarrosVendidos > 0){
  return salarioFinal
  }else{
    return salarioFixo
  }
}

```
