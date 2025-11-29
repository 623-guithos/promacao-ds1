// Declara a variável 'idade' usando 'let' e a inicializa com o valor 30.
// 'let' é a forma moderna e recomendada para declarar variáveis em JavaScript.
let idade = 30;

// Imprime o valor da variável 'idade' no console.
console.log(idade);

/**
 * Função que calcula a soma de dois números.
 *
 * @param {number} a O primeiro número a ser somado.
 * @param {number} b O segundo número a ser somado.
 * @returns {number} O resultado da soma dos dois parâmetros.
 */
function soma(a, b) {
  return a + b;
}

// --- Exemplo de Uso ---

const numero1 = 15;
const numero2 = 27;

// Chama a função 'soma' com os números e armazena o resultado
const resultadoSoma = soma(numero1, numero2);

// Imprime a operação e o resultado no console
console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`);

// 1. Declara e inicializa a variável com o número a ser testado.
let num = 25; // Você pode mudar este valor para testar outros números

// 2. Utiliza o operador de módulo (%) para verificar se o número é par.
// Um número é par se o resto da divisão por 2 for zero (num % 2 === 0).

if (num % 2 === 0) {
  // Bloco 'if': Executado se a condição for verdadeira (o número é par)
  console.log(`O número ${num} é par.`);
} else {
  // Bloco 'else': Executado se a condição for falsa (o número é ímpar)
  console.log(`O número ${num} é ímpar.`);
}

// O loop 'for' percorrerá os códigos numéricos das letras.
// O código Unicode (e ASCII) para 'A' é 65 e para 'Z' é 90.

// 1. Inicialização: Obtém o código numérico de 'A' para começar o loop.
// 2. Condição: Continua enquanto o código for menor ou igual ao de 'Z'.
// 3. Incremento: Aumenta o código em 1 a cada iteração (o que leva à próxima letra).

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  // Converte o código numérico de volta para o caractere de letra
  const letra = String.fromCharCode(i);
  
  // Imprime a letra no console
  console.log(letra);
}

// 1. Declaração e inicialização das três variáveis numéricas
let n1 = 10;
let n2 = 15;
let n3 = 20;

// 2. Cálculo da soma dos números
// É crucial usar parênteses para garantir que a soma seja calculada
// antes da divisão.
const soma = n1 + n2 + n3;

// 3. Cálculo da média
// Divide a soma pelo número de variáveis (3)
const media = soma / 3;

// 4. Imprime o resultado no console
console.log(`Os números são: ${n1}, ${n2} e ${n3}`);
console.log(`A soma é: ${soma}`);
console.log(`A média aritmética é: ${media}`);

console.log("Olá, mundo!")

// 1. Inicialização: Define a variável de contagem inicial
let contador = 5;

// 2. Condição: O loop continua enquanto 'contador' for maior ou igual a 1
while (contador >= 1) {
  // Imprime o valor atual do contador
  console.log(contador);
  
  // 3. Atualização: Decrementa o contador para ir para o próximo número
  // Se esta linha for omitida, o loop se tornará infinito!
  contador--; 
}

function calcularProduto(a, b) {
  let resultado = a * b;
  
  // A execução do código será pausada nesta linha quando as
  // Ferramentas do Desenvolvedor (F12) estiverem abertas.
  debugger; 
  
  return resultado;
}

// Para ver o debugger em ação, chame a função e abra as Ferramentas do Desenvolvedor no navegador (normalmente F12).
calcularProduto(5, 10);
