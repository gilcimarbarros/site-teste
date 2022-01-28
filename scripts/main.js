let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/fullstack.png') {
        minhaImagem.setAttribute ('src','imagens/fullstack2.jpg');
    } else {
        minhaImagem.setAttribute ('src','imagens/fullstack.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Meu site é legal,' + meuNome;
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Meu site é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}
