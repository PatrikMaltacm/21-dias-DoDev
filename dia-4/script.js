let nome = prompt('Qual seu nome?');
let idade = Number(prompt('Qual sua idade?'));
let temCarta = prompt("Você tem carteira de motorista?");
let temCarro = prompt("Você tem carro?");

if(idade < 18 || temCarta == 'não' || temCarta == 'Não'){
    console.log(nome + ", Você não pode dirigir!");
}else if(idade >= 18 && temCarta == 'sim' || temCarta == "Sim" && temCarro == "não" || temCarro == 'Não'){
    console.log(nome + ", Você pode dirigir mas não tem carro.");
}else if(idade >= 18 && temCarta == 'sim' || temCarta == "Sim" && temCarro == "sim" || temCarro == 'Sim'){
    console.log(nome + ", Você será o motorista!");
}