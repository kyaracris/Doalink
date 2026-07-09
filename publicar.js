// ========================================
// DOAMAIS
// PUBLICAR DOAÇÃO
// ========================================

const formulario = document.getElementById("formDoacao");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();

    const descricao = document.getElementById("descricao").value.trim();

    const categoria = document.getElementById("categoria").value;

    const cidade = document.getElementById("cidade").value.trim();

    let imagem = document.getElementById("imagem").value.trim();

    // Validações

    if(titulo === ""){

        alert("Informe o nome do item.");

        return;

    }

    if(descricao === ""){

        alert("Informe uma descrição.");

        return;

    }

    if(cidade === ""){

        alert("Informe a cidade.");

        return;

    }

    // Caso o usuário não informe imagem

    if(imagem === ""){

        imagem = "img/sem-imagem.png";

    }

    // Criando objeto

    const novaDoacao = {

        titulo: titulo,

        descricao: descricao,

        categoria: categoria,

        cidade: cidade,

        imagem: imagem

    };

    // Busca as doações existentes

    let lista = JSON.parse(localStorage.getItem("doacoes")) || [];

    // Adiciona nova doação

    lista.push(novaDoacao);

    // Salva novamente

    localStorage.setItem("doacoes", JSON.stringify(lista));

    alert("Doação publicada com sucesso!");

    formulario.reset();

    window.location.href = "home.html";

});