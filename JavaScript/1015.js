const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (lista1) => {
  rl.question("", (lista2) => {
    let [x1, y1] = lista1.split(" ");
    let [x2, y2] = lista2.split(" ");

    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y2 = parseFloat(y2);

    const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    console.log(`${distancia.toFixed(4)}`);

    rl.close();
  });
});
