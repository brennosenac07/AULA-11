/**
 * Calcula e exibe a média das notas de alunos armazenadas em um array aninhado.
 * Cada aluno possui um array contendo seu nome e suas notas.
 * @returns
 */
function calcularMediaAlunos() {
    let alunos = [
        ["Brenno", [8, 7, 9]],
        ["Albert", [6, 7.5, 8]],
        ["Henrique", [10, 9, 9.5]]
    ];

    for (let i = 0; i < alunos.length; i++) {
        let nome = alunos[i][0]; 
        let notas = alunos[i][1]; 
        let soma = 0;

        for (let j = 0; j < notas.length; j++) {
            soma += notas[j];
        }

        let media = soma / notas.length;

        console.log(`Aluno: ${nome}, Média: ${media.toFixed(2)}`);
    }
}

calcularMediaAlunos();
