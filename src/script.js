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
    let list = [];
    for(let i=0; i<(numCartas/2); i++){
        list.push(i);
    }
    console.log(list);

    let randomNumber;
    let tmp;
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
        cartasEmJogo.push(cartas[list[i]]);
    } 

    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
        cartasEmJogo.push(cartas[list[i]]);
    } 
    console.log("Cartas embaralhadas:")
    console.log(cartasEmJogo);
}

montarJogo(false);

// Função para criar a div que será renderizada na tela com as imagesn da carta 
function renderizarCarta(caminhoImg){
    const div = `
    <div class="carta" data-identifier="card" onclick="selecionarCarta(this)">
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

const clicouCarta = false;

function clicar(carta){
    carta.querySelector(".frente").classList.toggle("face-frente-virada");
    carta.querySelector(".verso").classList.toggle("face-verso-virada");
}

function desvirar(cartaClicada){
    cartaClicada.querySelector(".frente").classList.toggle("face-frente-virada");
    cartaClicada.querySelector(".verso").classList.toggle("face-verso-virada");
}

let primeiraCarta = null;
let segundaCarta = null;

let qtdadeJogadas = 0;
let qtdadeParesAbertos = 0;
let flag = false;

let contador = 0;
let intervalo = null;

function selecionarCarta(cartaClicada) {
    if(flag == false){
        if(primeiraCarta === null) {
            primeiraCarta = cartaClicada;
            cartaClicada.querySelector(".frente").classList.toggle("face-frente-virada");
            cartaClicada.querySelector(".verso").classList.toggle("face-verso-virada");
            console.log("Primeira");
            console.log(primeiraCarta);
        } else {
            cartaClicada.querySelector(".frente").classList.toggle("face-frente-virada");
            cartaClicada.querySelector(".verso").classList.toggle("face-verso-virada");
            segundaCarta = cartaClicada;
            qtdadeJogadas+=2;
            console.log("Segunda");
            console.log(segundaCarta);
            flag = true;

            setTimeout(validarPar, 1000);
        }
    }
}

function contadorTempo(){
    if (contador == 5000){
        clearInterval(intervalo);
    }else{
        contador++;
    }

}

function validarPar(){
    if (primeiraCarta.isEqualNode(segundaCarta)){
        console.log("São iguais");
        primeiraCarta = null;
        segundaCarta = null;
        qtdadeParesAbertos += 1;
        if(qtdadeParesAbertos == (numCartas/2)){
            alert("Você ganhou em " + qtdadeJogadas + " jogadas!");
        }

    }else{
        console.log("São !=");
        desvirar(primeiraCarta);    
        desvirar(segundaCarta);
        primeiraCarta = null;
        segundaCarta = null;
    }
    flag = false;
}

// Função para montar as cartas do jogo na tela
function montarJogo(mobile){
    if (mobile == false){
        // Monta versão para grandes telas
        var elemento = document.querySelector(".cartas");
        for (let i=0; i<numCartas; i++){
            const carta = cartasEmJogo[i];
            const aux = renderizarCarta(carta.nome);
            console.log(i);
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