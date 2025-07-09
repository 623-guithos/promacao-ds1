function processaridade() {
while (true) {
let idadeStr = prompt("Por favor, digite sua idade: ");
Verstice se o usuário cancelou o prompt ou digitou vario
if (idadeStr === null || idadeStr.trim() === ) {
console.log("Entrada cancelada ou vazia. Tente novamente.");
continue;
}
try {
let idade parseInt(idadeStr);
Verifica se a conversão resultou en un número válido (Mal Not a Number)
if (islial(idade)) {
console.log("Entrada inválida. Por favor, digite um número inteiro.");
}else if (idade < 0) {
console.log("Idade não pode ser negativa. Tente novamente.");
} else {
console.log("Sua idade é: ${idade}');
break; //Sal do Loop se a entrada for valids
}
} catch (e) {
Expora parssînt não gare exceções para falhas de conversão como int() es Python, panter o try-catch e uma boa prática pаги яггой элегрегадок
console.log("Ocorreu um erro inesperado ao processar a idade.");
}
Chamer função para testar
processarIdade();
