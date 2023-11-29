let confirmar = "n"

while (confirmar != "s"){
    let nome = String(prompt("Insira seu nome: "))
    let idade = String(prompt("Insira sua idade: "))
    var salarioAtual = parseFloat(prompt("Insira seu salario atual: "))
    console.log("Seu nomê é " + nome + ", sua idade é de " + idade + " anos e seu salário atual é de " + salarioAtual + ".")
    confirmar = String(prompt("Você confirma suas informações? (s) ou (n)"))
}
let aumento = 0.015
console.log("Pretenção de aumento salarial durante 10 anos: ")
for(i = 1; i <=  10; i++){
    
    salarioAtual += salarioAtual * aumento
   
    aumento *= 2

    console.log((2023 + i) +  " = R$" + salarioAtual.toFixed(2));
}