const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (a) => {
  rl.question("", (b) => {
    const p = parseInt(a) * parseInt(b);
    console.log(`PROD = ${p}`);
    rl.close();
  });
});
