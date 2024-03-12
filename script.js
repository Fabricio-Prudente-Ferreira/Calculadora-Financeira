function calculo(){
    //Variáveis para os Inputs
    var valorManutencao = Number(input_manutencao.value) * 1_000_000;
    var valorFuncionario = Number(input_funcionario.value) * 1_000_000;
    var qtdCiclo = Number(input_qtdCiclo.value);
    var valorCiclo = Number(input_ciclo.value) * 1_000_000;
    var qtdMotor = Number(input_qtdMotor.value);

    //Variáveis default
    var custoInstall = 15000 * qtdMotor;
    var qtdFuncionario = parseInt(valorFuncionario / 60000);
    var custoPreparacao = 2500 * qtdFuncionario;

    //Validação
    if(valorManutencao <= 0 || valorFuncionario <= 0 || qtdCiclo <= 0 || valorCiclo <= 0 || qtdMotor <= 0){
        alert("Por favor, preencha todos os campos com números positivos diferentes de 0.")
    } else {

        /* ======================== Cálculos ======================== */

        //Manutenção
        var manutencaoReduz = valorManutencao - (valorManutencao * 0.22);
        var lucroManutencao = valorManutencao - manutencaoReduz;

        //Funcionários
        var funcionarioReduz = valorFuncionario - (valorFuncionario * 0.1);
        var lucroFuncionario = valorFuncionario - funcionarioReduz - custoPreparacao;

        //Ciclos
        var cicloLucro = valorCiclo * 1.1; //Lucro padrão de aproximadamente 10%
        var valorPorCiclo = valorCiclo / qtdCiclo; //Lucro gerado a cada ciclo do avião a jato (sem o sensor)
        var novoValorPorCiclo = cicloLucro / qtdCiclo; //Lucro gerado a cada ciclo do avião a jato (com o sensor)
        var lucroCicloPorAno = novoValorPorCiclo * qtdCiclo; //Lucro gerado por ano (com o sensor)

        //Custos Gerais
        var custoTotalAntes = valorManutencao + valorFuncionario; //Custos sem os sensores
        var custoTotalDepois = manutencaoReduz + funcionarioReduz + custoPreparacao + custoInstall; //Gastos com a implementação dos sensores
        var lucro = custoTotalAntes - custoTotalDepois; //Comparação entre os valores sem e com os sensores
        var porcentagemLucro = (100 * lucro / custoTotalAntes).toFixed(2); //Porcentagem do lucro

        //Formatar valores em Reais
        var custoInstallRS = custoInstall.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var valorManutencaoRS = valorManutencao.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var manutencaoReduzRS = manutencaoReduz.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var lucroManutencaoRS = lucroManutencao.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var valorFuncionarioRS = valorFuncionario.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var funcionarioReduzRS = funcionarioReduz.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var custoPreparacaoRS = custoPreparacao.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var lucroFuncionarioRS = lucroFuncionario.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var valorCicloRS = valorCiclo.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var valorPorCicloRS = valorPorCiclo.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var novoValorPorCicloRS = novoValorPorCiclo.toLocaleString("pt-br", {style: "currency", currency: "BRL"}); 
        var lucroCicloPorAnoRS = lucroCicloPorAno.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var custoTotalAntesRS = custoTotalAntes.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var custoTotalDepoisRS = custoTotalDepois.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        var lucroRS = lucro.toLocaleString("pt-br", {style: "currency", currency: "BRL"});

        //Status
        var div_lucroPadrao = "<div class='topic_class'>Classificação: <div class='status status_lucroPadrao'></div></div>";
        var div_lucroSensor = "<div class='topic_class'>Classificação: <div class='status status_lucroSensor'></div></div>";
        var div_despesaPadrao = "<div class='topic_class'>Classificação: <div class='status status_despesaPadrao'></div></div>";
        var div_despesaSensor = "<div class='topic_class'>Classificação: <div class='status status_despesaSensor'></div></div>";
        var div_outros = "<div class='topic_class'>Classificação: <div class='status status_outros'></div></div>";

        //Mensagens
        var topico1 = `<li>Custo padrão para a instalação dos sensores: R$ 15.000,00 por motor (${custoInstallRS} ao todo)${div_despesaSensor}</li><li>Valor da manutenção dos motores (sem os sensores): ${valorManutencaoRS}${div_despesaPadrao}</li><li>Valor da manutenção dos motores (com os sensores): ${manutencaoReduzRS}${div_despesaSensor}</li><li>Lucro com os motores: ${lucroManutencaoRS}${div_lucroSensor}</li>`;
        
        var topico2 = `<li>Custo com funcionários (sem os sensores): ${valorFuncionarioRS}${div_despesaPadrao}</li><li>Custo com funcionários (com os sensores): ${funcionarioReduzRS}${div_despesaSensor}</li><li>Custo com preparação de funcionários: ${custoPreparacaoRS} (R$ 2.500,00 por funcionário)${div_despesaSensor}</li><li>Lucro com os funcionários: ${lucroFuncionarioRS}${div_lucroSensor}</li>`;
        
        var topico3 = `<li>Quantidade de ciclos das aeronaves (por ano): ${qtdCiclo}${div_outros}</li><li>Valor gerado com os ciclos das aeronaves (por ano e sem os sensores): ${valorCicloRS}${div_lucroPadrao}</li><li>Valor aproximado gerado com cada ciclo de avião (sem os sensores): ${valorPorCicloRS}${div_lucroPadrao}</li><li>Valor aproximado gerado com cada ciclo de avião (com os sensores): ${novoValorPorCicloRS}${div_lucroSensor}</li><li>Valor gerado com os ciclos das aeronaves (por ano e com os sensores): ${lucroCicloPorAnoRS}${div_lucroSensor}</li>`;
        
        var topico4 = `<li>Gastos gerais (sem os sensores): ${custoTotalAntesRS}${div_despesaPadrao}</li><li>Gastos gerais (com os sensores): ${custoTotalDepoisRS}${div_despesaSensor}</li><strong><li>Lucro: ${lucroRS} (Lucro de, aproximadamente, ${porcentagemLucro}%)${div_lucroSensor}</li></strong>`;

        //Mostrar na tela
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
                                                    <span class="topics">Gastos Gerais (Lucros & Prejuízos)</span>
                                                    <ul class="topic_list">${topico4}</ul>
                                                <br>
                                            </div>                                      
                                            <div class="legenda">
                                                <span class="legenda_titulo">Legenda</span>
                                                <ul class="legenda_lista">
                                                <li><div class='status status_lucroPadrao'></div>Lucro gerado sem os sensores</li>
                                                <li><div class='status status_lucroSensor'></div>Lucro gerado com os sensores</li>
                                                <li><div class='status status_despesaPadrao'></div>Gastos sem os sensores</li>
                                                <li><div class='status status_despesaSensor'></div>Gastos com os sensores</li>
                                                <li><div class='status status_outros'></div>Outros</li>
                                                </ul>
                                            </div>`;
    }
}
