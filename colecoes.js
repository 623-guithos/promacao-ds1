
// Mapa de contatos
let agenda = new Map();

// Adicionando contatos
agenda.set("João", "99999-1234");
agenda.set("Maria", "98888-5678");

// Acessando número de telefone
console.log(agenda.get("Maria")); // 98888-5678

// Exibindo todos os contatos
agenda.forEach((numero, nome) => {
  console.log(`${nome}: ${numero}`);
});
