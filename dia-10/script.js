const array = []
const indices = []
let contadorIndice = 0

const searchNumber = parseInt(prompt("Insira o numero que será procurado: "))

for (let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento + ${i + 1}: `))
    array[i] = elemento
}

for (let i = 0; i < 10; i++){
    if(array[i] === searchNumber){
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O numero procurado ${searchNumber}, foi encontrado no indice ${indices}.`)