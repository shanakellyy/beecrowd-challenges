const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (a) => {
  rl.question("", (b) => {
    const notaA = parseFloat(a.trim()) * 3.5;
    const notaB = parseFloat(b.trim()) * 7.5;
    const media = (notaA + notaB) / 11;

    console.log(`MEDIA = ${media.toFixed(5)}`);
    rl.close();
  });
});
