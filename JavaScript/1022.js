const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (n) => {
  let casos = parseInt(n);
  let resultados = [];
  let contador = 0;

  const processarEntrada = () => {
    if (contador === casos) {
      console.log(resultados.join("\n"));
      rl.close();
      return;
    }

    rl.question("", (entrada) => {
      let partes = entrada.split(" ");

      let n1 = parseInt(partes[0]);
      let d1 = parseInt(partes[2]);
      let op = partes[3];
      let n2 = parseInt(partes[4]);
      let d2 = parseInt(partes[6]);

      let num, den;

      if (op === "+") {
        num = n1 * d2 + n2 * d1;
        den = d1 * d2;
      } else if (op === "-") {
        num = n1 * d2 - n2 * d1;
        den = d1 * d2;
      } else if (op === "*") {
        num = n1 * n2;
        den = d1 * d2;
      } else if (op === "/") {
        num = n1 * d2;
        den = n2 * d1;
      }

      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      let mdc = gcd(num, den);
      let simp_num = (num / mdc) | 0;
      let simp_den = (den / mdc) | 0;

      if (simp_den < 0) {
        simp_num = -simp_num;
        simp_den = -simp_den;
      }

      resultados.push(`${num}/${den} = ${simp_num}/${simp_den}`);

      contador++;
      processarEntrada();
    });
  };

  processarEntrada();
});
