//Desconto em compras:

const compra = Number(prompt("Digite o valor da compra em reais: "));

if (compra > 100) {

    desconto = compra - (compra * 0.10)

    alert("Desconto de 10%. Valor da compra igual a " + desconto + " reais.")
} else {

    alert("Compra sem desconto. Valor a pagar: " + compra + " reais.")
}