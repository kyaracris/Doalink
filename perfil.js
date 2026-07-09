// ===============================
// DOAMAIS - PERFIL
// ===============================

const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

    document.getElementById("nomeUsuario").textContent =
        usuario.nome;

    document.getElementById("emailUsuario").textContent =
        "📧 " + usuario.email;

    document.getElementById("cidadeUsuario").textContent =
        "📍 " + usuario.cidade + " - " + usuario.estado;

    document.getElementById("tipoUsuario").textContent =
        "👤 " + usuario.tipo;

}

function editarPerfil(){

    alert("Função disponível na próxima versão do sistema.");

}