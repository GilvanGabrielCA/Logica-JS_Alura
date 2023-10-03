/*Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem.*/

let numero = prompt("Insira um numero");

if(numero > 0){
    console.log("Positivo")
}else if (numero < 0){
    console.log("Negativo");
} else {
    console.log("Zero");
}