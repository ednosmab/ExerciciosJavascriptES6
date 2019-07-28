function contador(){
    let inicio = Number(document.querySelector('#inicio').value)
    let passo = Number(document.querySelector('#passo').value)
    let fim = Number(document.querySelector('#fim').value)
    let result = document.querySelector('#resposta-dados')
    result.innerHTML = 'Contando: '
    let img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    img.setAttribute('src', 'siga.png')
    if(inicio == 0 || passo == null || fim == 0){
        result.innerHTML = 'Impossível contar'
    }else{

        let i = inicio
        let f = fim
        let p = passo
        if(p <= 0){
            p = 1
        }
        if(i < f){
            while(i <= f){
                result.innerHTML += `${i}`
                if(i < f){
                    result.appendChild(img)
                }
                i += p
            }
        }else{
            while(i >= f){
                result.innerHTML += `${i}`
                if(i > f){
                    result.appendChild(img)
                }
                i -= p
            }
        }
        img.setAttribute('src', 'chegada.png')
        result.appendChild(img)
    }
    
    
}