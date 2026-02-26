const loadingElement = document.getElementById('loading'); // Seleciona o elemento de carregamento para mostrar ou esconder durante a requisição
const productElement = document.getElementById('product'); // Seleciona o elemento onde os dados do produto serão exibidos
const errorElement = document.getElementById('error'); // Seleciona o elemento onde as mensagens de erro serão exibidas

fetch('https://fakestoreapi.com/products/1')
    .then(response => { // Verifica se a resposta foi bem-sucedida
        if (!response.ok) { // Se a resposta não for OK, lança um erro
            throw new Error('Erro ao buscar produto: ' + response.status); // Lança um erro para ser capturado no catch
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        loadingElement.style.display = 'none'; // Esconde o indicador de carregamento
        productElement.innerHTML = `
            <h2>${data.title}</h2> 
            <p>${data.description}</p> 
            <img src="${data.image}" alt="${data.title}"/>
        `; 
    })
    .catch(error => {   // Captura e exibe erros que ocorrerem durante a requisição
        loadingElement.style.display = 'none'; // Esconde o indicador de carregamento em caso de erro
        errorElement.textContent = error.message;   // Exibe a mensagem de erro na página
    });