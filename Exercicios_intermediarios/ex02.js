//Maior entre três números:

const n1=Number(prompt("Digite um número inteiro: "));
const n2=Number(prompt("Digite um número inteiro: "));
const n3=Number(prompt("Digite um número inteiro: "));


if (n1>n2 && n1>n3) {

    alert("O primeiro número digitado é o maior.")

} else if (n2>n1 && n2>n3) {

    alert("O segundo número digitado é o maior.")
    
}else {
    alert("O terceiro número digitado é o maior.")
} 