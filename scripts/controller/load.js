
function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGrama = loadImage('imagens/cenario/grama.png');
    imagemPersonagem = loadImage('imagens/personagem/catdog.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemVida = loadImage('imagens/assets/heart.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    somDoMenu = loadSound('sons/trilha_menu.mp3');
    somDoJogo = loadSound('sons/forest.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDaColisao = loadSound('sons/colisao.mp3');
    somGameOver = loadSound('sons/sadness.mp3');
    fita = loadJSON('scripts/fita/fita.json');
}