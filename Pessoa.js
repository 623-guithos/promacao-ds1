class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// ---------------------------------------------
// Trecho com exemplo de teste (adicionado)
// ---------------------------------------------

// 1. Crie uma instância da classe Pessoa com valores fictícios.
const pessoa1 = new Pessoa("Ana Silva", 30);

// 2. Chame o método apresentar() dessa instância.
console.log("--- Executando o método apresentar() ---");
pessoa1.apresentar(); // Esta linha irá imprimir a saudação

// 3. Mostre o resultado esperado no console.
console.log("--- Resultado esperado (impressão acima) ---");
console.log("Olá, meu nome é Ana Silva e tenho 30 anos.");

// ---------------------------------------------
