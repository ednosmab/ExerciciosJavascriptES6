function calc(){
    let tabuada = Number(document.getElementById('num').value)
    let sel = document.getElementById('selec-tab')
    if(tabuada == null || tabuada == 0){
        alert('Valor da tabuada inválido')
    }else{
        sel.innerHTML = ""
        document.querySelector('#selec-tab').style.display = 'block'
        let t = tabuada
        for(let c = 1; c <= 10; c++){
            let opt = document.createElement('option')
            opt.text = `${t} X ${c} = ${t * c}`
            opt.value = `tab${c}` //É necessário haver um value por conta de outras linguagens
            sel.appendChild(opt)
        }
    }
}