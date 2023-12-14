statusInicial(1);
statusInicial(2);
statusInicial(3);
let qtdJogosAlugados = 0;

function alterarStatus(numeroJogo){
    let jogo = document.getElementById(`game-${numeroJogo}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name').textContent;
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
       
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert('Devolução do jogo ' + nomeJogo + ' realizado com sucesso!\nTemos muitos outros jogos te esperando!!!');
        qtdJogosAlugados--;
        console.log('Número de jogos alugados no momento: ' + qtdJogosAlugados);

    }else {
       
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert('Aluguel do jogo ' + nomeJogo + ' realizado com sucesso!\nAproveite e Divirta-se!!!');
        qtdJogosAlugados++;
        console.log('Número de jogos alugados no momento: ' + qtdJogosAlugados);
    }
}

function statusInicial(numeroJogo){
    let jogo = document.getElementById(`game-${numeroJogo}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');

    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
}

