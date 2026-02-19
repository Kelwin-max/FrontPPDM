const elementoLista = document.getElementById("Lista de Compras");

const elementoInput = document.getElementById("novoItem");

const elementoBotao = document.getElementById("botaoAdicionar");
    const novoProduto = elementoInput.value;
    if (novoProduto !== "") {
        const novoItemElemento = document.createElement("li");
        novoItemElemento.textContent = novoProduto;
        elementoLista.appendChild(novoItemElemento);
        elementoInput.value = "";
    }