let nome = prompt("Insira seu nome: ")
let idade = prompt("Insira sua idade: ")
let peso = prompt("Insira seu peso: ")
let altura = prompt("Insira sua altura: ")
let profissao = prompt("Insira sua profissão: ")


console.log("Olá " + nome + "," + " você tem " + idade + " anos, é " + profissao + " tem " + altura + "M de altura e pesa " + peso + "kg.")

if (idade < 18){
    console.log("Sem gelada pra você.")
}else if(idade >= 18){
    console.log("Está liberado para tomar umas geladas.")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é de: " + meses + " meses.")
console.log("Sua idade em semanas é de: " + semanas + " semanas.")
console.log("Sua idade em dias é de: " + dias + " dias.")