// Gerar um número secreto entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializar o contador de tentativas
let tentativas = 0;
let acertou = false;

// Iniciar o loop do jogo
while (!acertou) {
    // Solicitar ao jogador uma tentativa
    let tentativa = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100): "));
    
    // Incrementar o contador de tentativas
    tentativas++;
    
    // Verificar se o jogador acertou
    if (tentativa === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
        acertou = true;
    } else if (tentativa < numeroSecreto) {
        console.log("Tente um número maior.");
    } else {
        console.log("Bababoi")

console.log("Tente um número menor.");
    }
}