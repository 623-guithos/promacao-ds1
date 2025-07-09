let idade = 28; // Você pode mudar este valor para testar diferentes idades
let categoria;

if (idade < 12) {
  categoria = "Criança";
} else if (idade < 18) { // Não precisa do "idade >= 12" aqui, pois a condição anterior já o exclui
  categoria = "Adolescente";
} else if (idade < 60) { // Não precisa do "idade >= 18" aqui, pela mesma razão
  categoria = "Adulto";
} else {
  categoria = "Idoso";
}

console.log("A pessoa é classificada como: " + categoria);
