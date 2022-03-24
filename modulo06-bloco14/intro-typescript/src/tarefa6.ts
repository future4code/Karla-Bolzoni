function calculaNumero(numero1: number, numero2: number) : string {
  const soma: number = numero1 + numero2
  const subtrai: number = numero1 - numero2
  const multiplica: number = numero1 * numero2

  if(numero1 > numero2){
    return  `a soma é ${soma}, a diferença é ${subtrai}, a multiplicação é ${multiplica} e o maior número é ${numero1}`
  }else{
    return  `a soma é ${soma}, a diferença é ${subtrai}, a multiplicação é ${multiplica} e o maior número é ${numero2}`
  }
  
}

console.log(calculaNumero(7,4));
