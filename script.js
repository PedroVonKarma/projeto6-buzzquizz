//script da tela 3

let titulo;
let url;
let qtdP;
let qtdN;
const tela3a = document.getElementById('3a')
const tela3b = document.getElementById('3b')
const tela3c = document.getElementById('3c')
const tela3d = document.getElementById('3d')
function pegarDados(){
    titulo = document.querySelector('.titulo').value
    url = document.querySelector('.url').value
    qtdP = document.querySelector('.qtdP').value
    qtdN = document.querySelector('.qtdN').value
    if(titulo.length>19 && titulo.length<66){
        if(url.substring(0, 8) === 'https://'){
            if(qtdP>2 && qtdN>1){
                tela3a.classList.add('hidden');
                tela3b.classList.remove('hidden');
                adicionarXPerguntas(qtdP);
            } else{
        alert('Preencha os dados corretamente')
    }
        }else{
        alert('Preencha os dados corretamente')
    }
    } else{
        alert('Preencha os dados corretamente')
    }
}
function adicionarXPerguntas(x){
    for(let i=0; i<x-1; i++){
        tela3b.innerHTML += `<div class="caixaPergunta caixaFechada">
        <div onclick='selecionarPergunta(this)' class="preg">Pergunta ${i+2} <ion-icon class="edit" name="create-outline"></ion-icon>
        </div><div class="info hidden">
        <input class='inputTela3' placeholder='Texto da pergunta' type="text">
        <input class='inputTela3 lastInputMarg' placeholder='Cor de fundo da pergunta' type="text">
        <p class="perg"></p>Resposta correta</p>
        <input class='inputTela3' placeholder='Resposta correta' type="text">
        <input class='inputTela3 lastInputMarg' placeholder='URL da imagem' type="text">
        <p class="perg"></p>Respostas incorretas</p>
        <input class='inputTela3' placeholder='Resposta incorreta 1' type="text">
        <input class='inputTela3 lastInputMarg' placeholder='URL da imagem 1' type="text">

        <input class='inputTela3' placeholder='Resposta incorreta 2' type="text">
        <input class='inputTela3 lastInputMarg' placeholder='URL da imagem 2' type="text">

        <input class='inputTela3' placeholder='Resposta incorreta 3' type="text">
        <input class='inputTela3 lastInputMarg' placeholder='URL da imagem 3' type="text"></div>
    </div>`
    }
    tela3b.innerHTML += `<button class="prosseguir">Prosseguir pra criar níveis</button>`
}
function selecionarPergunta(divison){
    const x = divison.parentElement
    x.classList.toggle('caixaFechada');
    const edit = x.querySelector('.edit')
    edit.classList.toggle('hidden')
    const info = x.querySelector('.info')
    info.classList.toggle('hidden')
}

//fim do script da tela 3