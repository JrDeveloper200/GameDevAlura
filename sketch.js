// SKETCH.JS É MAIN - EQUIVALENTE VOID MAIN C++/JAVA
// Função que instancia os elementos do jogo na tela
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(45);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('INICIAR', width / 2, height / 2);

}

// Funciona como Observable, lendo as ações nas teclas ou o mouse
function keyPressed() {
  jogo.keyPressed(key);
}


// Função que realiza o Looping ou animação na Tela.
function draw() {
  cenas[cenaAtual].draw();
}