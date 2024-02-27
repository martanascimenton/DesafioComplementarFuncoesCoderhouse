
function inserirNumeros() {
    const numero1 = parseInt(prompt("Insira o primeiro número:"));
    const numero2 = parseInt(prompt("Insira o segundo número:"));
    verificarMultiplos(numero1, numero2);
}

function verificarMultiplos(num1, num2) {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        console.log(`${num1} e ${num2} são múltiplos um do outro.`);
    } else {
        console.log(`${num1} e ${num2} não são múltiplos um do outro.`);
    }
}

function mostrarResultado() {
    console.log("Verificação de múltiplos concluída.");
}

inserirNumeros();
mostrarResultado();
