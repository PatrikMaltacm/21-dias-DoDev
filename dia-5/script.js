let num1 = Number(prompt("Digite um numero: "))
let opc = parseInt(prompt("Qual operação deseja efetuar? " + "(1 = +) (2 = -) (3 = *) (4 = /)"))
let num2 = Number(prompt("Digite outro numero: "))


switch (opc){
    case 1:
        console.log("O resultado é: " + (num1 + num2))
        break;
    case 2:
        console.log("O resultado é: " + (num1 - num2))
        break;
    case 3: 
        console.log("O resultado é: " + (num1 * num2))
        break;
    case 4:
        console.log("O resultado é: " + (num1 / num2))
        break;
    default:
        console.log("Invalido");
        break;
}