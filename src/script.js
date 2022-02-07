// Prende o usuário até digitar um número de cartas dentro das restrições do jogo
// (entre 4 e 14 cartas, sendo um número par)
let numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

while ((numCartas<4)||(numCartas>14)||((numCartas%2)!=0)){
    numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    print((numCartas<4)||(numCartas>14)||((numCartas%2)!=0));
}

// Criação das cartas como objeto
const carta0 = {nome: "img/bobrossparrot.gif", id: 0}
const carta1 = {nome: "img/explodyparrot.gif", id: 1}
const carta2 = {nome: "img/fiestaparrot.gif", id: 2}
const carta3 = {nome: "img/metalparrot.gif", id: 3}
const carta4 = {nome: "img/revertitparrot.gif", id: 4}
const carta5 = {nome: "img/tripletsparrot.gif", id: 5}
const carta6 = {nome: "img/unicornparrot.gif", id: 6}

// Criação de um array com todos os objetos cartas
const cartas = []
cartas.push(carta0);
cartas.push(carta1);
cartas.push(carta2);
cartas.push(carta3);
cartas.push(carta4);
cartas.push(carta5);
cartas.push(carta6);

// Vetor para guardar as cartas que estão em jogo
const cartasEmJogo = [];

geraCartasAleatorias();

// Gera numCartas/2 cartas diferentes entre si aleatórias
// usamos numCarta/2 porque numCartas é o número total de cartas, mas
// para o jogo precisamos de pares de cartas.
function geraCartasAleatorias(){
    // Algoritmo de embaralhamento de Fisher-Yates
    let list = [0,1,2,3,4,5,6];
    let randomNumber;
    let tmp;
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
    } 
    
    // Pega a quantidade de pares de cartas necessários para o jogo diferentes entre si
    for(let i=0; i<(numCartas/2); i++){
        cartasEmJogo.push(cartas[list[i]]);
    }
    console.log(cartasEmJogo);
}

montarJogo(false);

// Função para criar a div que será renderizada na tela com as imagesn da carta 
function renderizarCarta(caminhoImg){
    const div = `
    <div class="carta" data-identifier="card" onclick="clicar(this)">
        <div class="frente face" data-identifier="back-face">
            <img src="img/front.png" alt="">
        </div>
        <div class="verso face" data-identifier="front-face">
            <img src=${caminhoImg} alt="">
        </div>
    </div>
    `;
    return div;
    
}

const primeiraCarta = true;

function clicar(carta){
    // for (let i=0; i<pratos.length; i++){
    //     pratos[i].classList.remove("artigoSelecionado");
    // }
    carta.querySelector(".verso").classList.toggle("verso");
}

// Função para montar as cartas do jogo na tela
function montarJogo(mobile){
    if (mobile == false){
        // Monta versão para grandes telas
        var elemento = document.querySelector(".cima");
        for (let i=0; i<(numCartas/2); i++){
            const carta = cartasEmJogo[i];
            const aux = renderizarCarta(carta.nome);
            console.log(aux);
            elemento.innerHTML += aux;
        }

        elemento = document.querySelector(".baixo");
        for (let i=(numCartas/2); i<numCartas; i++){
            const carta = cartasEmJogo[i%(numCartas/2)];
            const aux = renderizarCarta(carta.nome);
            elemento.innerHTML += aux;
        }
    }else{
        // Monta versão para dispositivos móveis
        var elemento = document.querySelector(".mobile");
        for (let i=0; i<numCartas; i++){
            const carta = cartasEmJogo[i];
            const aux = renderizarCarta(carta.nome);
            elemento.innerHTML += aux;
            console.log(i);
        }
    }
}