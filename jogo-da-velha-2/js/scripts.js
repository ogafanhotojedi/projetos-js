const celulas = document.querySelectorAll(".celula");
let checarVez = true;
const JOGADOR_X = "X";
const JOGADOR_O = "O";

atualizaMostrador();

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    vez = checarVez ? JOGADOR_X : JOGADOR_O;
    celula.textContent = vez; //quero conseguir colocar a imagem do x ou da bola no quadrinho correto
    checarVez = !checarVez;
    atualizaMostrador(); //tenho que garantir que na nona jogada ele não troque mais o jagador
}

function atualizaMostrador(){
    var player = document.querySelectorAll("div#mostrador img")[0];
    if(checarVez){
        player.setAttribute("src", "imagens/x.png");
    } else{
        player.setAttribute("src", "imagens/o.png");
    }
}

