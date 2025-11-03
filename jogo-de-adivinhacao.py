import time

# --- Configurações de Segurança ---
SENHA_CORRETA = "1234"
TENTATIVAS_MAXIMAS = 3
TEMPO_LIMITE_SEGUNDOS = 30

# --- Variáveis de Controle ---
tentativas_restantes = TENTATIVAS_MAXIMAS
tempo_inicial = time.time()  # Marca o tempo de início da sessão de login
acesso_concedido = False
tempo_expirou = False

print("-" * 40)
print("     Sistema de Login - Segurança Reforçada")
print(f"Você tem {TENTATIVAS_MAXIMAS} tentativas e {TEMPO_LIMITE_SEGUNDOS} segundos no total.")
print("-" * 40)

# O loop continua ENQUANTO houver tentativas restantes E o tempo não tiver expirado
while tentativas_restantes > 0 and not tempo_expirou:
    
    # 1. Calcular o tempo decorrido e restante
    tempo_decorrido = time.time() - tempo_inicial
    tempo_restante = TEMPO_LIMITE_SEGUNDOS - tempo_decorrido
    
    # 2. Verificar se o tempo acabou ANTES de pedir a senha (melhor experiência)
    if tempo_restante <= 0:
        tempo_expirou = True
        break  # Sai do loop imediatamente
    
    # 3. Solicitar a senha ao usuário
    print(f"\nTentativa {TENTATIVAS_MAXIMAS - tentativas_restantes + 1} de {TENTATIVAS_MAXIMAS}.")
    print(f"(Tempo restante: {tempo_restante:.1f} segundos)")
    
    senha_digitada = input("Digite a senha: ")

    # 4. Verificar a senha
    if senha_digitada == SENHA_CORRETA:
        acesso_concedido = True
        break  # Acesso concedido, interrompe o loop
    else:
        # Senha incorreta: reduz tentativas e informa o usuário
        tentativas_restantes -= 1
        
        if tentativas_restantes > 0:
            print(f"❌ Senha incorreta! Restam {tentativas_restantes} tentativas.")
        else:
            # Esta verificação é redundante, mas melhora a clareza
            print("❌ Última tentativa falhou.")


# --- Resultado Final ---
print("-" * 40)

if acesso_concedido:
    print("✅ ACESSO CONCEDIDO! Bem-vindo(a) ao sistema.")
elif tempo_expirou:
    # A variável tempo_expirou foi definida como True dentro do loop
    print("⏰ ACESSO NEGADO! O tempo limite de 30 segundos expirou.")
else:
    # O loop terminou porque tentativas_restantes chegou a zero (e o tempo não expirou)
    print(f"🚫 ACESSO BLOQUEADO! Você excedeu o limite de {TENTATIVAS_MAXIMAS} tentativas.")

print("-" * 40)
