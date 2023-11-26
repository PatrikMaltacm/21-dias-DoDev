let cond = true

while(cond){
    let idade = Number(prompt("Insira sua idade: "))
    if(idade < 18){
        console.log("Você é menor de idade!")
        cond = false;
    }

}

console.log("Saiu do while.")