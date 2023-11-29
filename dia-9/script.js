let peso = prompt("Insira seu peso: ")
let altura = prompt("Insira seu sua altura: ")
let idade = parseInt(prompt("Insira sua idade: "))
let anoNas = 2023 - idade
let imc = peso / (altura * altura)

if(imc <= 18.5){
    console.log("Sua faixa é: Magreza")
}else if(imc > 18.5 && imc < 24.9){
    console.log("Sua faixa é: Normal")
}else if(imc > 24.9 && imc < 30){
    console.log("Sua faixa é: Sobrepeso")
}else if(imc > 30){
    console.log("Sua faixa é: Obesidade")
}

console.log("Seu ano de nascimento é: " + anoNas)

