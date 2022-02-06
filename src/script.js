const numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

while (((numCartas<4)&&(numCartas>14))||(numCartas%2!=0)){
    numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
}

renderizarCartas();

function renderizarCartas(){
    var elemento = document.querySelector(".cima");
    for (let i=0; i<(numCartas/2); i++){
        const aux = `
        <div class="carta">
            <div class="frente" data-identifier="back-face">
                <img src="img/front.png" alt="">
            </div>
        </div>
        `;
        elemento.innerHTML += aux;
        console.log(i);
    }

    elemento = document.querySelector(".baixo");
    for (let i=(numCartas/2); i<numCartas; i++){
        const aux = `
        <div class="carta">
            <div class="frente" data-identifier="back-face">
                <img src="img/front.png" alt="">
            </div>
        </div>
        `;
        elemento.innerHTML += aux;
        console.log(i);
    }
}


// function createCartas(){
//     var elemento = document.querySelector(".cartas");
//     elemento.innerHTML = `
//     <div class="carta">
//         <img src="img/front.png" alt="">
//     </div>
//     `;

//     // for (let i=0; i<(numCartas/2); i++){
//         // const carta = `
//         <div class="carta">
//             <img src="img/front.png" alt="">
//         </div>
//         // `;

//         // secao.innerHTML += carta;
//     // }

//     // secao = document.querySelector(".baixo");
//     // secao.innerHTML = "";

//     // for (let i=(numCartas/2); i<numCartas; i++){
//     //     const div = `
//     //     <div class="carta">
//     //         <img src="img/front.png" alt="">
//     //     </div>
//     //     `;

//     //     secao.innerHTML += div;
//     // }
// }