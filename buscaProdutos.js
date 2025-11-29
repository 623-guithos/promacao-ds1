/**
 * Busca um produto específico dentro de uma lista de produtos.
 *
 * @param {Array<Object>} listaProdutos - Uma lista de objetos de produtos ({nome: string, preco: number}).
 * @param {string} nomeBusca - O nome do produto a ser buscado.
 * @returns {Object | null} O objeto do produto encontrado ou null se não for encontrado.
 */
function buscarProduto(listaProdutos, nomeBusca) {
  // 1. A função deve utilizar uma estrutura de repetição para percorrer a lista.
  for (let i = 0; i < listaProdutos.length; i++) {
    const produtoAtual = listaProdutos[i];

    // 2. A comparação deve ser feita com base na propriedade nome do objeto.
    if (produtoAtual.nome === nomeBusca) {
      // 3. O retorno deve ser o objeto completo do produto.
      return produtoAtual;
    }
  }

  // 4. Se o loop terminar sem encontrar o produto, a função deve retornar null.
  return null;
}

// --- Exemplo de Uso do Programa ---
// O programa deve ter um exemplo de uso com lista para percorrer.

// Lista de objetos de produtos para teste
const estoque = [
  { nome: "Notebook", preco: 5500.00 },
  { nome: "Mouse sem fio", preco: 120.50 },
  { nome: "Teclado mecânico", preco: 450.99 },
  { nome: "Monitor 27 polegadas", preco: 1899.90 }
];

// --- Teste 1: Produto encontrado ---
const nomeA = "Teclado mecânico";
const resultadoA = buscarProduto(estoque, nomeA);

console.log(`\n--- Buscando: ${nomeA} ---`);
if (resultadoA) {
  console.log("✅ Produto encontrado:");
  console.log(resultadoA);
} else {
  console.log(`❌ Produto não encontrado: ${nomeA}`);
}
// Resultado esperado: { nome: "Teclado mecânico", preco: 450.99 }

// --- Teste 2: Produto não encontrado ---
const nomeB = "Fone de ouvido";
const resultadoB = buscarProduto(estoque, nomeB);

console.log(`\n--- Buscando: ${nomeB} ---`);
if (resultadoB) {
  console.log("✅ Produto encontrado:");
  console.log(resultadoB);
} else {
  console.log(`❌ Produto não encontrado: ${nomeB}`);
}
// Resultado esperado: null
