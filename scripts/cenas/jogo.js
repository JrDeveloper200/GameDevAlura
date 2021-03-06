class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;

    }

    setup() {
        cenario = new Cenario(imagemCenario, 8);
        grama = new Cenario(imagemGrama, 5);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        //personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 0, 256, 256, 512, 256);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 55, 55, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 300, 100, 75, 200, 150, 30);
        // const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 25);
        const inimigoGrande = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 10, 200, 200, 104, 104, 25);

        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);

    }

    draw() {
        cenario.exibe();
        cenario.move();
        vida.draw();

        personagem.exibe();
        personagem.aplicaGravidade();

        grama.move();

        pontuacao.exibe();
        pontuacao.adicionarPontos();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();
        grama.exibe();


        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {

            vida.perdeVida();
            somDaColisao.play();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 200, height / 3)
                somDoJogo.stop();
                somGameOver.play();
                noLoop();
            }
        }
    }

    keyPressed(key) {
        if (key === "ArrowUp" || key === "p") {
            personagem.pula();
            somDoPulo.play();
        }
    }
}

