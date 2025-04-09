const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (a) => {
  rl.question("", (b) => {
    rl.question("", (c) => {
      const notaA = parseFloat(a.trim()) * 2;
      const notaB = parseFloat(b.trim()) * 3;
      const notaC = parseFloat(c.trim()) * 5;
      const media = (notaA + notaB + notaC) / 10;

      console.log(`MEDIA = ${media.toFixed(1)}`);
    });
  });
});
