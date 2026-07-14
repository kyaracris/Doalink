// ==========================================
// DOAMAIS - PAINEL ADMINISTRATIVO
// ==========================================

// ======== DADOS =========

// Lista de usuários
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Compatibilidade com versões antigas
const usuarioAntigo = JSON.parse(localStorage.getItem("usuario"));

if(usuarioAntigo && usuarios.length === 0){
    usuarios.push(usuarioAntigo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Lista de doações
let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Lista de solicitações
let solicitacoes = JSON.parse(localStorage.getItem("solicitacoes")) || [];

// ======== DASHBOARD =========

function atualizarDashboard(){

    document.getElementById("usuarios").textContent = usuarios.length;

    document.getElementById("doacoes").textContent = doacoes.length;

    document.getElementById("solicitacoes").textContent = solicitacoes.length;

    const instituicoes = usuarios.filter(usuario =>
        usuario.tipo === "Instituição"
    );

    document.getElementById("instituicoes").textContent = instituicoes.length;

}

// ======== LISTAR DOAÇÕES =========

const lista = document.getElementById("listaAdmin");

function carregarDoacoes(listaDoacoes){

    lista.innerHTML = "";

    if(listaDoacoes.length === 0){

        lista.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                Nenhuma doação encontrada.
            </h2>
        `;

        return;

    }

    listaDoacoes.forEach((doacao,index)=>{

        lista.innerHTML += `

        <div class="card">

            <img src="${doacao.imagem}" alt="${doacao.titulo}">

            <h2>${doacao.titulo}</h2>

            <p>${doacao.descricao}</p>

            <p><strong>Categoria:</strong> ${doacao.categoria}</p>

            <p>📍 ${doacao.cidade}</p>

            <div class="botoes">

                <button
                    class="editar"
                    onclick="editar(${index})">

                    Editar

                </button>

                <button
                    class="excluir"
                    onclick="excluir(${index})">

                    Excluir

                </button>

            </div>

        </div>

        `;

    });

}

// ======== PESQUISA =========

document
.getElementById("btnPesquisar")
.addEventListener("click", pesquisar);

function pesquisar(){

    const texto = document
    .getElementById("pesquisa")
    .value
    .toLowerCase();

    const resultado = doacoes.filter(doacao=>{

        return doacao.titulo
        .toLowerCase()
        .includes(texto);

    });

    carregarDoacoes(resultado);

}

// ======== EDITAR =========

function editar(indice){

    localStorage.setItem("editarDoacao", indice);

    window.location.href = "editar-doacao.html";

}

// ======== EXCLUIR =========

function excluir(indice){

    const confirmar = confirm(
        "Deseja excluir esta doação?"
    );

    if(!confirmar){

        return;

    }

    doacoes.splice(indice,1);

    localStorage.setItem(
        "doacoes",
        JSON.stringify(doacoes)
    );

    atualizarDashboard();

    carregarDoacoes(doacoes);

}

// ======== INICIAR =========

atualizarDashboard();

carregarDoacoes(doacoes);