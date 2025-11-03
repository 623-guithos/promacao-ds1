Jogo de adivinhação com limite de tentativas
import random # Importa o módulo para gerar números aleatórios
# Gera um número secreto entre 1 e 20
numero_secreto random.randint(1, 20)
palpite None
tentativas = 8
# Inicializa o palpite como vazio
#Contador de tentativas
#Loop que continua enquanto o jogador não acertar e tiver menos de 5 tentat
while palpite != numero_secreto and tentativas < 5:
#Solicita um palpite ao jogador
palpite = int(input("Adivinhe o número (1 a 20): "))
tentativas += 1 # Soma uma tentativa
# Verifica se o palpite está correto
if palpite == numero_secreto: print(" Acertou!")
# Mensagem de sucesso
else:
print("D Tente novamente.") # Mensagem de erro
# Se o jogador não acertou após 5 tentativas, exibe o número correto
if palpite != numero_secreto:
print(f" Fim de jogo! O número era (numero_secreto).")
