// ==========================================
// DOAMAIS
// MÓDULO DE RECOMENDAÇÃO INTELIGENTE
// ==========================================

// Calcula a pontuação de uma doação
function calcularPontuacao(doacao, usuario){

    let pontos = 0;

    // Cidade igual
    if(
        usuario &&
        doacao.cidade &&
        usuario.cidade &&
        doacao.cidade.toLowerCase() === usuario.cidade.toLowerCase()
    ){
        pontos += 50;
    }

    // Doação nova (até 7 dias)
    if(doacao.dataPublicacao){

        const hoje = new Date();

        const data = new Date(doacao.dataPublicacao);

        const dias = (hoje - data) / (1000 * 60 * 60 * 24);

        if(dias <= 7){

            pontos += 20;

        }

    }

    // Popularidade
    if(doacao.visualizacoes){

        pontos += doacao.visualizacoes;

    }

    // Solicitações recebidas
    if(doacao.solicitacoes){

        pontos += doacao.solicitacoes * 5;

    }

    return pontos;

}

// Ordena automaticamente
function ordenarDoacoes(doacoes, usuario){

    return doacoes.sort((a,b)=>{

        return calcularPontuacao(b,usuario)
             - calcularPontuacao(a,usuario);

    });

}