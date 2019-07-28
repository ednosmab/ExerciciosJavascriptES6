function soma(n1, n2){
    return n1 + n2
}
function soma2(n1, n2 = 0){
    return n1 + n2
}
let v = function(x){
    return x*2
}
let func = a => {
    let fat = 1
    for(let c = a; c > 1; c--){
        fat *= c
    }
    return fat
}
let fatorial = a =>{
    if(a == 1){
        return 1
    }else{
        return a * fatorial(a-1)
    }
}
console.log('soma',soma(10, 5))
console.log('----Problema----')
console.log('soma',soma(10, ))
console.log('-----Solução-----')
console.log('soma',soma2(10))
console.log('multiplicação',v(10))
console.log('fatorial', func(5))
console.log('fatorial recursivo', fatorial(5))