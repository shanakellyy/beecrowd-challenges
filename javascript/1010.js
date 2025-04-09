const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (line1) => {
  rl.question("", (line2) => {
    let [cod1, quant1, valor1] = line1.split(" ");
    let [cod2, quant2, valor2] = line2.split(" ");

    quant1 = parseInt(quant1);
    quant2 = parseInt(quant2);
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    const total = quant1 * valor1 + quant2 * valor2;

    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);

    rl.close();
  });
});
