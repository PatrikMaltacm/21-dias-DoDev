let idade = Number(prompt("Insira sua idade: "));
let nome = prompt("Qual seu nome?");

// == igual | != diferente | < menor que | > maior que | <= >= menor ou maior igual 
// === igual valor e tipo | !== diferente valor e tipo 

if(idade == 18 && nome == "Patrik"){
    console.log("Seu nome é Patrik e você tem 18 anos.");
}else if(idade === 18 || nome === "Patrik"){
    console.log("Seu nome é Patrik ou você tem 18 anos.");
}else{
    console.log("Seu nome não é Patrik e você não tem 18 anos.");
}