import colecaoSignos from "./dados/dados.js";
import retornaSigno from "./funcoes/funcoes.js";

let dataApp = new Date();

const nomeSigno = retornaSigno(colecaoSignos, dataApp);

console.log(`O signo de hoje é: ${nomeSigno}`)