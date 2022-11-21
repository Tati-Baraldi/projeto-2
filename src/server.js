
function calcular(){
var peso = document.getElementById("peso").value;
var altura = document.getElementById("altura").value;
var resultado = (peso / (altura * altura));
var texto = document.getElementById("resultado");
var resultado_final = resultado.toFixed(1);

if(resultado_final < 18.5){
    texto.innerHTML = "Você está abaixo do peso normal: " + resultado_final;
}else if(resultado_final >= 18.5 && resultado_final <= 24.9){
    texto.innerHTML = "Seu peso é ideal: " + resultado_final;
}else if(resultado_final >= 25 && resultado_final <= 29.9){
    texto.innerHTML = "Você está com excesso de peso: " + resultado_final;
}else{
    texto.innerHTML = "Você está obeso procure um médico assim que possível" ;
}
}