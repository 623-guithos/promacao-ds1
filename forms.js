/**
 * Gerenciador de Dados de Usuários com Listas (Array), Conjuntos (Set) e Mapas (Map).
 * Versão refinada para melhor clareza no cadastro de IDs.
 */

// 1. Importa o módulo readline-sync
const readline = require('readline-sync');

function gerenciadorDeDadosDeUsuarios() {
    // Estruturas de Dados
    const listaNomes = [];         // Array: Lista de nomes (permite duplicatas)
    const conjuntoEmails = new Set(); // Set: Conjunto de e-mails (apenas únicos)
    const mapaTelefones = new Map();  // Map: Mapa de ID -> Telefone

    const NUM_ELEMENTOS = 10;

    // Função de entrada para substituir o prompt()
    function getInput(mensagem, obrigatorio = true) {
        let entrada;
        do {
            entrada = readline.question(mensagem);
            if (obrigatorio && entrada.trim() === "") {
                console.log("[AVISO] A entrada não pode ser vazia. Tente novamente.");
            }
        } while (obrigatorio && entrada.trim() === "");
        return entrada;
    }

    console.log("==============================================");
    console.log("💻 INICIANDO CADASTRO DE 10 ELEMENTOS POR ESTRUTURA");
    console.log("==============================================");


    // --- 1. Cadastro da Lista de Nomes (Array) ---
    console.log("\n--- 1. Cadastro da Lista de Nomes (Permite Duplicatas) ---");
    for (let i = 0; i < NUM_ELEMENTos; i++) {
        const nome = getInput(`[Nome ${i + 1}/${NUM_ELEMENTOS}] Digite o nome do cliente: `);
        listaNomes.push(nome.trim());
    }


    // --- 2. Cadastro do Conjunto de E-mails (Set) ---
    console.log("\n--- 2. Cadastro do Conjunto de E-mails (Apenas Únicos) ---");
    let emailsCadastrados = 0;
    while (emailsCadastrados < NUM_ELEMENTOS) {
        const email = getInput(`[E-mail ${emailsCadastrados + 1}/${NUM_ELEMENTOS}] Digite o e-mail único do cliente: `);
        
        const emailTratado = email.trim().toLowerCase();

        if (conjuntoEmails.has(emailTratado)) {
            console.log(`[AVISO] E-mail '${emailTratado}' já existe. Será solicitado outro e-mail.`);
        } else {
            conjuntoEmails.add(emailTratado);
            emailsCadastrados++;
        }
    }


    // --- 3. Cadastro do Mapa de Telefones por ID (Map) ---
    console.log("\n--- 3. Cadastro do Mapa de Telefones por ID ---");
    let idsCadastrados = 0;
    while (idsCadastrados < NUM_ELEMENTOS) {
        const id = getInput(`[ID/Telefone ${idsCadastrados + 1}/${NUM_ELEMENTOS}] Digite o ID único do cliente (ex: C00${idsCadastrados + 1}): `);
        const idTratado = id.trim().toUpperCase();

        if (mapaTelefones.has(idTratado)) {
            console.log(`[AVISO] ID '${idTratado}' já está em uso. Por favor, use um ID diferente.`);
        } else {
            const telefone = getInput(`[ID: ${idTratado}] Digite o telefone do cliente (ex: (11) 99876-5432): `);
            mapaTelefones.set(idTratado, telefone.trim());
            idsCadastrados++;
        }
    }


    // --- Exibição dos Dados Cadastrados ---
    console.log("\n==============================================");
    console.log("✅ DADOS CADASTRADOS");
    console.log("==============================================");
    
    // 1. Exibir Lista de Nomes (Array)
    console.log("\n### 📋 Lista de Nomes Cadastrados:");
    listaNomes.forEach((nome, index) => {
        console.log(`- Cliente ${index + 1}: ${nome}`);
    });

    // 2. Exibir Conjunto de E-mails (Set)
    console.log("\n----------------------------------------------");
    console.log("### 📧 Conjunto de E-mails Únicos:");
    let emailIndex = 1;
    conjuntoEmails.forEach(email => {
        console.log(`- E-mail ${emailIndex++}: ${email}`);
    });

    // 3. Exibir Mapa de Telefones por ID (Map)
    console.log("\n----------------------------------------------");
    console.log("### 🗺️ Mapa de Telefones por ID:");
    mapaTelefones.forEach((telefone, id) => {
        console.log(`- ID **${id}** -> Telefone: ${telefone}`);
    });

    console.log("\n==============================================");
    console.log("Processo de cadastro concluído.");
}

// Inicia a função de gerenciamento
gerenciadorDeDadosDeUsuarios();
