``` javascript

function calculaNota(ex, p1, p2) {
  const calculaMedia = (ex*1) + (p1*2) + (p2*3)
  const mediaPonderada = calculaMedia /6
  
  if(mediaPonderada >= 9){
    return "A"
  }
  if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    return "B"
  }
  if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    return "C"
  }
  if(mediaPonderada < 6){
    return "D"
  }

}```
