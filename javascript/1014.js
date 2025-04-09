const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (distancia) => {
  rl.question("", (combustivel) => {
    distancia = parseInt(distancia);
    combustivel = parseFloat(combustivel);

    const consumo = distancia / combustivel;

    console.log(`${consumo.toFixed(3)} km/l`);

    rl.close();
  });
});
