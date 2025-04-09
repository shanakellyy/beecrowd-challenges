const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (idade) => {
  var idade = parseInt(idade);

  const ano = Math.floor(idade / 365);
  idade = idade % 365;

  const mes = Math.floor(idade / 30);
  idade = idade % 30;

  const dia = idade;

  console.log(`${ano} ano(s)`);
  console.log(`${mes} mes(es)`);
  console.log(`${dia} dia(s)`);

  rl.close();
});
