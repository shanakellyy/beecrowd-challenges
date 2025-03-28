const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (r) => {
  const n = 3.14159;
  const raio = parseFloat(r.trim());
  const area = n * raio ** 2;
  console.log(`A=${area.toFixed(4)}`);
  rl.close();
});
