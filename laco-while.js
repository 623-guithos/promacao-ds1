let tamanhoCalcado = 0;

// O loop continuará enquanto o número não for válido (não numérico OU fora do intervalo)
while (isNaN(tamanhoCalcado) || tamanhoCalcado < 34 || tamanhoCalcado > 44) {
  let entrada = prompt("Digite o tamanho do calçado (entre 34 e 44):");
  tamanhoCalcado = parseInt(entrada);
  
  if (isNaN(tamanhoCalcado) || tamanhoCalcado < 34 || tamanhoCalcado > 44) {
      console.log("Valor inválido ou fora da faixa. Tente novamente.");
  }
}

console.log("Tamanho aceito:", tamanhoCalcado);
