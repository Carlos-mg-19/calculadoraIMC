function calcular(){
    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resutado = document.getElementById('resultado')

    if (nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        alert('preencha todos dados')
    }else{
        let A = Number(altura.value)
        let P = Number(peso.value)
        let N = nome.value
        let res = ''
        let IMC = (P / (A * A))
        if( IMC < 18.5){
            res = 'Abaixo do peso normal'
        }else if (IMC < 25){
            res = 'peso normal'
        }else if (IMC < 30){
            res = 'Acima do peso'
            }else if (IMC < 35){
                res = 'obesidade grau I'
            }else if (IMC < 40){
                res = 'obesidade grau II'
            }else {
                res = 'obesidade grau III'
            }
        
  

        resutado.innerHTML = (` ${N} seu IMC é de ${IMC.toFixed(1)} ${res}`)
    }
    
    
}