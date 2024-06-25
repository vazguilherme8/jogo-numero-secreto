let listaDeNumSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = numeroAleatorio();
 

function inserirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute < numeroSecreto) {
        inserirTexto('p', 'O número secreto é maior');
    } else if(chute > numeroSecreto) {
        inserirTexto('p', 'O número secreto é menor');
    } else {
        inserirTexto('h1', 'VOCÊ ACERTOU!');
        let tentativaCorreto = tentativas == 1 ? 'tentativa' : 'tentativas';
        inserirTexto('p', `Parabéns! Você acertou em ${tentativas} ${tentativaCorreto}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    };
    tentativas++;
    limparCampo();
};

function mensagemInicial() {
    inserirTexto('h1', 'Jogo do número secreto');
    inserirTexto('p', 'Insira um número de 1 a 100');
}

function numeroAleatorio() {
    let numeroSorteado = Math.floor(Math.random() * numeroLimite + 1);
    let quantidadeNumerosNaLista = listaDeNumSorteados.length;
    if(quantidadeNumerosNaLista == numeroLimite) {
        listaDeNumSorteados = [];
    }
    if(listaDeNumSorteados.includes(numeroSorteado)) {
        return numeroAleatorio();
    } else {
        listaDeNumSorteados.push(numeroSorteado)
        return numeroSorteado;
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
};

function reset() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
};



mensagemInicial()

console.log(numeroSecreto)