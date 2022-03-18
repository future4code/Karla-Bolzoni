// 2.A)
const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
		console.log(num1 + num2); 
		break;
	case "subt":
		console.log(num1 - num2); 
		break;
  case "mult":
		console.log(num1 * num2);     
    break;
  case "div":
		console.log(num1 / num2);     
    break;
    default:
			console.log('Este script espera 3 parâmetros.Sendo o primeiro algum dentre estes (soma, subt, mult, div)');
    	console.log('Exemplo: npm run calculadora soma 5 2')
}