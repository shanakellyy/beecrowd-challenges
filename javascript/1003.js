const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (a) => {
  rl.question("", (b) => {
    const x = parseInt(a) + parseInt(b);
    console.log(`SOMA = ${x}`);
    rl.close();
  });
});
