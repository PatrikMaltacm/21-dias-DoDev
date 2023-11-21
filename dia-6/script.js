let numero  =  Number ( prompt ( "Qual o número que você quer a tabuada?" ));

for (let i = numero; i <= numero + 2; i++){
    console.log("-----------------------------------")
    console.log("Tabuada do: " + i);
    console.log("-----------------------------------");
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i*j));
    }
}
