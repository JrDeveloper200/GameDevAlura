// Classe responsável por criar e animar o cenário.
class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;

    this.x1 = 0;
    this.x2 = width;
  }

  // Método que exibe o background e realiza o looping da imagem
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  // Método que movimenta o Background
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    // Verifica a largura da imagem, se completa faz o cenário se repetir
    if (this.x1 < -width) {
      this.x1 = width
    }
    if (this.x2 < -width) {
      this.x2 = width
    }
  }

}