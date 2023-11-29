let nomes = []
let continuar = true
let arrayPosition = 0

while(continuar){
    let InputName = prompt("Insira um nome no array: ")
    nomes[arrayPosition] = InputName

    let toContinue = prompt("Se deseja adicionar mais um nome digite (1) ")
    if(toContinue != "1"){
        continuar = false
    }
    arrayPosition++

    console.log(nomes)
}