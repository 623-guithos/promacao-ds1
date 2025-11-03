import random

# Lista de desenhos da forca. O índice corresponde ao número de erros.
# (0 erros = forca vazia, 6 erros = boneco completo/fim de jogo)
FORCA_DESENHOS = [
    # Estágio 0: 0 erros
    """
       -----
       |   |
           |
           |
           |
           |
    ---------
    """,
    # Estágio 1: 1 erro (Cabeça)
    """
       -----
       |   |
       O   |
           |
           |
           |
    ---------
    """,
    # Estágio 2: 2 erros (Corpo)
    """
       -----
       |   |
       O   |
       |   |
           |
           |
    ---------
    """,
    # Estágio 3: 3 erros (Braço esquerdo)
    """
       -----
       |   |
       O   |
      /|   |
           |
           |
    ---------
    """,
    # Estágio 4: 4 erros (Braço direito)
    """
       -----
       |   |
       O   |
      /|\  |
           |
           |
    ---------
    """,
    # Estágio 5: 5 erros (Perna esquerda)
    """
       -----
       |   |
       O   |
      /|\  |
      /    |
           |
    ---------
    """,
    # Estágio 6: 6 erros (Perna direita - Fim de Jogo)
    """
       -----
       |   |
       O   |
      /|\  |
      / \  |
           |
    ---------
    """
]

def exibir_forca(erros):
    """Exibe o desenho da forca correspondente ao número de erros."""
    # O número de erros é usado diretamente como o índice da lista FORCA_DESENHOS
    print(FORCA_DESENHOS[erros])

def jogar_forca():
    # Palavras de exemplo
    palavras = ["PYTHON", "ALGORITMO", "PROGRAMACAO", "COMPUTADOR", "SOFTWARE"]
    palavra_secreta = random.choice(palavras)
    
    # Variáveis de controle
    letras_descobertas = ["_"] * len(palavra_secreta)
    letras_usadas = set()
    erros = 0
    MAX_ERROS = len(FORCA_DESENHOS) - 1 # 6 erros

    print("--- JOGO DA FORCA ---")
    print(f"A palavra tem {len(palavra_secreta)} letras.")

    while erros < MAX_ERROS and "".join(letras_descobertas) != palavra_secreta:
        
        # 1. Exibir status atual
        exibir_forca(erros)
        print(f"\nPalavra: {' '.join(letras_descobertas)}")
        print(f"Tentativas restantes: {MAX_ERROS - erros}")
        print(f"Letras já usadas: {sorted(list(letras_usadas))}")
        print("-" * 30)

        # 2. Receber a entrada
        tentativa = input("Digite uma letra ou 'sair' para desistir: ").upper()

        if tentativa == 'SAIR':
            print("\nJogo encerrado. Até a próxima!")
            return

        # 3. Validação e Processamento da tentativa
        if len(tentativa) != 1 or not tentativa.isalpha():
            print("Entrada inválida. Digite apenas uma letra.")
            continue
        
        if tentativa in letras_usadas:
            print("Você já tentou esta letra. Tente outra.")
            continue

        letras_usadas.add(tentativa)

        if tentativa in palavra_secreta:
            print("👍 Acertou!")
            # Atualiza a palavra descoberta
            for i, letra_na_palavra in enumerate(palavra_secreta):
                if letra_na_palavra == tentativa:
                    letras_descobertas[i] = tentativa
        else:
            print("👎 Errou!")
            erros += 1

    # 4. Fim do Loop: Verificar resultado
    
    # Condição de Vitória
    if "".join(letras_descobertas) == palavra_secreta:
        print("\n🎉 PARABÉNS! Você ganhou!")
        print(f"A palavra era: {palavra_secreta}")
    
    # Condição de Derrota
    elif erros == MAX_ERROS:
        exibir_forca(erros) # Mostra o boneco completo
        print("\n💀 VOCÊ PERDEU! O boneco foi enforcado.")
        print(f"A palavra era: {palavra_secreta}")

# Executa o jogo
if __name__ == "__main__":
    jogar_forca()
