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
            // checa quem venceu
            checkWinCondition();
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

// vê quem ganhou
function checkWinCondition(){
    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    
    
    // horizontal

    if((b1 && b2 && b3).hasChildNodes){
        b1Child = b1.childNodes[0].className;
        b2Child = b2.childNodes[0].className;
        b3Child = b3.childNodes[0].className;
        console.log(b1Child, b2Child, b3Child);
        if (b1Child == "x" && b2Child == "x" && b3Child == "x"){
            // x venceu
            console.log("x venceu");
        } else{
            // o venceu
            console.log("o venceu");
        }
    }

    if(b4.childNodes.lenght > 0 && b5.childNodes.lenght > 0 && b6.childNodes.lenght > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }

    if(b7.childNodes.lenght > 0 && b8.childNodes.lenght > 0 && b9.childNodes.lenght > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }

    // vertical

    if(b1.childNodes.lenght > 0 && b4.childNodes.lenght > 0 && b7.childNodes.lenght > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }

    if(b2.childNodes.lenght > 0 && b5.childNodes.lenght > 0 && b8.childNodes.lenght > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }

    if(b3.childNodes.lenght > 0 && b6.childNodes.lenght > 0 && b9.childNodes.lenght > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }
    
    // diagonal

    if(b1.childNodes.lenght > 0 && b5.childNodes.lenght > 0 && b8.childNodes.lenght > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b8Child == "x"){
            // x venceu
            console.log("x venceu");
        } else if(b1Child == "o" && b5Child == "o" && b8Child == "o"){
            // o venceu
            console.log("o venceu");
        }
    }
}