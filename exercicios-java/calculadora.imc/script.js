function calcular(){
    var peso = Number (document.querySelector("#peso").value)
    var altura = Number (document.querySelector("#altura").value)
    var res = document.getElementById('res')
    if (peso == 0 || altura == 0){
        alert('Dados Incompletos')
    }else{
        let resultado = peso / altura**2
        switch (true) {
            case resultado < 17:
                res.innerHTML = 'Muito abaixo do peso'
                break;
            case resultado >= 17 && resultado < 18.5:
                res.innerHTML = 'Abaixo do Peso'
                break;
            case resultado >= 18.5 && resultado < 25:
                res.innerHTML = 'Peso Ideal'
                break;
            case resultado >= 25 && resultado < 30:
                res.innerHTML = 'Acima do Peso'
                break;
            case resultado >= 30 && resultado < 35:
                res.innerHTML = 'Obesidade 1'
                break;
            case resultado >= 35 && resultado < 40:
                res.innerHTML = 'Obesidade 2'
                break;
            default:
                res.innerHTML = 'Obesidade 3'
                break;
        }
    }
}