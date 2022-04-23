let colecaoSignos = [
    { "Nome": "Aquário", "DataInicio": "01-20", "DataFim": "02-18" },
    { "Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20" },
    { "Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19" },
    { "Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20" },
    { "Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21" },
    { "Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23" },
    { "Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22" },
    { "Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22" },
    { "Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22" },
    { "Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21" },
    { "Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21" },
    { "Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19" }
];

const verificaDataRange = (data, DataInicio, DataFim, tipoComparacao) => {

    if (tipoComparacao == "and") {
        return (data >= DataInicio && data <= DataFim);
    } else if (tipoComparacao == "or") {
        return (data >= DataInicio || data <= DataFim);
    }

}

const retornaSigno = (signos, data) => {

    let ano = data.getFullYear();

    for (const signo of signos) {

        let dataInicioSigno = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let dataFimSigno = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipoComparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verificaDataRange(data, dataInicioSigno, dataFimSigno, tipoComparacao)) {
            return signo["Nome"];
        }
    }
}

let dataApp = new Date();

const nomeSigno = retornaSigno(colecaoSignos, dataApp);

console.log(`O signo de hoje é: ${nomeSigno}.`)