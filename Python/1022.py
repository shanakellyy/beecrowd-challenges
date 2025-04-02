import math

n = int(input())
resultados = []

for _ in range(n):
  n1, _, d1, op, n2, _, d2 = input().split()

  n1, d1, n2, d2 = map(int, [n1, d1, n2, d2])

  if op == '+':
    num = n1 * d2 + n2 * d1
    den = d1 * d2
  elif op == '-':
    num = n1 * d2 - n2 * d1
    den = d1 * d2
  elif op == '*':
    num = n1 * n2
    den = d1 * d2
  elif op == '/':
    num = n1 * d2
    den = n2 * d1

  gcd = math.gcd(num, den)
  simp_num = num // gcd
  simp_den = den // gcd

  resultados.append(f'{num}/{den} = {simp_num}/{simp_den}')

print('\n'.join(resultados))