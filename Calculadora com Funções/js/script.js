// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtracao(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicacao(a, b) {
    return a * b;
}

// Função para dividir dois números
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    } else {
        return a / b;
    }
}

// Função principal que executa a operação escolhida pelo usuário
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    // Verifica qual operação o usuário escolheu e chama a função correspondente
    if (operacao === "+") {
        resultado = soma(num1, num2);
    } else if (operacao === "-") {
        resultado = subtracao(num1, num2);
    } else if (operacao === "*") {
        resultado = multiplicacao(num1, num2);
    } else if (operacao === "/") {
        resultado = divisao(num1, num2);
    }

    // Exibe o resultado no console e na tela
    console.log(`Resultado: ${resultado}`);
    document.getElementById("res").textContent = resultado;
}
