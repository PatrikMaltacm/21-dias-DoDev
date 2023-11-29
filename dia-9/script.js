let anoNas = ""
let opc = "sim"
let idade = 0

while (opc === "sim"){
    anoNas = parseInt(prompt("Qual o ano do seu nascimento?"))
    for(i = anoNas; i <= 2023; i++){
        console.log(i + " - " + idade + " anos de idade");
        idade++
    }
    opc = prompt("Deseja inserir outro ano? (sim ou não)")
}
