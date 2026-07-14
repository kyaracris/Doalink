// =======================================
// DOAMAIS
// SISTEMA DE LOCALIZAÇÃO INTELIGENTE
// =======================================

// Cidades cadastradas
const cidades = {
    "Patos de Minas": {
        proximas: ["Patrocínio", "Araxá", "Monte Carmelo"]
    },

    "Patrocínio": {
        proximas: ["Patos de Minas", "Araxá"]
    },

    "Araxá": {
        proximas: ["Patos de Minas", "Patrocínio"]
    },

    "Uberlândia": {
        proximas: ["Monte Carmelo", "Araguari"]
    }
};

// Retorna o nível de proximidade
function calcularProximidade(cidadeUsuario, cidadeDoacao){

    if(!cidadeUsuario || !cidadeDoacao){

        return {
            texto: "Localização desconhecida",
            nivel: 0
        };

    }

    cidadeUsuario = cidadeUsuario.trim();
    cidadeDoacao = cidadeDoacao.trim();

    // Mesma cidade
    if(cidadeUsuario === cidadeDoacao){

        return {
            texto: "🟢 Muito perto de você",
            nivel: 3
        };

    }

    // Cidade próxima
    if(
        cidades[cidadeUsuario] &&
        cidades[cidadeUsuario].proximas.includes(cidadeDoacao)
    ){

        return {
            texto: "🟡 Cidade próxima",
            nivel: 2
        };

    }

    // Demais cidades
    return {
        texto: "🔴 Outra região",
        nivel: 1
    };

}