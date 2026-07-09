// ================================
// LOGIN - DOAMAIS
// ================================

// Mostrar/Ocultar senha

const botaoMostrar = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");

botaoMostrar.addEventListener("click", () => {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";
        botaoMostrar.innerHTML = "🙈";

    } else {

        campoSenha.type = "password";
        botaoMostrar.innerHTML = "👁";

    }

});

// ================================
// LOGIN
// ================================

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("senha").value.trim();

    if(email === ""){

        alert("Digite seu e-mail.");

        return;

    }

    if(senha === ""){

        alert("Digite sua senha.");

        return;

    }

    // Login temporário
    // Depois será substituído pelo Firebase

    alert("Login realizado com sucesso!");

    window.location.href = "home.html";

});