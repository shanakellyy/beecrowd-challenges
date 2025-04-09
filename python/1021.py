valor = float(input())

# NOTAS
cem_reais = valor // 100
cem_reais_resto = valor % 100

cinq_reais = cem_reais_resto // 50
cinq_reais_resto = cem_reais_resto % 50

vinte_reais = cinq_reais_resto // 20
vinte_reais_resto = cinq_reais_resto % 20

dez_reais = vinte_reais_resto // 10
dez_reais_resto = vinte_reais_resto % 10

cinco_reais = dez_reais_resto // 5
cinco_reais_resto = dez_reais_resto % 5

dois_reais = cinco_reais_resto // 2
dois_reais_resto = cinco_reais_resto % 2

# MOEDAS
um_real = dois_reais_resto // 1
um_real_resto = dois_reais_resto % 1

cinq_cent = um_real_resto // 0.5
cinq_cent_resto = um_real_resto % 0.5

vinte_cent = cinq_cent_resto // 0.25
vinte_cent_resto = cinq_cent_resto % 0.25

dez_cent = vinte_cent_resto // 0.1
dez_cent_resto = vinte_cent_resto % 0.1

cinco_cent = dez_cent_resto // 0.05
cinco_cent_resto = dez_cent_resto % 0.05

um_cent = cinco_cent_resto // 0.01

print('NOTAS:')
print(f'{int(cem_reais)} nota(s) de R$ 100.00')
print(f'{int(cinq_reais)} nota(s) de R$ 50.00')
print(f'{int(vinte_reais)} nota(s) de R$ 20.00')
print(f'{int(dez_reais)} nota(s) de R$ 10.00')
print(f'{int(cinco_reais)} nota(s) de R$ 5.00')
print(f'{int(dois_reais)} nota(s) de R$ 2.00')

print('MOEDAS:')
print(f'{int(um_real)} moeda(s) de R$ 1.00')
print(f'{int(cinq_cent)} moeda(s) de R$ 0.50')
print(f'{int(vinte_cent)} moeda(s) de R$ 0.25')
print(f'{int(dez_cent)} moeda(s) de R$ 0.10')
print(f'{int(cinco_cent)} moeda(s) de R$ 0.05')
print(f'{int(um_cent)} moeda(s) de R$ 0.01')