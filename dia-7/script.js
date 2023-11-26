let nota = 0
let sexo = ""
let contador = -1;
let media = 0
let homens = 0
let numeroAlunos = 1
let maiorHomens = 0 
let mulheresMaio7 = 0
let outra = "true"

while(contador <= numeroAlunos){
    numeroAlunos ++;
    if(contador < 0){
        contador = 1
    }
    nota = Number(prompt("Qual a nota do " + contador + " aluno(a) (0-10): "))
    sexo = String(prompt("Qual o sexo do " + contador + " aluno(a) (f/m): "))



    if(sexo === "m"){
        if(nota > maiorHomens){
            maiorHomens = nota
        }
        homens += 1;
    }
    if(sexo === "f" && nota > 7){
        mulheresMaio7 += 1;
    }

    media += nota



    outra = String(prompt("Deseja adicionar mais uma nota? (s/n)"))

    if(outra === "n"){
        contador = 100000000000
    }

    contador++
}

numeroAlunos -= 1
media = media / numeroAlunos


console.log("A media geral dos alunos é: " + (media))
console.log("O numero de alunos homens foram: " + homens)
console.log("O numero de alunas mulheres que tiraram acima de 7 foram: " + mulheresMaio7)
console.log("A maior nota entre os homens foi: " + maiorHomens)
console.log(outra)
console.log(numeroAlunos)