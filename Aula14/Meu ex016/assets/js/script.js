function carregar(){
    let img = document.querySelector('#imagem')
    img.src = '../assets/imagens/prontas/quem.png'    
}

function verificar(){
    let nascimento = document.querySelector('#ano').value
    let sexo = document.getElementById('sexo').value
    let img = document.querySelector('#imagem')
    let result = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - nascimento
    if(idade <= 1){
        idade = idade + ' ano'
    }else {
        idade = idade + ' anos'
    }
    if(ano - nascimento <= 12){
        if(sexo == 'm'){
            result.innerHTML = `Você é um menino e sua idade é ${idade}`
            img.src = '../assets/imagens/menino.png'
            document.body.style.background = '#00BFFF'
        }else if(sexo == 'f'){
            result.innerHTML = 'Você é uma menina e sua idade é ' + idade
            img.src = '../assets/imagens/menina.png'
            document.body.style.background = '#FF1493'
        }
    }else if(ano - nascimento <= 17){
        if(sexo == 'm'){
            img.src = '../assets/imagens/garoto.png'
            result.innerHTML = 'Você é um adolescente e sua idade é ' + idade
            document.body.style.background = '#1E90FF'
        }else{
            img.src = '../assets/imagens/garota.png'
            result.innerHTML = 'Você é uma adolescente e sua idade é ' + idade
            document.body.style.background = '#FF69B4'
        }
    }else if(ano - nascimento <= 64){
        if(sexo == 'm'){
            result.innerHTML = 'Você é um homem e sua idade é ' + idade
            img.src = '../assets/imagens/homem.png'
            document.body.style.background = '#4169E1'
        }else{
            result.innerHTML = 'Você é uma mulher e sua idade é ' + idade
            img.src = '../assets/imagens/mulher.png'
            document.body.style.background = '#DC143C'
        }
    }else{
        if(sexo == 'm'){
            result.innerHTML = 'Você é um idoso e sua idade é ' + idade
            img.src = '../assets/imagens/idoso.png'
            document.body.style.background = '#4682B4'
        }else{
            result.innerHTML = 'Você é uma idosa e sua idade é ' + idade
            img.src = '../assets/imagens/idosa.png'
            document.body.style.background = '#CD5C5C'
        }
    }
}
