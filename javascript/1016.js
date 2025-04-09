const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (distancia) => {
  distancia = parseInt(distancia);

  const tempo = parseInt((distancia / 30) * 60);

  console.log(`${tempo} minutos`);

  rl.close();
});
