//script da tela 3

let titulo;
let url;
let qtdP;
let qtdN;
let quizzPronto;
let idsCriados = [];
let idAtual;
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
                adicionarXNiveis(qtdN);
                adicionarTelaFinal(titulo, url);
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
    tela3b.innerHTML = `Crie suas perguntas<div class="caixaPergunta p0">
    <div onclick='selecionarPergunta(this)' class="preg">Pergunta 1 <ion-icon class="edit hidden" name="create-outline"></ion-icon>
    </div><div class="info">
    <input class='inputTela3 txtp' placeholder='Texto da pergunta' type="text">
    <input class='inputTela3 lastInputMarg corp' placeholder='Cor de fundo da pergunta' type="text">
    <p class="perg"></p>Resposta correta</p>
    <input class='inputTela3 trup' placeholder='Resposta correta' type="text">
    <input class='inputTela3 lastInputMarg truimg' placeholder='URL da imagem' type="text">
    <p class="perg"></p>Respostas incorretas</p>
    <input class='inputTela3 fp' placeholder='Resposta incorreta 1' type="text">
    <input class='inputTela3 lastInputMarg fimg' placeholder='URL da imagem 1' type="text">

    <input class='inputTela3 fp2' placeholder='Resposta incorreta 2' type="text">
    <input class='inputTela3 lastInputMarg fimg2' placeholder='URL da imagem 2' type="text">

    <input class='inputTela3 fp3' placeholder='Resposta incorreta 3' type="text">
    <input class='inputTela3 lastInputMarg fimg3' placeholder='URL da imagem 3' type="text"></div>
</div>`
    for(let i=0; i<x-1; i++){
        tela3b.innerHTML += `<div class="caixaPergunta caixaFechada p${i+1}">
        <div onclick='selecionarPergunta(this)' class="preg">Pergunta ${i+2} <ion-icon class="edit" name="create-outline"></ion-icon>
        </div><div class="info hidden">
        <input class='inputTela3 txtp' placeholder='Texto da pergunta' type="text">
        <input class='inputTela3 lastInputMarg corp' placeholder='Cor de fundo da pergunta' type="text">
        <p class="perg"></p>Resposta correta</p>
        <input class='inputTela3 trup' placeholder='Resposta correta' type="text">
        <input class='inputTela3 lastInputMarg truimg' placeholder='URL da imagem' type="text">
        <p class="perg"></p>Respostas incorretas</p>
        <input class='inputTela3 fp' placeholder='Resposta incorreta 1' type="text">
        <input class='inputTela3 lastInputMarg fimg' placeholder='URL da imagem 1' type="text">

        <input class='inputTela3 fp2' placeholder='Resposta incorreta 2' type="text">
        <input class='inputTela3 lastInputMarg fimg2' placeholder='URL da imagem 2' type="text">

        <input class='inputTela3 fp3' placeholder='Resposta incorreta 3' type="text">
        <input class='inputTela3 lastInputMarg fimg3' placeholder='URL da imagem 3' type="text"></div>
    </div>`
    }
    tela3b.innerHTML += `<button onclick='salvarPerguntas()' class="prosseguir">Prosseguir pra criar níveis</button>`
}
function adicionarXNiveis(x){
    tela3c.innerHTML = `Agora, decida os níveis<div class="caixaN n0">
    <div onclick='selecionarPergunta(this)' class="preg">Nível 1 <ion-icon class="edit hidden" name="create-outline"></ion-icon>
    </div><div class="info"> 
    <input class="inputTela3 m1" placeholder="Título do nível" type="text">
    <input class="inputTela3 m2" placeholder="% de acerto mínima" type="text">
    <input class="inputTela3 m3" placeholder="URL da imagem do nível" type="text">
    <input class="inputTela3 m4" placeholder="Descrição do nível" type="text">
</div></div>`
    for(let i=0; i<x-1; i++){
        tela3c.innerHTML += `<div class="caixaN caixaFechada n${i+1}">
            <div onclick='selecionarPergunta(this)' class="preg">Nível ${i+2} <ion-icon class="edit" name="create-outline"></ion-icon>
            </div><div class="info hidden"> 
            <input class="inputTela3 m1" placeholder="Título do nível" type="text">
            <input class="inputTela3 m2" placeholder="% de acerto mínima" type="text">
            <input class="inputTela3 m3" placeholder="URL da imagem do nível" type="text">
            <input class="inputTela3 m4" placeholder="Descrição do nível" type="text">
        </div></div>`
    }
    tela3c.innerHTML += `<button onclick='salvarNiveis()' class="prosseguir">Finalizar Quizz</button>`
}
function selecionarPergunta(divison){
    const x = divison.parentElement
    x.classList.toggle('caixaFechada');
    const edit = x.querySelector('.edit')
    edit.classList.toggle('hidden')
    const info = x.querySelector('.info')
    info.classList.toggle('hidden')
}
let perguntas3;
let ubjeito;
function salvarPerguntas(){
    perguntas3 = [];
    let perguntaAtual;
    let tit;
    let cor3;
    let trup;
    let truimg;
    let kek;
    let fp;
    let fimg;
    let fp2;
    let fimg2;
    let fp3;
    let fimg3;
    for(let i=0; i<qtdP;i++){
        perguntaAtual = document.querySelector(`.p${i}`);
        tit = perguntaAtual.querySelector('.txtp').value
        cor3 = perguntaAtual.querySelector('.corp').value
        trup = perguntaAtual.querySelector('.trup').value
        truimg = perguntaAtual.querySelector('.truimg').value
        fp = perguntaAtual.querySelector('.fp').value
        fimg = perguntaAtual.querySelector('.fimg').value
        fp2 = perguntaAtual.querySelector('.fp2').value
        fimg2 = perguntaAtual.querySelector('.fimg2').value
        fp3 = perguntaAtual.querySelector('.fp3').value
        fimg3 = perguntaAtual.querySelector('.fimg3').value
        if(tit.length<20){
            alert('Preencha os dados corretamente')
            return
        }
        if(cor3.length !== 7 || cor3[0] !== '#'){
            alert('Preencha os dados corretamente')
            return
        }
        if(trup === '' || fp ===''){
            alert('Preencha os dados corretamente')
            return
        }
        if(truimg.substring(0, 8) !== 'https://' || fimg.substring(0, 8) !== 'https://'){
            alert('Preencha os dados corretamente')
            return
        }
        if(fimg2 !== '' && fimg2.substring(0, 8) !== 'https://'){
            alert('Preencha os dados corretamente')
            return 
        }
        if(fimg3 !== '' && fimg3.substring(0, 8) !== 'https://'){
            alert('Preencha os dados corretamente')
            return 
        }
        kek = [
            {
                text: `${trup}`,
                image: `${truimg}`,
                isCorrectAnswer: true
            },
            {
                text: `${fp}`,
                image: `${fimg}`,
                isCorrectAnswer: false
            }
        ]
        if(fp2 !== '' && fimg2 !== ''){
            kek.push({
                text: `${fp2}`,
                image: `${fimg2}`,
                isCorrectAnswer: false
            })
        }
        if(fp3 !== '' && fimg3 !== ''){
            kek.push({
                text: `${fp3}`,
                image: `${fimg3}`,
                isCorrectAnswer: false
            })
        }
        ubjeito = {
			title: `${tit}`,
			color: `${cor3}`,
			answers: kek
		}
        perguntas3.push(ubjeito)
    }
    tela3b.classList.add('hidden');
    tela3c.classList.remove('hidden');
}
let niveis3;
function salvarNiveis(){
    niveis3 = [];
    let nivelAtual;
    let m1;
    let m2;
    let m3;
    let m4;
    let listaDePorc = [];
    for(let i=0; i<qtdN;i++){
        nivelAtual = document.querySelector(`.n${i}`);
        m1 = nivelAtual.querySelector('.m1').value
        m2 = Number(nivelAtual.querySelector('.m2').value)
        m3 = nivelAtual.querySelector('.m3').value
        m4 = nivelAtual.querySelector('.m4').value
        
        if(m1.length<10){
            alert('Preencha os dados corretamente')
            return
        }
        if(m2>100 || m2<0){
            alert('Preencha os dados corretamente')
            return
        }
        if(m3.substring(0, 8) !== 'https://'){
            alert('Preencha os dados corretamente')
            return
        }
        if(m4.length<30){
            alert('Preencha os dados corretamente')
            return
        }
        listaDePorc.push(m2);
        
        ubjeito = {
			title: m1,
			image: m3,
			text: m4,
			minValue: m2
		};
        niveis3.push(ubjeito)
    }
    if(!listaDePorc.includes(0)){
        alert('Preencha os dados corretamente')
            return
    }
    quizzPronto = {
        title: titulo,
        image: url,
        questions: perguntas3,
        levels: niveis3
    }
    mandarQuizz(quizzPronto);
}
function adicionarTelaFinal(x, y){
    tela3d.innerHTML = `Seu quizz está pronto!
    <div class="divimgt3"><img
            src="${y}"
            class="imgt3">
        <div class="gradient"></div>
        <p class="tt3">${x}</p>
    </div>
    <button class="prosseguir2">Acessar Quizz</button>
    <button onclick='voltar()' class="home">Voltar pra home</button>`
}
function mandarQuizz(quiz){
    const promiseM = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quiz)
    promiseM.then(deuBom)
    promiseM.catch(deuRuim)
}
function deuBom(x){
    idAtual = x.data.id
    idsCriados.push(x.data.id)
    tela3c.classList.add('hidden');
    tela3d.classList.remove('hidden');
    const listaDeIds = JSON.stringify(idsCriados);
    localStorage.setItem("ids", listaDeIds);
}
function deuRuim(){
    alert('Ocorreu algum erro, tente novamente mais tarde')
            return
}
function voltar(){
    tela3d.classList.add('hidden')
}



//fim do script da tela 3
// pra acessar o quizz criado, é só acessar o quiz de id "idAtual"

// pra acessar os ids de quizzes criados, usar a função "const nomeDaVariavel = localStorage.getItem("ids")"
// que deve retornar um array com os ids dos quizzes do usuario