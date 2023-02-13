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
        if( IMC < 18,5){
            res = 'Abaixo do peso normal'
        }
        if(IMC < 24,9){
            res = 'peso normal'
        }
        if(IMC > 24,9 || IMC < 29,9){
            res = 'excesso de peso'
        }
        if(IMC > 29,9 || IMC < 34,9){
            res = 'obesidade classe I'
        }
        if(IMC > 34,9 || IMC < 39,9){
            res = 'obesidade classe II'
        }
        if(IMC >= 40,0){
            res = 'obesidade classe III'
        }

        resutado.innerHTML = (` ${N} seu IMC é de ${IMC.toFixed(1)} ${res}`)
    }
    
    
}