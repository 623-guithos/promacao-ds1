// Crie uma variável para armazenar a senha correta
let senhaCorreta = "12345";

// Crie uma variável para armazenar a senha digitada pelo usuário
// Você pode mudar este valor para "12345" para testar um login bem-sucedido
let senhaDigitada = "senhaErrada";

// Use uma estrutura condicional SE-SENÃO para verificar as senhas
if (senhaDigitada === senhaCorreta) {
  console.log("Login bem-sucedido!");
} else {
  console.log("Senha incorreta. Tente novamente.");
}
