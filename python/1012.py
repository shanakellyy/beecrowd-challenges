a, b, c = map(float, (input()).split())
pi = 3.14159

triangulo = (a * c) / 2
circulo = pi * c**2
trapezio = ((a + b) * c) / 2
quadrado = b**2
retangulo = a * b

print(f'TRIANGULO: {triangulo:.3f}')
print(f'CIRCULO: {circulo:.3f}')
print(f'TRAPEZIO: {trapezio:.3f}')
print(f'QUADRADO: {quadrado:.3f}')
print(f'RETANGULO: {retangulo:.3f}')