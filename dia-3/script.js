let userName = prompt("Qual seu nome?");
let oldUser = prompt("Qual sua idade");
let userHeight = prompt("Qual sua altura");
let userWeight = prompt("Qual seu peso?");

let yearOfBirth = 2023 - parseInt(oldUser);

let imcUser = userWeight / (userHeight * userHeight);

console.log("Olá " + userName + " você tem " + oldUser + " anos, nasceu em " + yearOfBirth + ", tem " + userHeight + " de altura, pesa " + userWeight + "kg" + " e seu IMC é de " + imcUser + " kg/m2."); 