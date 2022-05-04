const verificaDataRange = (data, DataInicio, DataFim, tipoComparacao) => {

    if (tipoComparacao == "and") {
        return (data >= DataInicio && data <= DataFim);
    } else if (tipoComparacao == "or") {
        return (data >= DataInicio || data <= DataFim);
    }

}

const retornaSigno = (signos, data) => {

    let ano = data.getFullYear();
    let mensagem;

    for (const signo of signos) {

        let dataInicioSigno = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let dataFimSigno = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipoComparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verificaDataRange(data, dataInicioSigno, dataFimSigno, tipoComparacao)) {
            return mensagem = `${signo["Nome"]}. 
Descrição: ${signo["Descricao"]}`;
        }
    }
}

export default retornaSigno;