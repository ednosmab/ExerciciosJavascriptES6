function verificar(){
    let data = new Date()
    let ano = data.getFullYear()

    let nasc = document.getElementById('ano').value

    let result = document.getElementById('res')
    if(nasc.lenght == 0 || nasc > ano || nasc <= 0){
        result.innerHTML = 'Informe um ano válido'
    }else{
        let radiosex = document.getElementsByName('radsex')
        let idade = ano - nasc
        let sexo = ''
        let qidade = ''
        let img = document.createElement('img')//criando tag img
        img.setAttribute('id', 'foto')//atribuido id na tag img
        if(idade <= 1){
            qidade = ' ano'
        }else{
            qidade = ' anos'
        }
        if(radiosex[0].checked){
            sexo = 'Homem'
            if(idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src', '../assets/imagens/menino.png')
            }else if(idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', '../assets/imagens/garoto.png')
            }else if(idade >= 65){
                //idoso
                img.setAttribute('src', '../assets/imagens/idoso.png')
            }else{
                //adulto
                img.setAttribute('src', '../assets/imagens/homem.png')
            }
        }else if(radiosex[1].checked){
            sexo = 'Mulher'
            if(idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src', '../assets/imagens/menina.png')
            }else if(idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', '../assets/imagens/garota.png')
            }else if(idade >= 65){
                //idoso
                img.setAttribute('src', '../assets/imagens/idosa.png')
            }else{
                //adulto
                img.setAttribute('src', '../assets/imagens/mulher.png')
            }
        }
        result.style.textAlign = 'center' //centralizar dinamicamente
        result.innerHTML = `Identificamos ${sexo} com ${idade} ${qidade}`
        result.appendChild(img)//para adicionar no dom a tag para exibir o seus conteudo
    }


}