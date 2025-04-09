a, b, c = map(int, input().split())

x = (a+b+abs(a-b))//2

maior = (x+c+abs(x-c))//2

print(f'{maior} eh o maior')