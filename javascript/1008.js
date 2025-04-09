const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (numero) => {
  rl.question("", (valorHora) => {
    rl.question("", (horasTrabalhadas) => {
      const salario = parseFloat(valorHora) * parseFloat(horasTrabalhadas);

      console.log(`NUMBER = ${numero}`);
      console.log(`SALARY = U$ ${salario.toFixed(2)}`);

      rl.close();
    });
  });
});
