const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (r) => {
  const raio = parseFloat(r.trim());
  const pi = 3.14159;
  const volume = (4 / 3) * pi * raio ** 3;

  console.log(`VOLUME = ${volume.toFixed(3)}`);

  rl.close();
});
