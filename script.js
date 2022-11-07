//script da tela 3
const listaStringzada = localStorage.getItem("ids");
let titulo;
let url;
let qtdP;
let qtdN;
let quizzPronto;



/* let idsCriados = [] 
   idsCriados.push( JSON.parse(listaStringzada) )

armazena arrays dentro de arrays, impossibilitando a filtragem (ou ao menos tornando-a difícil de implementar)

*/

let idsCriados = JSON.parse(listaStringzada)   /* em uma primeira iteração, não funciona (pois idsCriados
                                               está como null). Porém, utilizando o formato comentado acima
                                               para contornar o problema da primeira vez, esta forma armazena os ids 
                                               corretamente, devolvendo: [null, id1, id2, id3, id4.....] */

let idAtual;
const tela3a = document.getElementById('3a')
const tela3b = document.getElementById('3b')
const tela3c = document.getElementById('3c')
const tela3d = document.getElementById('3d')
function pegarDados() {
    titulo = document.querySelector('.titulo').value
    url = document.querySelector('.url').value
    qtdP = document.querySelector('.qtdP').value
    qtdN = document.querySelector('.qtdN').value
    if (titulo.length > 19 && titulo.length < 66) {
        if (url.substring(0, 4) === 'http') {
            if (qtdP > 2 && qtdN > 1) {
                tela3a.classList.add('hidden');
                tela3b.classList.remove('hidden');
                adicionarXPerguntas(qtdP);
                adicionarXNiveis(qtdN);
                adicionarTelaFinal(titulo, url);
            } else {
                alert('Preencha os dados corretamente')
            }
        } else {
            alert('Preencha os dados corretamente')
        }
    } else {
        alert('Preencha os dados corretamente')
    }
}
function adicionarXPerguntas(x) {
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
    for (let i = 0; i < x - 1; i++) {
        tela3b.innerHTML += `<div class="caixaPergunta caixaFechada p${i + 1}">
        <div onclick='selecionarPergunta(this)' class="preg">Pergunta ${i + 2} <ion-icon class="edit" name="create-outline"></ion-icon>
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
function adicionarXNiveis(x) {
    tela3c.innerHTML = `Agora, decida os níveis<div class="caixaN n0">
    <div onclick='selecionarPergunta(this)' class="preg">Nível 1 <ion-icon class="edit hidden" name="create-outline"></ion-icon>
    </div><div class="info"> 
    <input class="inputTela3 m1" placeholder="Título do nível" type="text">
    <input class="inputTela3 m2" placeholder="% de acerto mínima" type="text">
    <input class="inputTela3 m3" placeholder="URL da imagem do nível" type="text">
    <input class="inputTela3 m4" placeholder="Descrição do nível" type="text">
</div></div>`
    for (let i = 0; i < x - 1; i++) {
        tela3c.innerHTML += `<div class="caixaN caixaFechada n${i + 1}">
            <div onclick='selecionarPergunta(this)' class="preg">Nível ${i + 2} <ion-icon class="edit" name="create-outline"></ion-icon>
            </div><div class="info hidden"> 
            <input class="inputTela3 m1" placeholder="Título do nível" type="text">
            <input class="inputTela3 m2" placeholder="% de acerto mínima" type="text">
            <input class="inputTela3 m3" placeholder="URL da imagem do nível" type="text">
            <input class="inputTela3 m4" placeholder="Descrição do nível" type="text">
        </div></div>`
    }
    tela3c.innerHTML += `<button onclick='salvarNiveis()' class="prosseguir">Finalizar Quizz</button>`
}
function selecionarPergunta(divison) {
    const x = divison.parentElement
    x.classList.toggle('caixaFechada');
    const edit = x.querySelector('.edit')
    edit.classList.toggle('hidden')
    const info = x.querySelector('.info')
    info.classList.toggle('hidden')
}
let perguntas3;
let ubjeito;
function salvarPerguntas() {
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
    for (let i = 0; i < qtdP; i++) {
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
        if (tit.length < 20) {
            alert('Preencha os dados corretamente')
            return
        }
        if (cor3.length !== 7 || cor3[0] !== '#') {
            alert('Preencha os dados corretamente')
            return
        }
        if (trup === '' || fp === '') {
            alert('Preencha os dados corretamente')
            return
        }
        if (truimg.substring(0, 4) !== 'http' || fimg.substring(0, 4) !== 'http') {
            alert('Preencha os dados corretamente')
            return
        }
        if (fimg2 !== '' && fimg2.substring(0, 4) !== 'http') {
            alert('Preencha os dados corretamente')
            return
        }
        if (fimg3 !== '' && fimg3.substring(0, 4) !== 'http') {
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
        if (fp2 !== '' && fimg2 !== '') {
            kek.push({
                text: `${fp2}`,
                image: `${fimg2}`,
                isCorrectAnswer: false
            })
        }
        if (fp3 !== '' && fimg3 !== '') {
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
function salvarNiveis() {
    niveis3 = [];
    let nivelAtual;
    let m1;
    let m2;
    let m3;
    let m4;
    let listaDePorc = [];
    for (let i = 0; i < qtdN; i++) {
        nivelAtual = document.querySelector(`.n${i}`);
        m1 = nivelAtual.querySelector('.m1').value
        m2 = Number(nivelAtual.querySelector('.m2').value)
        m3 = nivelAtual.querySelector('.m3').value
        m4 = nivelAtual.querySelector('.m4').value

        if (m1.length < 10) {
            alert('Preencha os dados corretamente')
            return
        }
        if (m2 > 100 || m2 < 0) {
            alert('Preencha os dados corretamente')
            return
        }
        if (m3.substring(0, 4) !== 'http') {
            alert('Preencha os dados corretamente')
            return
        }
        if (m4.length < 30) {
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
    if (!listaDePorc.includes(0)) {
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
function adicionarTelaFinal(x, y) {
    tela3d.innerHTML = `Seu quizz está pronto!
    <div class="divimgt3"><img
            src="${y}"
            class="imgt3">
        <div class="gradient"></div>
        <p class="tt3">${x}</p>
    </div>
    <button onclick='seguirQuizz()' class="prosseguir2">Acessar Quizz</button>
    <button onclick='voltar()' class="home">Voltar pra home</button>`
}
function mandarQuizz(quiz) {
    const promiseM = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quiz)
    promiseM.then(deuBom)
    promiseM.catch(deuRuim)
}
function deuBom(x) {

    if(idsCriados == null){
        idsCriados = [] 
        idsCriados.push( JSON.parse(listaStringzada) )
    idAtual = x.data.id
    idsCriados.push(idAtual)
    tela3c.classList.add('hidden');
    tela3d.classList.remove('hidden');
    let listaDeIds = JSON.stringify(idsCriados);
    localStorage.removeItem("ids");
    localStorage.setItem("ids", listaDeIds);
    } else{
        idAtual = x.data.id
    idsCriados.push(idAtual)
    tela3c.classList.add('hidden');
    tela3d.classList.remove('hidden');
    let listaDeIds = JSON.stringify(idsCriados);
    localStorage.removeItem("ids");
    localStorage.setItem("ids", listaDeIds);
    }
}
function deuRuim() {
    alert('Ocorreu algum erro, tente novamente mais tarde')
    return
}
function voltar() {
    
    tela3d.classList.add('hidden');
    mother.classList.remove('hidden');
    window.location.reload();
}

function seguirQuizz() {
    tela3d.classList.toggle('hidden')
    tela02.classList.toggle('hidden')
    window.scrollTo(0, 0);
    id = res.id;
    console.log(id);

    let requestListaQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    requestListaQuizzes.then(printar);
    function printar(promise) {
        listaQuizzes = promise.data;
        for (let i = 0; i < promise.data.length; i++) {
            if (listaQuizzes[i].id == id) {
                tela01.classList.toggle("hidden");
                tela02.classList.toggle("hidden");
                tela02.innerHTML += `<section class="tituloQuizz">${listaQuizzes[i].title}</section>
                <section class="fundoQuizz">
                    <img src="${listaQuizzes[i].image} ">
                </section>`;
                for (let j = 0; j < listaQuizzes[i].questions.length; j++) {
                    let zz = document.getElementById("critico-tela2");
                    zz.innerHTML += `
                <div class="centralizada">
                    <div class="caixaDePerguntas" id = "${j}a">
                        <div class="fundoPergunta" id = "${j}">

                            <p>${listaQuizzes[i].questions[j].title}</p>
                        </div>
                    </div>
                </div>`
                    shuffleArray(listaQuizzes[i].questions[j].answers);
                    for (let k = 0; k < listaQuizzes[i].questions[j].answers.length; k++) {
                        let zzz = document.getElementById(j + "a");
                        let zzzz = document.getElementById(j);
                        zzzz.style.backgroundColor = listaQuizzes[i].questions[j].color;
                        if (listaQuizzes[i].questions[j].answers[k].isCorrectAnswer == true) {
                            zzz.innerHTML += `<div class="alternativa correta" onclick = "checarAlternativa(this)" id = "${k}b">
                        <img src="${listaQuizzes[i].questions[j].answers[k].image}">
                        ${listaQuizzes[i].questions[j].answers[k].text}
                    </div>`;
                        }
                        else {
                            zzz.innerHTML += `<div class="alternativa incorreta" onclick = "checarAlternativa(this)" id = "${k}b">
                            <img src="${listaQuizzes[i].questions[j].answers[k].image}">
                            ${listaQuizzes[i].questions[j].answers[k].text}
                        </div>`;

                        }

                    }

                }
             
            }

        }
    }
    let fundoTela02 = document.getElementById("critico-tela2");
    fundoTela02.children[1].scrollIntoView();
}




//fim do script da tela 3
// pra acessar o quizz criado, é só acessar o quiz de id "idAtual"

// pra acessar os ids de quizzes criados, usar a função "const nomeDaVariavel = localStorage.getItem("ids")"
// que deve retornar um array com os ids dos quizzes do usuario






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//script da tela 2
// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
let contador = 0;
let corretas = 0;
let y = 720;
let id;
const tela01 = document.getElementById("tela01");
const tela02 = document.getElementById("tela2");
let listaQuizzes = [];


function reiniciarQuizz() {
    window.scrollTo(0,0);
    contador = 0;
    corretas = 0;
    y = 720;
    id;
    let fundoTela02 = document.getElementById("critico-tela2");
    let filhos = fundoTela02.children;
    fundoTela02.removeChild(fundoTela02.lastChild);
    fundoTela02.removeChild(fundoTela02.lastChild);
    fundoTela02.removeChild(fundoTela02.lastChild);
    fundoTela02.removeChild(fundoTela02.lastChild);
    fundoTela02.removeChild(fundoTela02.lastChild);
    console.log(filhos);
    for (let i = 0; i < filhos.length; i++) {
        let netos = filhos[i].children[0].children;
        for (let j = 1; j < netos.length; j++) {
            netos[j].style.color = "black";
            netos[j].style.opacity = 1;
            netos[j].setAttribute('onclick', 'checarAlternativa(this)');
        }
    }
    window
}
function voltarHome() {
    window.scrollTo(0,0);
    let fundoTela02 = document.getElementById("critico-tela2");
    fundoTela02.innerHTML = "";
    tela01.classList.toggle("hidden");
    tela02.classList.toggle('hidden');
    contador = 0;
    corretas = 0;
    y = 720;
    id = 0;
}

function checarAlternativa(alternativa) {
    let check = alternativa.classList;
    let pai = alternativa.parentElement;
    let cc = pai.children;
    contador++;
    let stop = cc.length;
    if (check.contains("correta")) {
        corretas++;
    }
    for (let i = 0; i < listaQuizzes.length; i++) {
        if (listaQuizzes[i].id == id) {
            setTimeout(() => {
                window.scrollTo(0, y);
                y += 700;
            }, 2000);
            setTimeout(() => {
                if (contador == stop) {
                    for (let j = listaQuizzes[i].levels.length - 1; j >= 0; j--) {
                        if ((corretas / contador) * 100 >= listaQuizzes[i].levels[j].minValue) {
                            console.log(listaQuizzes[i].levels[j]);
                            alternativa.parentElement.parentElement.parentElement.innerHTML += `<div class="centralizada">
                        <div class="caixaDePerguntas" id "parabenizacao">
                            <div class="fundoPergunta" id = "tituloParabenizacao">
                                ${Math.ceil((corretas/contador)*100)}% de acerto: ${listaQuizzes[i].levels[j].title}
                            </div>
                            <div class="imagemDesempenho">
                                <img src="${listaQuizzes[i].levels[j].image}">
                            </div>
                            <div class="textoDesempenho">
                                <p>${listaQuizzes[i].levels[j].text}</p>
                            </div>
                        </div>
                    </div>
                    <div class = "centralizada">
                    <div class="reiniciarQuizz" onclick = "reiniciarQuizz(this)" >Reiniciar quizz</div>
                    </div>
                    <div class = "centralizada">
                    <div class="voltarHome" onclick = "voltarHome(this)">Voltar pra home</div>
                    </div>`
                        }
                        else { console.log("comparacao deu ruim"); }
                    }

                };
            }, 1000);
        }
    }



    for (let i = 1; i < cc.length; i++) {

        let seila = cc[i].classList.value

        if (seila == "alternativa correta") {
            cc[i].style.color = "green";
            cc[i].setAttribute('onclick', '');

        }

        if (seila == "alternativa incorreta") {
            cc[i].style.color = "red";
            cc[i].setAttribute('onclick', '');
        }

        if (cc[i].id != alternativa.id) {
            cc[i].style.opacity = 0.3;
        }


    }

}



function abrirQuizz(res) {
    window.scrollTo(0, 0);
    id = res.id;
    console.log(id);

    let requestListaQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    requestListaQuizzes.then(printar);
    function printar(promise) {
        listaQuizzes = promise.data;
        for (let i = 0; i < promise.data.length; i++) {
            if (listaQuizzes[i].id == id) {
                tela01.classList.toggle("hidden");
                tela02.classList.toggle("hidden");
                tela02.innerHTML += `<section class="tituloQuizz">${listaQuizzes[i].title}</section>
                <section class="fundoQuizz">
                    <img src="${listaQuizzes[i].image} ">
                </section>`;
                for (let j = 0; j < listaQuizzes[i].questions.length; j++) {
                    let zz = document.getElementById("critico-tela2");
                    zz.innerHTML += `
                <div class="centralizada">
                    <div class="caixaDePerguntas" id = "${j}a">
                        <div class="fundoPergunta" id = "${j}">

                            <p>${listaQuizzes[i].questions[j].title}</p>
                        </div>
                    </div>
                </div>`
                    shuffleArray(listaQuizzes[i].questions[j].answers);
                    for (let k = 0; k < listaQuizzes[i].questions[j].answers.length; k++) {
                        let zzz = document.getElementById(j + "a");
                        let zzzz = document.getElementById(j);
                        zzzz.style.backgroundColor = listaQuizzes[i].questions[j].color;
                        if (listaQuizzes[i].questions[j].answers[k].isCorrectAnswer == true) {
                            zzz.innerHTML += `<div class="alternativa correta" onclick = "checarAlternativa(this)" id = "${k}b">
                        <img src="${listaQuizzes[i].questions[j].answers[k].image}">
                        ${listaQuizzes[i].questions[j].answers[k].text}
                    </div>`;
                        }
                        else {
                            zzz.innerHTML += `<div class="alternativa incorreta" onclick = "checarAlternativa(this)" id = "${k}b">
                            <img src="${listaQuizzes[i].questions[j].answers[k].image}">
                            ${listaQuizzes[i].questions[j].answers[k].text}
                        </div>`;

                        }

                    }

                }
            
            }

        }
    }
    let fundoTela02 = document.getElementById("critico-tela2");
    fundoTela02.children[1].scrollIntoView();
}




// fim do script da tela 2

const mother = document.querySelector('.motherbox'); //<--- essa constante pode ser util para os 3, já ta criada


// tela 1 script --------------------------------------------------------------------------------------------

let listaQuizzesTela01 = [];


function adicionarQuizz(){

    /* ao clicar em "criar quizz" ou no ícone de "+", troca a tela 1 pela tela 3*/

    const tela01 = document.getElementById("tela01");
    tela01.classList.toggle('hidden');
    const tela03 = document.getElementById('3a');
    tela03.classList.toggle('hidden');

    const painelCriar = document.querySelector(".containerCriar");
    painelCriar.classList.add("hidden");
    const painelUsuario = document.querySelector(".quizzUsuario");
    painelUsuario.classList.remove("hidden");

}


function buscarQuizzes(){

const promiseBuscar = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promiseBuscar.then(sucessoBuscar);
promiseBuscar.catch(erroServidor);
}

function sucessoBuscar(quizzesServidor){
    listaQuizzesTela01 = quizzesServidor.data;
    renderizarQuizzes();
}


function erroServidor(respostaErro){
    alert('Tente novamente mais tarde');
}

buscarQuizzes();


function buscarQuizzesUsuario(){           /* MEXER NO FOR AQUI!!!!!!!!!!!!!!!!!!!!!!!! */
    
    for (let i = 1; i < idsCriados.length; i++){
        const promiseBuscarUsuario = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/"+idsCriados[i]);
        promiseBuscarUsuario.then(sucessoBuscarUsuario)

    }
}

function sucessoBuscarUsuario(quizzesServidorUsuario){
    let imagemComTituloUsuario = document.querySelector(".containerUsuario");
    let imagemComTituloDaVez = quizzesServidorUsuario.data;

    imagemComTituloUsuario.innerHTML += `<div onclick="abrirQuizz(this)" class="inicioQuizz">
    <img class="imagemQuizz"
        src="${imagemComTituloDaVez.image}">
    <h4>${imagemComTituloDaVez.title}</h4>
    <div class="gradientTela1"></div>
</div>`
}

buscarQuizzesUsuario()









function renderizarQuizzes(){

    let imagemComTitulo = document.querySelector(".containerAPI");
    let imagemComTituloUsuario = document.querySelector(".containerUsuario");



    





    for (let i = 0; i < listaQuizzesTela01.length; i++){
        let imagemComTitulo = document.querySelector(".containerAPI");
        let imagemComTituloDaVez = listaQuizzesTela01[i];
        imagemComTitulo.innerHTML += `<div onclick="abrirQuizz(this)" class="inicioQuizz" id = "${listaQuizzesTela01[i].id}">
        <img class="imagemQuizz"
            src="${imagemComTituloDaVez.image}">
            
        <h4>${imagemComTituloDaVez.title}</h4>
            
        <div class="gradientTela1"></div>
    </div>`

    }
}


function esconderPainelPontilhado(){
    
    if (idsCriados.length > 1){
        const painelCriar = document.querySelector(".containerCriar");
    painelCriar.classList.add("hidden");
    const painelUsuario = document.querySelector(".quizzUsuario");
    painelUsuario.classList.remove("hidden");
    }
}

esconderPainelPontilhado(); 

