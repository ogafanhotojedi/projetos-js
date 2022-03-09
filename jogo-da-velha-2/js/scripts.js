const celulas = document.querySelectorAll(".celula");
let checarVez = true;
const JOGADOR_X = "X";
const JOGADOR_O = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    vez = checarVez ? JOGADOR_X : JOGADOR_O;
    celula.textContent = vez;
    checarVez = !checarVez;
}