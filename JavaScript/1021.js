const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (valor) => {
  var valor = parseFloat(valor);
  valor = parseInt(valor * 100);

  // NOTAS
  const cem_reais = Math.floor(valor / 10000);
  valor = valor % 10000;

  const cinq_reais = Math.floor(valor / 5000);
  valor = valor % 5000;

  const vinte_reais = Math.floor(valor / 2000);
  valor = valor % 2000;

  const dez_reais = Math.floor(valor / 1000);
  valor = valor % 1000;

  const cinco_reais = Math.floor(valor / 500);
  valor = valor % 500;

  const dois_reais = Math.floor(valor / 200);
  valor = valor % 200;

  // MOEDAS
  const um_real = Math.floor(valor / 100);
  valor = valor % 100;

  const cinq_cent = Math.floor(valor / 50);
  valor = valor % 50;

  const vinte_cent = Math.floor(valor / 25);
  valor = valor % 25;

  const dez_cent = Math.floor(valor / 10);
  valor = valor % 10;

  const cinco_cent = Math.floor(valor / 5);
  valor = valor % 5;

  console.log(`NOTAS:`);
  console.log(`${parseInt(cem_reais)} nota(s) de R$ 100.00`);
  console.log(`${parseInt(cinq_reais)} nota(s) de R$ 50.00`);
  console.log(`${parseInt(vinte_reais)} nota(s) de R$ 20.00`);
  console.log(`${parseInt(dez_reais)} nota(s) de R$ 10.00`);
  console.log(`${parseInt(cinco_reais)} nota(s) de R$ 5.00`);
  console.log(`${parseInt(dois_reais)} nota(s) de R$ 2.00`);

  console.log(`MOEDAS:`);
  console.log(`${parseInt(um_real)} moeda(s) de R$ 1.00`);
  console.log(`${parseInt(cinq_cent)} moeda(s) de R$ 0.50`);
  console.log(`${parseInt(vinte_cent)} moeda(s) de R$ 0.25`);
  console.log(`${parseInt(dez_cent)} moeda(s) de R$ 0.10`);
  console.log(`${parseInt(cinco_cent)} moeda(s) de R$ 0.05`);
  console.log(`${parseInt(valor)} moeda(s) de R$ 0.01`);

  rl.close();
});
