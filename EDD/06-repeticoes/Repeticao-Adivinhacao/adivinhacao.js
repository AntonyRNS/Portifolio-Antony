// Gerar um número secreto entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializar o contador de tentativas
let tentativas = 0;
let acertou = false;
let mensagem = ''

function Jogar() {
    console.log('Jogar')
    // Iniciar o loop do jogo
    while (!acertou) {
        // Solicitar ao jogador uma tentativa
        let tentativa = parseInt(document.getElementById('input').value);

        // Incrementar o contador de tentativas
        tentativas++;
        console.log(tentativas)

        // Verificar se o jogador acertou
        // if (tentativa === numeroSecreto) {
        //     mensagem = `Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`
        //     acertou = true;
        //     break
        // } else if (tentativa < numeroSecreto) {
        //     mensagem = "Tente um número maior."
        // } else {
        //     mensagem = "Tente um número menor."
        // }

        switch (!acertou) {
            case (tentativa === numeroSecreto):
                mensagem = `Parabéns! Vocé acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`
                acertou = true;
                break
            case (tentativa < numeroSecreto):
                mensagem = "Tente um número maior."
                break
            case (tentativa > numeroSecreto):
                mensagem = "Tente um número menor."
                break
        }
        p = document.createElement('p')
        p.innerText = mensagem
        document.body.appendChild(p)
    }

}
