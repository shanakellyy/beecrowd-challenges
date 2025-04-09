const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (tempo) => {
  rl.question("", (velocidade) => {
    tempo = parseInt(tempo);
    velocidade = parseInt(velocidade);

    const distancia = velocidade * tempo;
    const litros = distancia / 12;

    console.log(litros.toFixed(3));

    rl.close();
  });
});
