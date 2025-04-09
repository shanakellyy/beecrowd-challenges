const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (segundos) => {
  var segundos = parseInt(segundos);

  const horas = Math.floor(segundos / 3600);
  segundos = segundos % 3600;
  const minutos = Math.floor(segundos / 60);
  segundos = segundos % 60;

  console.log(`${horas}:${minutos}:${segundos}`);

  rl.close();
});
