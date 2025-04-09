const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (nome) => {
  rl.question("", (salarioFixo) => {
    rl.question("", (vendas) => {
      const comissao = parseFloat(vendas.trim()) * 0.15;
      const salario = parseFloat(salarioFixo.trim()) + comissao;

      console.log(`TOTAL = R$ ${salario.toFixed(2)}`);

      rl.close();
    });
  });
});
