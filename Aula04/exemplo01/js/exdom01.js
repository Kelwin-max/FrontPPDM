const texto = document.getElementById('titulo');
const elementobotao = document.getElementById('Botao');

elementobotao.addEventListener('click', function() {
    texto.textContent = "Texto Alterado!";
});