// Seleciona o formulário e o elemento onde a mensagem será exibida
const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

// Adiciona um ouvinte de evento ao formulário para o evento de submissão
formulario.addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado
    event.preventDefault();

    // Obtém os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});
