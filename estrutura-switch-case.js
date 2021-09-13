


function acaoBotao(params) {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: +, - , * , /")
    valor02 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
            resultado = parseFloat( valor01 ) + parseFloat( valor02 )
            break;
        case "-":
            resultado = parseFloat( valor01 ) - parseFloat( valor02 )
            break;
        case "*":
            resultado = parseFloat( valor01 ) * parseFloat( valor02 )
            break;     
        case "/":
            resultado = parseFloat( valor01 ) / parseFloat( valor02 )
            break;           
    }

    document.getElementById("paragrafo").innerText = resultado
}
