 // Crie uma variável para o saldo disponível
let saldoDisponivel = 100;

// Crie uma variável para o valor da compra
let valorCompra = 75; // Experimente mudar para um valor maior que 100, por exemplo, 120

// Use uma estrutura condicional SE-SENÃO para verificar o saldo
if (saldoDisponivel >= valorCompra) {
  // Se o saldo for suficiente, calcule o saldo restante
  let saldoRestante = saldoDisponivel - valorCompra;
  console.log(`Compra aprovada! Seu novo saldo é: R$ ${saldoRestante.toFixed(2)}`);
} else {
  // Caso contrário, exiba a mensagem de saldo insuficiente
  console.log("Saldo insuficiente. A compra não pode ser realizada.");
}
