//Sistema de login simples:

const user = prompt("Digite o nome de usuário: ");
const senha = prompt("Digite a senha: ");

if (user == "admin" && senha == "1234") {

    alert("Login bem sucedido!")
} else {
    
    alert("Acesso negado!")
}