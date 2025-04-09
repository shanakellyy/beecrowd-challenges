const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (lista) => {
  let [a, b, c] = lista.split(" ");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  const x = Math.floor((a + b + Math.abs(a - b)) / 2);
  const maior = Math.floor((x + c + Math.abs(x - c)) / 2);

  console.log(`${maior} eh o maior`);

  rl.close();
});
