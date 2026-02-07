
//Exercícios básicos

const promptSync = require ("prompt-sync");
const prompt = promptSync();
//Exercício 01:
const idade = Number(prompt("Digite a sua idade: "));

if (idade < 18) {

    console.log("Usuário menor de idade!")

} else {

    console.log("Usuário maior de idade!")
}
console.log("   ");
//Exercício 02:
const n1 = Number(prompt("Digite um número inteiro: "));

if (n1 < 0){

    console.log("O número " + n1 + " é negativo.")
} else {

    console.log("O número " + n1 + " é positivo.")
}

console.log("   ");

//Exercício 03:
const nota = Number(prompt("Digite a nota do aluno (de 0 a 100): "));

if (nota < 60 ) {

    console.log("Nota igual a " + nota + ". Aluno reprovado.")
} else {
    console.log("Nota igual a " + nota + ". Aluno aprovado.")
}
console.log("   ");

//Exercício 04:

const num = Number(prompt("Digite um número inteiro: "));

if (num < 0) {
    console.log("Número negativo.")
} else if (num > 0) {
    console.log("Número positivo")
} else {
    console.log("Número igual a zero")
}
console.log("   ");

//Exercício 05:

const idade2 = Number(prompt("Digite a idade do usuário: "));

if (idade2 >= 0 && idade2 <= 12) {
    console.log("Idade igual a " + idade2 + ". Usuário é uma criança.")
} else if (idade2 >= 13 && idade <= 17) {
     console.log("Idade igual a " + idade2 + ". Usuário é adolescente.")
} else {
    alert("Idade igual a " + idade2 + ". Usuário é adulto.")
}

console.log("   ");

//Exercício 06: 

const numero = Number(prompt("Digite um número inteiro: "));

if (numero  %2 == 0) {
    console.log("O número é par.")
} else {

    console.log("O número é ímpar.")
}