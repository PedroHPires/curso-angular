function calcular(){
    const num = document.getElementById('num').value
    var res = document.getElementById('res')
    res.innerHTML = ''
    if(num.length == 0){
        alert('[ERRO] Digite um numero!')
    }else{
        for(let i = 1; i <=10; i++){
            res.innerHTML += `<p>${num} x ${i} = ${num*i}</p>`
        }
    }
    
}