function calculo() {

    
    //Variáveis para os Inputs
    var valorManutencao = Number(input_manutencao.value) * 1_000_000;
    var valorFuncionario = Number(input_funcionario.value) * 1_000_000;
    var qtdCiclo = Number(input_qtdCiclo.value);
    var valorCiclo = Number(input_ciclo.value) * 1_000_000;
    var qtdMotor = Number(input_qtdMotor.value);

    //Variáveis default
    var custoInstall = 7500 * qtdMotor; // R$ 7.500,00 para cada sensor (Valor estimado)
    var qtdFuncionario = parseInt(valorFuncionario / 60000); //Cada funcionário recebe R$ 60.000,00 ao ano

    //Validação
    if (valorManutencao <= 0 || valorFuncionario <= 0 || qtdCiclo <= 0 || valorCiclo <= 0 || qtdMotor <= 0) {
        alert("Por favor, preencha todos os campos com números positivos diferentes de 0.")
    } else {

        /* ======================== CÁLCULOS ======================== */

        //Manutenção
        var manutencaoReduz = valorManutencao - (valorManutencao * 0.22); //Redução de 22%
        var lucroManutencao = valorManutencao - manutencaoReduz; //Valor que representa o tanto que economizará com manutenção anualmente

        //Funcionários
        var funcionarioReduz = valorFuncionario - (valorFuncionario * 0.1); //Redução de 10%
        var lucroFuncionario = valorFuncionario - funcionarioReduz; //Valor que representa o tanto que economizará com funcionários anualmente

        //Ciclos
        var cicloLucro = valorCiclo * 0.9;
        var valorPorCiclo = valorCiclo / qtdCiclo; //Lucro gerado a cada ciclo do avião a jato (sem o sensor)
        var novoValorPorCiclo = cicloLucro / qtdCiclo; //Lucro gerado a cada ciclo do avião a jato (com o sensor)
        var lucroCicloPorAno = novoValorPorCiclo * qtdCiclo; //Lucro gerado por ano (com o sensor)

        //Custos Gerais
        var custoTotalAntes = valorCiclo - (valorManutencao + valorFuncionario); //Custos sem os sensores
        var custoTotalDepois = lucroCicloPorAno - (manutencaoReduz + funcionarioReduz + custoInstall); //Gastos com a implementação dos sensores
        var lucro = custoTotalAntes - custoTotalDepois; //Comparação entre os valores sem e com os sensores
        var porcentagemLucro = (100 * lucro / custoTotalAntes).toFixed(2); //Porcentagem do lucro

        var novoValorPorCicloAumento = valorCiclo * 1.1 / qtdCiclo;
        var lucroCicloPorAnoAumento = novoValorPorCicloAumento * qtdCiclo; 

        /* ======================== CONVERTER OS VALORES PARA A FORMATAÇÃO DO REAL ======================== */

        var custoInstallRS = custoInstall.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var valorManutencaoRS = valorManutencao.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var manutencaoReduzRS = manutencaoReduz.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var lucroManutencaoRS = lucroManutencao.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var valorFuncionarioRS = valorFuncionario.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var funcionarioReduzRS = funcionarioReduz.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var lucroFuncionarioRS = lucroFuncionario.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var valorCicloRS = valorCiclo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var valorPorCicloRS = valorPorCiclo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var novoValorPorCicloAumentoRS = novoValorPorCicloAumento.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var lucroCicloPorAnoAumentoRS = lucroCicloPorAnoAumento.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var custoTotalAntesRS = custoTotalAntes.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var custoTotalDepoisRS = custoTotalDepois.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        var lucroRS = lucro.toLocaleString("pt-br", { style: "currency", currency: "BRL" });




        /* ======================== CRIAR AS DIVS QUE REPRESENTAM AS "BOLINHAS" DAS CATEGORIAS ======================== */

        var div_rendimentoPadrao = "<div class='topic_class'>Classificação: <div class='status status_rendimentoPadrao'></div></div>";
        var div_rendimentoSensor = "<div class='topic_class'>Classificação: <div class='status status_rendimentoSensor'></div></div>";
        var div_despesaPadrao = "<div class='topic_class'>Classificação: <div class='status status_despesaPadrao'></div></div>";
        var div_despesaSensor = "<div class='topic_class'>Classificação: <div class='status status_despesaSensor'></div></div>";
        var div_economia = "<div class='topic_class'>Classificação: <div class='status status_economia'></div></div>";
        var div_outros = "<div class='topic_class'>Classificação: <div class='status status_outros'></div></div>";




        /* ======================== MENSAGENS DE CADA TÓPICO DO RESULTADO ======================== */

        var topico1 = `<li>Custo estimado para a instalação de um sensor: R$ 7.500,00. Para a instalação de ${qtdMotor} sensores, haverá um custo de <span class='destaque dstq_despesaSensor'>${custoInstallRS}</span>;${div_despesaSensor}</li>
                    <li>O gasto com manutenção dos motores, sem a aplicação dos sensores, é de <span class='destaque dstq_despesaPadrao'>${valorManutencaoRS}</span>;${div_despesaPadrao}</li>
                    <li>O gasto com manutenção dos motores, com a aplicação dos sensores, é de <span class='destaque dstq_despesaSensor'>${manutencaoReduzRS} (Redução de 22%)</span>;${div_despesaSensor}</li>
                    <li><span class='destaque dstq_resumo'>Dessa forma, a empresa economizará<span class='destaque dstq_resumo dstq_economia'>${lucroManutencaoRS}</span> em manutenções por ano.</span>${div_economia}</li>`;

        var topico2 = `<li>O gasto com funcionários, sem os sensores, é de <span class='destaque dstq_despesaPadrao'>${valorFuncionarioRS}</span>;${div_despesaPadrao}</li>
                    <li>O gasto com funcionários, com os sensores, será de <span class='destaque dstq_despesaSensor'>${funcionarioReduzRS} (Redução de 10%)</span>;${div_despesaSensor}</li>
                    <li>Sabendo que 1 funcionário recebe, por ano, R$ 60.000,00, a companhia aérea possui, aproximadamente, ${qtdFuncionario} funcionários; ${div_outros}</li>
                    <li><span class='destaque dstq_resumo'>Dessa forma, a empresa economizará<span class='destaque dstq_resumo dstq_economia'>${lucroFuncionarioRS}</span> com funcionários por ano.</span>${div_economia}</li>`

        var topico3 = `<li>Quantidade de ciclos executados pelas aeronaves anualmente: ${qtdCiclo} ciclos;${div_outros}</li>
                    <li>O valor gerado a cada ciclo da aeronave, sem a aplicação dos sensores, é de <span class='destaque dstq_rendimentoPadrao'>${valorPorCicloRS}</span>;${div_rendimentoPadrao}</li>
                    <li>O valor gerado a cada ciclo da aeronave, com a aplicação dos sensores, será de <span class='destaque dstq_rendimentoSensor'>${novoValorPorCicloAumentoRS} (Ganho de 10%)</span>;${div_rendimentoSensor}</li>
                    <li>O valor gerado anualmente pelos ciclos das aeronaves, sem a aplicação dos sensores, é de <span class='destaque dstq_rendimentoPadrao'>${valorCicloRS}</span>;${div_rendimentoPadrao}</li>
                    <li>O valor gerado anualmente pelos ciclos das aeronaves, com a aplicação dos sensores, será de <span class='destaque dstq_rendimentoSensor'>${lucroCicloPorAnoAumentoRS} (Ganho de 10%)</span>.${div_rendimentoSensor}</li>`;

        var topico4 = `<li>Os gastos gerais que a empresa aérea possui, sem a aplicação dos sensores, é de <span class='destaque dstq_despesaPadrao'>${custoTotalAntesRS}</span>;${div_despesaPadrao}</li>
                    <li>Os gastos gerais que a empresa aérea possuirá, com a aplicação dos sensores, será de <span class='destaque dstq_despesaSensor'>${custoTotalDepoisRS}</span>.${div_despesaSensor}</li>`;

        var topico5 = `<li><span class='destaque dstq_resumo'>Em resumo, a empresa aérea economizará, ao todo,<span class='destaque dstq_resumo dstq_economia'>${lucroRS}</span>.<br> A companhia conseguirá economizar em até ${porcentagemLucro}%.</span>${div_economia}</li>`;
    
        


        /* ======================== UNIR AS MENSAGENS E MOSTRAR NA TELA PARA O USUÁRIO ======================== */

        div_resultadosContainer.innerHTML = `<div class="resultados">
                                                <br>
                                                    <span class="topics">Custos com Manutenção dos Motores</span>
                                                    <ul class="topic_list">${topico1}</ul><br><hr>
                                                <br>
                                                    <span class="topics">Custos com Funcionários</span>
                                                    <ul class="topic_list">${topico2}</ul><br><hr>
                                                <br>
                                                    <span class="topics">Dados sobre os Ciclos das Aeronaves</span>
                                                    <ul class="topic_list">${topico3}</ul><br><hr>
                                                <br>
                                                    <span class="topics">Gastos Gerais</span>
                                                    <ul class="topic_list">${topico4}</ul><br><hr>
                                                <br>
                                                    <ul class="topic_list">${topico5}</ul>
                                                <br>
                                            </div>                                      
                                            <div class="legenda">
                                                <span class="legenda_titulo">Legenda</span>
                                                <ul class="legenda_lista">
                                                <li><div class='status status_rendimentoPadrao'></div>Valor gerado antes da aplicação dos sensores</li>
                                                <li><div class='status status_rendimentoSensor'></div>Valor gerado após a aplicação dos sensores</li>
                                                <li><div class='status status_despesaPadrao'></div>Gastos antes da aplicação dos sensores</li>
                                                <li><div class='status status_despesaSensor'></div>Gastos após a aplicação dos sensores</li>
                                                <li><div class='status status_economia'></div>Valor economizado com a aplicação dos sensores</li>
                                                <li><div class='status status_outros'></div>Outros</li>
                                                </ul>
                                            </div>`;
    }
}