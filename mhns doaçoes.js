// ======================================
// DOAMAIS - MINHAS DOAÇÕES
// ======================================

// Pega as doações salvas
let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

const lista = document.getElementById("listaDoacoes");

// =============================
// Carregar Doações
// =============================

function carregarDoacoes(){

    lista.innerHTML = "";

    if(doacoes.length === 0){

        lista.innerHTML = `

        <div style="text-align:center;width:100%;padding:50px;">

            <h2>Nenhuma doação cadastrada.</h2>

            <p>Clique em "Publicar" para cadastrar sua primeira doação.</p>

        </div>

        `;

        return;

    }

    doacoes.forEach((doacao,index)=>{

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
                    onclick="editarDoacao(${index})">

                    Editar

                </button>

                <button
                    class="excluir"
                    onclick="excluirDoacao(${index})">

                    Excluir

                </button>

            </div>

        </div>

        `;

    });

}

// =============================
// Excluir
// =============================

function excluirDoacao(indice){

    const confirmar = confirm("Deseja realmente excluir esta doação?");

    if(!confirmar){

        return;

    }

    doacoes.splice(indice,1);

    localStorage.setItem("doacoes",JSON.stringify(doacoes));

    carregarDoacoes();

}

// =============================
// Editar
// =============================

function editarDoacao(indice){

    localStorage.setItem("editarDoacao",indice);

    window.location.href="editar-doacao.html";

}

// =============================
// Iniciar
// =============================

carregarDoacoes();