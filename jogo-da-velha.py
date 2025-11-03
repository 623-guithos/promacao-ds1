# -----------------------------------------------------
# 1. Funções de Inicialização e Exibição do Tabuleiro
# -----------------------------------------------------

def criar_tabuleiro():
    """Cria um tabuleiro 3x3 vazio (matriz)."""
    # Representa o tabuleiro como uma lista de listas (matriz)
    # Cada lista interna é uma linha. O espaço vazio é ' '
    return [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

def exibir_tabuleiro(tabuleiro):
    """Exibe o tabuleiro no terminal usando loops aninhados."""
    print("\n   0   1   2") # Cabeçalho das colunas
    print("  -----------")

    # Loop Externo: Percorre as linhas (i)
    for i in range(3):
        print(f"{i} |", end="") # Número da linha (i)
        
        # Loop Interno: Percorre as colunas (j) dentro da linha atual
        for j in range(3):
            # Imprime o conteúdo da célula, seguido de um separador '|'
            print(f" {tabuleiro[i][j]} |", end="")
        
        # Quebra de linha após a última coluna da linha atual
        print("\n  -----------")

# -----------------------------------------------------
# 2. Funções de Lógica do Jogo
# -----------------------------------------------------

def verificar_vitoria(tabuleiro, jogador):
    """Verifica se o jogador atual venceu por linha, coluna ou diagonal."""
    
    # Checar Linhas e Colunas
    for i in range(3):
        # 1. Checa a linha i (todas as colunas na mesma linha)
        if all([tabuleiro[i][j] == jogador for j in range(3)]):
            return True
        # 2. Checa a coluna i (todas as linhas na mesma coluna)
        if all([tabuleiro[j][i] == jogador for j in range(3)]):
            return True

    # Checar Diagonais
    
    # 3. Diagonal principal (0,0), (1,1), (2,2)
    if tabuleiro[0][0] == tabuleiro[1][1] == tabuleiro[2][2] == jogador:
        return True
    
    # 4. Diagonal secundária (0,2), (1,1), (2,0)
    if tabuleiro[0][2] == tabuleiro[1][1] == tabuleiro[2][0] == jogador:
        return True
    
    return False

def verificar_empate(tabuleiro):
    """Verifica se todas as posições estão preenchidas (sem vencedor)."""
    # Itera sobre todas as linhas da matriz
    for linha in tabuleiro:
        # Verifica se ainda há algum espaço vazio (' ') na linha
        if ' ' in linha:
            return False # Se encontrar um espaço vazio, não é empate
    return True # Se sair do loop sem encontrar espaços, é empate

# -----------------------------------------------------
# 3. Loop Principal do Jogo
# -----------------------------------------------------

def jogar_jogo_da_velha():
    tabuleiro = criar_tabuleiro()
    jogador_atual = 'X'
    rodada = 0
    
    print("Início do Jogo da Velha! O Jogador 'X' começa.")

    # O loop principal continua enquanto não houver vencedor OU empate
    while True:
        exibir_tabuleiro(tabuleiro)
        print(f"\nTurno do Jogador '{jogador_atual}'")

        # 1. Obter e validar a jogada
        while True:
            try:
                # Obter a entrada do usuário
                linha = int(input("Digite a linha (0, 1 ou 2): "))
                coluna = int(input("Digite a coluna (0, 1 ou 2): "))

                # Validação de limites
                if 0 <= linha <= 2 and 0 <= coluna <= 2:
                    # Validação de posição livre (Requisito)
                    if tabuleiro[linha][coluna] == ' ':
                        break # Sai do loop de input se a jogada for válida
                    else:
                        print("🚫 Posição já ocupada! Tente novamente.")
                else:
                    print("🚫 Entrada inválida! Use apenas 0, 1 ou 2 para linha e coluna.")

            except ValueError:
                print("🚫 Entrada inválida! Digite um número inteiro.")
        
        # 2. Realizar a jogada
        tabuleiro[linha][coluna] = jogador_atual
        rodada += 1

        # 3. Verificar o estado do jogo
        if verificar_vitoria(tabuleiro, jogador_atual):
            exibir_tabuleiro(tabuleiro)
            print(f"\n🎉 Vencedor(a): Jogador '{jogador_atual}'! Parabéns!")
            break

        if verificar_empate(tabuleiro):
            exibir_tabuleiro(tabuleiro)
            print("\n🤝 Jogo empatado! Nenhuma posição restante.")
            break

        # 4. Trocar o jogador para o próximo turno
        jogador_atual = 'O' if jogador_atual == 'X' else 'X'

# -----------------------------------------------------
# 4. Execução
# -----------------------------------------------------

if __name__ == "__main__":
    jogar_jogo_da_velha()
