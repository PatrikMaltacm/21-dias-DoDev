let nome = ""
let cpf = 0
let valor = 0
let valorTotal = 0
let opc = 0
let opcSorD = ""
let saldo = 1000
let numOperacoes = 0
let mediaValor = 0 

do {
    nome = String(prompt("Insira seu nome: "))
    cpf = Number(prompt("Insira seu CPF: "))
    valor = Number(prompt("Insira o valor que deseja sacar ou depositar: "))
    opcSorD = String(prompt("Deseja sacar ou depositar? (s ou d)"))

    if(valor <= saldo && valor > 0){
        if(opcSorD == "s"){
            saldo -= valor
        }
    }else if(opcSorD == "s"){
        alert("O valor inserido para saque é maior que o saldo do usuario, não sera possivel sacar!")
    }
    if(valor > 0){
        if(opcSorD == "d"){
            saldo += valor
        }
    }
    valorTotal += valor
    
    opc = Number(prompt("Deseja continuar? (1) para continuar (2) para parar"))

    numOperacoes++
    mediaValor += valor

    console.log(opc)
    console.log(numOperacoes)
    
} while (opc === 1);

mediaValor = mediaValor / numOperacoes

console.log("Seu saldo é de: " + saldo)
console.log("O valor inserido foi de: " + valorTotal)
console.log("A media de valores inseridos foram de: " + mediaValor)
