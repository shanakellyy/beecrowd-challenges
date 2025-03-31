N = int(input())

notas = [100, 50, 20, 10, 5, 2, 1]

print(N)

for nota in notas:
  quantidade = N // nota
  N = N % nota

  print(f'{quantidade} nota(s) de R$ {nota},00')