alert("Bem vindo ao posto Ipiranga o que deseja? ")
let opc = parseInt(prompt("Abastecer com gasolina = (n1) " + "Abastecer com alcool = (n2) " + "Calibrar os pneus = (n3) " ))

switch(opc){
    case 1:
        let quantGas = Number(prompt("Qual valor deseja abastecer? " + "A gasolina R$5,00 o litro"))
        console.log("Você abasteceu: " + (quantGas / 5) + " Litros de gasolina!")
        break;
    case 2:
        let quantAlc = Number(prompt("Qual valor deseja abastecer? " + "o acool R$3,00 o litro"))
        console.log("Você abasteceu: " + (quantAlc / 3) + " Litros de alcool")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
}