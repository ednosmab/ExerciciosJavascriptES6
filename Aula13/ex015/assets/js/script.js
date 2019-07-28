function carregar(){
    let msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 18
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = '../assets/imagens/manha.png'
        document.body.style.background = "#afdefd"
    }else if(hora >= 18){
        //Boa noite
        img.src = '../assets/imagens/noite.png'
        document.body.style.background = '#222c38'
    }else{
        //Boa tarde
        img.src = '../assets/imagens/tarde.png'
        document.body.style.background = '#d96601'
    }
}