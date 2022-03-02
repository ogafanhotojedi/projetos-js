let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de clique aos boxes
for(let i = 0; i < boxes.length; i++){
    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function(){
        // variável para armazenar qual elemento vai ser colocado na tela
        let element = checkElement(player1, player2);
        // verifica se já tem x ou o
        if(this.childNodes.length==0){
            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);
            // computar a jogada
            if(player1==player2){
                player1++;
            } else{
                player2++
            }
        }
    });
}
// vê quem vai jogar
function checkElement(player1, player2){
    if(player1==player2){
        // x
        element = x;
    } else{
        // o
        element = o;
    }
    return element;
}