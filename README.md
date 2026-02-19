# Dominando o DOM (Document Object Model)

Este repositório contém anotações e exemplos práticos sobre como o JavaScript interage com o HTML para criar experiências dinâmicas na web.

---

## O que é o DOM?

O **Document Object Model** é uma interface de programação para documentos HTML e XML. Ele representa a página como uma estrutura de árvore, onde cada elemento, atributo ou texto é um "nó".



Quando o navegador carrega uma página, ele cria essa representação interna, permitindo que o JavaScript:
* **Adicione, remova ou altere** elementos HTML.
* **Modifique estilos CSS** em tempo real.
* **Reaja a eventos** do usuário (cliques, digitação, scroll).

---

## Principais Métodos de Seleção

Para manipular o DOM, o primeiro passo é selecionar o elemento alvo:

| Método | Descrição |
| :--- | :--- |
| `getElementById()` | Seleciona um elemento único pelo seu ID. |
| `getElementsByClassName()` | Retorna uma coleção de elementos com aquela classe. |
| `querySelector()` | Seleciona o **primeiro** elemento que coincide com um seletor CSS. |
| `querySelectorAll()` | Retorna **todos** os elementos (NodeList) que coincidem com o seletor. |

---

## Manipulação na Prática

### 1. Alterando Conteúdo e Estilo
```javascript
const titulo = document.querySelector('h1');

// Alterando o texto
titulo.textContent = "Olá, Mundo!";

// Alterando o CSS diretamente
titulo.style.color = "blue";
titulo.style.backgroundColor = "#f4f4f4";
