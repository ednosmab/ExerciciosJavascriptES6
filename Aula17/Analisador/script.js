let num = document.querySelector('input#entnum')
let select = document.querySelector('select#saida')
let res = document.querySelector('div#resposta-dados')
let gvalores = []

function isNumero(n){//Valida número, se está dentro do intervalo
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){//verifica se existe algum elemento no vetor
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adiciona(){
    if(isNumero(num.value) && !inLista(num.value, gvalores)){//Insere números dentro do vetor
        gvalores.push(Number(num.value))
        let opt = document.createElement('option')//Cria elementos no DOM
        opt.text = `valor adicionado ${num.value}`//Insere conteúdo dentro do elemento criado acima
        select.appendChild(opt)//Insere o elemento criado acima, dentro do DOM
        res.innerHTML = ''//Limpa o campo de resposta para nova interação
    }else{
        alert('Digite um número válido entre 1 e 100, ou verifique se o mesmo já se encontra na lista')
    }
    num.value = ''//limpa o campo de entra para inserir novos valores
    num.focus()//Focaliza o campo de resposta para inserir novos valores
}

function finalizar(){//Eibe no campo de resposta o resultado da analise
    if(gvalores.length == 0){//Valida se o vetor contém valores para analise
        alert('Informe valores para verificar')
    }else{
        res.innerHTML = ''//Limpa o campo de resposta, quando inserir mais elementos no vetor
        res.innerHTML = `<p>Ao todo foram informado ${gvalores.length} valores</p>`//Informa a qt de elementos do vetor
        let soma = media = 0

        //Para verificar o maior e menor número, atribuir o primeiro elemento do vetor é necessário
        let maior = menor = gvalores[0]
        for(let c in gvalores){
            if(maior < gvalores[c]){
                maior = gvalores[c]
            }
            if(menor > gvalores[c]){
                menor = gvalores[c]
            }
            soma += gvalores[c]//soma todos os valores
            media += (gvalores[c])/2//realiza a média entre todos os valores
        }
        
        //Insere no campo de resposta a analise realizada
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma entre todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é ${media}</p>`
    }
}