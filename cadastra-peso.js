// Importa o módulo 'readline-sync' para simular o prompt() no Node.js
const readlineSync = require('readline-sync');

// Solicita o nome do usuário
let nome = readlineSync.question("Digite seu nome: ");

// Solicita o peso do usuário e converte para número inteiro
let peso = parseInt(readlineSync.question("Digite seu peso em kg (apenas números inteiros): "));

// Exibe as informações coletadas
console.log(`Olá ${nome}, você pesa ${peso} kg.`);
