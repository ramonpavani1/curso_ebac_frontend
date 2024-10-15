$(document).ready(function() {
    // Adiciona uma tarefa ao submeter o formulário
    $('#taskForm').on('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém o valor do input
        const taskValue = $('#taskInput').val();

        // Cria um novo item de lista
        const newTask = $('<li>').text(taskValue);

        // Adiciona um ouvinte de evento de clique para marcar a tarefa como concluída
        newTask.on('click', function() {
            $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed'
        });

        // Adiciona o novo item à lista
        $('#taskList').append(newTask);

        // Limpa o campo de input
        $('#taskInput').val('');
    });
});
