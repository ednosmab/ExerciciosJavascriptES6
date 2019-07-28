var result
result = 5 < 2 //Retonar falso, 5 não é menor que 2
console.log(result)

result = 5 > 2
console.log(result) //Retonar verdade, 5 é maior que 2

console.log( 8 >= 8 ) //Retorna verdade, 8 é igual a 8
console.log(10 >= 8) //Retorna verdade, 10 é maior que 8

console.log(8 < 7) //Retorna falso, 8 não é menor que 7
console.log(8 <= 7)//Retorna falso, 8 não é menor e nem igual a 7

console.log(10 == 10) //Retorna verdade, 10 é igual a 10
console.log( 5 == 10)//Retorna falso, 5 é menor que 10

console.log( 10 != 5) //Retorna verdade, 10 é diferente de 5
console.log(!10 != 10) //Retorna verdade, 10 não é 10 e é diferente de 10

console.log(5 == "5") //Retorna verdade, 5 é igual a cinco
console.log(5 === "5") //Retorna falso, 5 não é indentico a cinco

console.log(! (1 === "um")) //Retorna verdade, a expressão é falsa, porém foi negada 
//a expressão, trazendo um resultado positivo

console.log("1" == 1 && !(1 === "1"))
//Ordem de execução os operadores lógicos: 1º. Não, 2º. E, 3º. OU

var media, n1, n2
n1 = 10
n2 = 5
media = (n1 + n2) / 2
let status = media > 8?'Aprovado':'Reprovado' //Operador Ternário
console.log(status)

var idade = 19
console.log(idade >= 18?'Maior':'Menor')