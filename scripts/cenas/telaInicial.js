class TelaInicial {
    constructor() {

        somDoMenu.play();
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();

    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('cheetahbolt em', width / 2, height / 6);
        textSize(150);
        text('fuja da agua', width / 2, height / 8 * 3);

    }

    _botao() {
        botaoGerenciador.y = height / 9 * 5;
        botaoGerenciador.draw();
    }
}

