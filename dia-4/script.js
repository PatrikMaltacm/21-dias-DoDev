let fome = prompt('Você está com fome?');
let dinheiro = prompt('Você tem dinheiro?');
let restaurante = prompt("O restaurante está aberto?");

if(fome == 'não' || fome == 'Não' || dinheiro == 'não' || dinheiro == 'Não'){
    console.log('Hoje a janta será em casa.');
}else if(fome == 'sim' || fome == 'Sim' && dinheiro == 'sim' || dinheiro == 'sim' && restaurante == 'não' || restaurante == 'Não'){
    console.log('Peça um deliverY!');
}else if(fome == 'sim' || fome == 'Sim' && dinheiro == 'sim' || dinheiro == 'sim' && restaurante == 'Não' || restaurante == 'Sim'){
    console.log('Hoje a janta vai ser no seu restaurante favorito!');
}