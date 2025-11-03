// ====================================================================
// 🚀 EXERCÍCIO 1: ITERADOR for...of para Agradecimento de Clientes
// ====================================================================

console.log("\n--- EXERCÍCIO 1: for...of para Agradecimento de Clientes ---");

const clientes = [
    "Ana Silva",
    "Bruno Mendes",
    "Carla Ribeiro",
    "Daniel Ferreira",
    "Elaine Rocha"
];

for (const nome of clientes) {
    console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}

console.log("------------------------------------------------------------------");


// ====================================================================
// 🛍️ EXERCÍCIO 2: Filtrar Compras Recentes com forEach
// ====================================================================

console.log("\n--- EXERCÍCIO 2: Filtrar Compras Recentes com forEach ---");

// Definindo a Data de Referência
const hoje = new Date();
const trintaDiasEmMs = 30 * 24 * 60 * 60 * 1000;
const marcoTempoMinimo = hoje.getTime() - trintaDiasEmMs;

// Lista de Compras (as datas são fictícias, mas o cálculo é real)
const historicoCompras = [
    { nome: "Ana Silva", dataCompra: "2025-10-25", valor: 150.00 },
    { nome: "Bruno Mendes", dataCompra: "2025-09-01", valor: 50.00 },
    { nome: "Carla Ribeiro", dataCompra: "2025-11-03", valor: 300.50 },
    { nome: "Daniel Ferreira", dataCompra: "2025-10-05", valor: 220.00 },
    { nome: "Elaine Rocha", dataCompra: "2025-08-15", valor: 89.90 },
    { nome: "Felipe Souza", dataCompra: "2025-10-30", valor: 45.00 },
    { nome: "Giovana Lima", dataCompra: "2025-09-10", valor: 120.00 },
    { nome: "Henrique Paz", dataCompra: "2025-10-15", valor: 650.00 },
    { nome: "Isabela Reis", dataCompra: "2025-07-20", valor: 25.00 },
    { nome: "Jorge Santos", dataCompra: "2025-10-20", valor: 99.99 },
    { nome: "Kelly Nogueira", dataCompra: "2025-10-04", valor: 350.00 }
];

console.log(`Início do filtro (Compras após: ${new Date(marcoTempoMinimo).toLocaleDateString()})`);

historicoCompras.forEach(compra => {
    const dataCompraMs = new Date(compra.dataCompra).getTime();
    if (dataCompraMs >= marcoTempoMinimo) {
        console.log(` ✅ Cliente: ${compra.nome} | Data: ${new Date(dataCompraMs).toLocaleDateString()}`);
    }
});

console.log("------------------------------------------------------------------");


// ====================================================================
// 🌟 EXERCÍCIO 3: Remover Duplicados com Set e Iterador
// ====================================================================

console.log("\n--- EXERCÍCIO 3: Remover Duplicados com Set e Iterador ---");

const listaComDuplicados = [
    "Ana", "Bruno", "Carla", "Daniel", "Ana", "Elaine",
    "Bruno", "Felipe", "Carla", "Giovana", "Daniel"
];

console.log("Lista original:", listaComDuplicados);

// 1. Usando Set para garantir a unicidade
const nomesUnicosSet = new Set(listaComDuplicados);

console.log("Nomes únicos encontrados (usando for...of no Set):");

// 2. Usando um Iterador (for...of) para percorrer o Set
let contador = 0;
for (const nome of nomesUnicosSet) {
    contador++;
    console.log(` ${contador}. ${nome}`);
}

console.log("Total de nomes únicos:", nomesUnicosSet.size);
console.log("------------------------------------------------------------------");
