// ============================================
// DOAMAIS - HOME
// ============================================

// Lista padrão de doações
let doacoes = [
    {
        titulo: "Roupas Masculinas",
        descricao: "Diversas roupas em ótimo estado.",
        cidade: "Patos de Minas - MG",
        categoria: "Roupas",
        imagem: "img/roupas.jpg"
    },

    {
        titulo: "Cesta Básica",
        descricao: "Alimentos não perecíveis.",
        cidade: "Uberlândia - MG",
        categoria: "Alimentos",
        imagem: "img/cesta.jpg"
    },

    {
        titulo: "Sofá 3 Lugares",
        descricao: "Muito conservado.",
        cidade: "Patrocínio - MG",
        categoria: "Móveis",
        imagem: "img/sofa.jpg"
    },

    {
        titulo: "Bicicleta Infantil",
        descricao: "Pouco uso.",
        cidade: "Araxá - MG",
        categoria: "Brinquedos",
        imagem: "img/bicicleta.jpg"
    }
];

// Procura por novas doações salvas no navegador
const doacoesSalvas = JSON.parse(localStorage.getItem("doacoes"));

if(doacoesSalvas){

    doacoes = [...doacoes, ...doacoesSalvas];

}

// Seleciona os elementos da página
const container = document.querySelector(".doacoes");
const campoPesquisa = document.querySelector(".pesquisa input");
const categoria = document.querySelector(".pesquisa select");
const botaoPesquisar = document.querySelector(".pesquisa button");

// ============================================
// Criar Cards
// ============================================

function carregarDoacoes(lista){

    container.innerHTML = "";

    lista.forEach(doacao=>{

        container.innerHTML += `

        <div class="card">

            <img src="${doacao.imagem}" alt="${doacao.titulo}">

            <h2>${doacao.titulo}</h2>

            <p>${doacao.descricao}</p>

            <p>📍 ${doacao.cidade}</p>

            <button onclick="solicitar('${doacao.titulo}')">

                Solicitar

            </button>

        </div>

        `;

    });

}

// ============================================
// Pesquisar
// ============================================

botaoPesquisar.addEventListener("click", ()=>{

    const texto = campoPesquisa.value.toLowerCase();

    const filtro = categoria.value;

    const resultado = doacoes.filter(item=>{

        const nome = item.titulo.toLowerCase();

        const categoriaValida =
            filtro === "Todas Categorias" ||
            item.categoria === filtro;

        return nome.includes(texto) && categoriaValida;

    });

    carregarDoacoes(resultado);

});

// ============================================
// Solicitar
// ============================================

function solicitar(item){

    alert("Solicitação enviada para: " + item);

}

// ============================================
// Carregar ao abrir
// ============================================

carregarDoacoes(doacoes);