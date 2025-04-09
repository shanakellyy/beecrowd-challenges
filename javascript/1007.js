const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (a) => {
  rl.question("", (b) => {
    rl.question("", (c) => {
      rl.question("", (d) => {
        const diferenca = parseInt(a) * parseInt(b) - parseInt(c) * parseInt(d);

        console.log(`DIFERENCA = ${diferenca}`);
        rl.close();
      });
    });
  });
});
