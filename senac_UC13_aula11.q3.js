/**
 * Jogo de adivinhação de número entre 1 e 10.
 *
 * @returns {void}
 */
function jogoAdivinhacao() {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    let tentativa;

    while (true) {
        tentativa = prompt("Adivinhe o número (entre 1 e 10) ou digite 'sair' para encerrar:");

        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo. Até a próxima!");
            break;
        }

        const numero = parseInt(tentativa, 10);
        if (numero === numeroCorreto) {
            console.log("Parabéns! Você acertou!");
            break;
        } else if (!isNaN(numero)) {
            console.log("Tente novamente!");
        } else {
            console.log("Por favor, insira um número válido.");
        }
    }
}

jogoAdivinhacao();