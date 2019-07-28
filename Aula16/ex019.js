let num = new Array
let c = i =  0
while(c < 10){
    i = c * 10
    num.push(i)
    c++
}
for(let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
console.log()
for(let pos in num){//Forma mais atual para percorrer um vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(70)//indexOf é utilizado para buscar valores mais precisos
console.log(`Na posição ${pos} tem o valor ${num[pos]}`)

//É possível tratar o erro a seguir
let valor = 1
pos = num.indexOf(valor)
console.log(`\n`,'-----Erro abaixo------')
console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
console.log(`\n`,'=====Tratativa do erro=====')
valor = 1
pos = num.indexOf(valor)
if(pos == -1){
    console.log(`Erro: não existe o valor informado: ${valor}`)
}else{
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}
