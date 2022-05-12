let valor = parseInt(prompt('coloque seu salario'))

if ( valor > 1250){
    let aumento = (valor*15)/100 + valor
    alert(aumento)
    
}else{
    let aumento2 = (valor*10)/100 + valor
    alert(aumento2)
}