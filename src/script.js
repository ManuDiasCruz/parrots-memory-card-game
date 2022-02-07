let numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

while ((numCartas<4)||(numCartas>14)||((numCartas%2)!=0)){
    numCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    print((numCartas<4)||(numCartas>14)||((numCartas%2)!=0));
}

renderizarCartas(false);

function renderizarCartas(mobile){
    if (mobile == false){
        var elemento = document.querySelector(".cima");
        for (let i=0; i<(numCartas/2); i++){
            const aux = `
            <div class="carta" data-identifier="card">
                <div class="frente face" data-identifier="back-face">
                    <img src="img/front.png" alt="">
                </div>
                <div class="verso face" data-identifier="back-face">
                    <img src="img/metalparrot.gif" alt="">
                </div>
            </div>
            `;
            elemento.innerHTML += aux;
            console.log(i);
        }

        elemento = document.querySelector(".baixo");
        for (let i=(numCartas/2); i<numCartas; i++){
            const aux = `
            <div class="carta" data-identifier="card">
                <div class="frente face" data-identifier="back-face">
                    <img src="img/front.png" alt="">
                </div>
                <div class="verso face" data-identifier="back-face">
                    <img src="img/metalparrot.gif" alt="">
                </div>
            </div>
            `;
            elemento.innerHTML += aux;
            console.log(i);
        }
    }else{
        var elemento = document.querySelector(".mobile");
        for (let i=0; i<numCartas; i++){
            const aux = `
            <div class="carta" data-identifier="card">
                <div class="frente face" data-identifier="back-face">
                    <img src="img/front.png" alt="">
                </div>
                <div class="verso face" data-identifier="back-face">
                    <img src="img/metalparrot.gif" alt="">
                </div>
            </div>
            `;
            elemento.innerHTML += aux;
            console.log(i);
        }
    }
}