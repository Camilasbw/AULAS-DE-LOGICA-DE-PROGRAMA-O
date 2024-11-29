function calcularFatorial(numero) {
    let fatorial = 1;
    let i = numero;

    while (i > 1) {
    fatorial *= i; 
    i--;
    }

    return fatorial;
}

function lerNumero() {
    const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número válido e não negativo.");
    } else {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${resultado}`);
    }
}

lerNumero();
