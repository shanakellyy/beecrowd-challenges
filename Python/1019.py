segundos = int(input())

horas = segundos//3600
segundosRestantes = segundos%3600
minutos = segundosRestantes//60
segundosFinais = segundosRestantes%60

print(f'{horas}:{minutos}:{segundosFinais}')