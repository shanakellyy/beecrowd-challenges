idade = int(input())

ano = int(idade / 365)
idade1 = idade%365
mes = int(idade1 / 30)
dia = idade1%30

print(f'{ano} ano(s)')
print(f'{mes} mes(es)')
print(f'{dia} dia(s)')