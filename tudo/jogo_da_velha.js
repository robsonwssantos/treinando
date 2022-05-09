const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
    if (gameOver){ return;}

    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/xis.png");
    } else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/circulo.png");
    }
}
function inicializarEspacos() {
    var espacos = document.getElementsByClassName("espacos");
    for (var i = 0; i < espacos.length; i++) {

        espacos[i].addEventListener("click", function(){
            if (gameOver) {return;}
            
            if(this.getElementsByTagName("img").length == 0) {

            }

        }
}