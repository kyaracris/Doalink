// =======================================
// DOAMAIS - CADASTRO
// =======================================

// Mostrar/Ocultar senha
const botaoMostrar = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");

botaoMostrar.addEventListener("click", () => {

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoMostrar.textContent = "🙈";
    } else {
        campoSenha.type = "password";
        botaoMostrar.textContent = "👁";
    }

});

// Formulário
const formulario = document.getElementById("cadastroForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value;
    const tipo = document.getElementById("tipo").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const termos = document.getElementById("termos").checked;

    // Validações

    if(nome === ""){
        alert("Informe seu nome.");
        return;
    }

    if(email === ""){
        alert("Informe seu e-mail.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Digite um e-mail válido.");
        return;
    }

    if(telefone === ""){
        alert("Informe seu telefone.");
        return;
    }

    if(cidade === ""){
        alert("Informe sua cidade.");
        return;
    }

    if(estado === "Selecione"){
        alert("Selecione seu estado.");
        return;
    }

    if(senha.length < 6){
        alert("A senha deve possuir no mínimo 6 caracteres.");
        return;
    }

    if(senha !== confirmarSenha){
        alert("As senhas não são iguais.");
        return;
    }

    if(!termos){
        alert("Você precisa aceitar os Termos de Uso.");
        return;
    }

    // Objeto do usuário
    const usuario = {
        nome,
        email,
        telefone,
        cidade,
        estado,
        tipo
    };

    // Salva temporariamente no navegador
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    // Redireciona para o login
    window.location.href = "login.html";

});