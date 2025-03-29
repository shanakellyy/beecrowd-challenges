cod1, quant1, valor1 = input().split()
cod2, quant2, valor2 = input().split()

quant1 = int(quant1)
quant2 = int(quant2)
valor1 = float(valor1)
valor2 = float(valor2)

total = (quant1 * valor1) + (quant2 * valor2)

print(f'VALOR A PAGAR: R$ {total:.2f}')