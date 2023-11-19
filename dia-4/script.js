let idade = Number(prompt("Insira sua idade: "));

// == igual | != diferente | < menor que | > maior que | <= >= menor ou maior igual 
// === igual valor e tipo | !== diferente valor e tipo 

if (idade <= 10){
    console.log(idade);
    let dentroEscopo = 'Patrik'
    console.log(dentroEscopo);
    console.log("Voceê tem menos ou tem 10 anos.");
    if(true){
        console.log("estou no terceiro escopo");
        console.log(dentroEscopo);
    }
}else{
    console.log("Você tem mais que 10 anos.");
}

console.log("sai do escopo");
console.log(dentroEscopo);