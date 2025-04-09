nome = input()
salarioFixo = float(input())
vendas = float(input())

comissao = vendas * 0.15
salario = salarioFixo + comissao

print(f'TOTAL = R$ {salario:.2f}')