//Calculadora simples

const n1 = Number(prompt("Digite um número inteiro: "));
const n2 = Number(prompt("Digite outro número inteiro: "));

const op = prompt("Digite a operação desejada: + , -, * , /");

let resultado;

if (op === "+") {
    resultado = n1+n2
    alert("Operação adição (+) escolhida. O resultado da operação é " + resultado)
} else if (op === "-") {
    resultado = n1-n2
    alert("Operação subtração (+) escolhida. O resultado da operação é " + resultado)
} else if (op === "*") {
    resultado = n1*n2
    alert("Operação multiplicação (*). O resultado da operação é " + resultado)
} else if (op === "/") {
    resultado = n1/n2
    alert("Operação divisão (/). O resultado da operação é " + resultado)
} else  
    {alert("Valor desconhecido. Digite um número válido.")
}
