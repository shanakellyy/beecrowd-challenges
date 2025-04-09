const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let N = parseInt(input);
  let notas = [100, 50, 20, 10, 5, 2, 1];
  console.log(`${N}`);

  for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    let quantidade = Math.floor(N / nota);
    N = N % nota;

    console.log(`${quantidade} nota(s) de R$ ${nota},00`);
  }
  rl.close();
});
