 /**
 * Função que gerencia uma lista de tarefas.
 * 
 * A função cria um array de tarefas, adiciona três tarefas à lista, remove a última tarefa adicionada
 * e exibe o array final no console.
 * 
 * @returns {void} 
 */
function gerenciarTarefas() {
    let tarefas = [];

    tarefas.push("vamos estudar no senac");
    tarefas.push("bora estudar com o professor thiago");
    tarefas.push("vamos ler um livro de python");

    tarefas.pop();

    console.log(tarefas);
}

gerenciarTarefas();
