const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (lista) => {
  let [a, b, c] = lista.split(" ");

  a = parseFloat(a.trim());
  b = parseFloat(b.trim());
  c = parseFloat(c.trim());

  const pi = 3.14159;

  const triangulo = (a * c) / 2;
  const circulo = pi * c ** 2;
  const trapezio = ((a + b) * c) / 2;
  const quadrado = b ** 2;
  const retangulo = a * b;

  console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
  console.log(`CIRCULO: ${circulo.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
  console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
  console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

  rl.close();
});
