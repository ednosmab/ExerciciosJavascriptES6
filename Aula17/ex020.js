let parimp = a =>{
    if(a % 2 == 0){
        return 'é par'
    }else{
        return 'é ímpar'
    }
}

let valor = 6
//Pode ser chamado dessa forma
let res = parimp(valor)
console.log(`o valor ${valor} ${res}`)

//Sem atribuir variável e sem template string
console.log('O valor:',valor, parimp(valor))
//Ou dessa forma sem atribuir uma variável
console.log(`Verificando o valor: ${valor}... ${parimp(6)}`)
