//Classificação de triângulos:
const lado1 = Number(prompt("Digite o valor em cm do lado 1 do triângulo:"));
const lado2 = Number(prompt("Digite o valor em cm do lado 2 do triângulo:"));
const base = Number(prompt("Digite o valor em cm da base do triângulo:"));

if (lado1==lado2 && lado1==base && lado2==base) {

    alert("Triângulo equilátero.")

} else if (lado1==lado2 && (lado1 != base || lado2 != base )) {

    alert("Triângulo isósceles.")

} else {
    alert("Triângulo escaleno.")
}