// =======================================
// DOAMAIS - EDITAR DOAÇÃO
// =======================================

// Busca todas as doações
let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Índice da doação escolhida
const indice = localStorage.getItem("editarDoacao");

// Verifica se existe uma doação para editar
if(indice === null){

    alert("Nenhuma doação foi selecionada.");

    window.location.href = "minhas-doacoes.html";

}

// Carrega a doação
const doacao = doacoes[indice];

// Preenche os campos
document.getElementById("titulo").value = doacao.titulo;

document.getElementById("descricao").value = doacao.descricao;

document.getElementById("categoria").value = doacao.categoria;

document.getElementById("cidade").value = doacao.cidade;

document.getElementById("imagem").value = doacao.imagem;

// Formulário
const formulario = document.getElementById("formEditar");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    doacoes[indice] = {

        titulo: document.getElementById("titulo").value,

        descricao: document.getElementById("descricao").value,

        categoria: document.getElementById("categoria").value,

        cidade: document.getElementById("cidade").value,

        imagem: document.getElementById("imagem").value

    };

    // Salva novamente
    localStorage.setItem("doacoes", JSON.stringify(doacoes));

    // Remove o índice salvo
    localStorage.removeItem("editarDoacao");

    alert("Doação atualizada com sucesso!");

    // Volta para Minhas Doações
    window.location.href = "minhas-doacoes.html";

});