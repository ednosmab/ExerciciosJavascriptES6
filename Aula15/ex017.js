function comerPizza(nf){
    console.log('Comi uma fatia')
    nf--
    console.log(`Faltam ${nf} fatias`)
    while(nf != 0){
        nf--
        console.log('Comi mais uma fatia')
        if(nf > 1){
            console.log(`Faltam ${nf} fatias`)
        }else if(nf == 1){
            console.log(`Falta ${nf} fatia`)
        }else{
            console.log(`A pizza acabou`)

        }
    }
}
comerPizza(10)

let passo = 1
do{
    console.log(`${passo}º passo`)
    passo++
}while(passo < 10)