function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

const media = calcularMedia(6, 8, 9.25); // Notas ajustadas para o teste
console.log(`A média das notas é: ${media.toFixed(2)}`);
// Saída no Console: A média das notas é: 7.75
