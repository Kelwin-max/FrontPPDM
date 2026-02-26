const fatogatoElement = document.getElementById('fatogato');
const buscarFatoElement = document.getElementById('buscarfato');

async function buscarGato() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        fatogatoElement.textContent = data.fact;
    } catch (error) {
        fatogatoElement.textContent = "Erro ao buscar fato sobre gatos.";
    }
}

buscarFatoElement.addEventListener('click', buscarGato);
buscarGato();