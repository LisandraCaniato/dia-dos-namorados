// --- Funções da Tela de Abertura ---
function abrirSurpresa() {
    const tela = document.getElementById('tela-abertura');
    const musica = document.getElementById('musica');
    
    tela.style.display = 'none'; // esconde a tela preta
    musica.play(); // toca a música
}

// --- Funções do Quiz ---
function verificarRespostas() {
    const perguntas = document.querySelectorAll('.pergunta');
    let acertos = 0;
    
    perguntas.forEach(pergunta => {
        const respostaCerta = pergunta.querySelector('input[type="radio"][value="certo"]');
        if (respostaCerta && respostaCerta.checked) {
            acertos++;
        }
    });
    
    const resultadoElement = document.getElementById('resultadoQuiz');
    resultadoElement.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    
    // Adicionando feedback de cor e mensagem mais detalhada
    if (acertos === perguntas.length) {
        resultadoElement.style.color = 'green';
        resultadoElement.textContent += ' Parabéns, você me conhece muito bem! ❤️';
    } else if (acertos >= perguntas.length / 2) {
        resultadoElement.style.color = 'orange';
        resultadoElement.textContent += ' Você me conhece razoavelmente, mas pode melhorar! 😉';
    } else {
        resultadoElement.style.color = 'red';
        resultadoElement.textContent += ' Precisamos conversar mais! 😉';
    }
}

// --- Funções da Carta ---
// A função que será chamada para abrir a carta
function abrirCarta() { // Mantive o nome original da sua função `abrirCarta`
    const envelope = document.getElementById('envelope');
    const carta = document.getElementById('carta');
    const envelopeImg = envelope.querySelector('img'); // Seleciona a imagem dentro do envelope

    // Animação para a imagem do envelope "sumir" ou "abrir"
    // Estes estilos temporários no JS sobrepõem o CSS, mas depois a transição suaviza
    envelopeImg.style.transform = 'translateY(-50px) scale(0.8) rotateX(90deg)'; // Sobe, diminui e gira para sumir
    envelopeImg.style.opacity = '0';
    // Adiciona a transição, se não estiver já no CSS
    envelopeImg.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';

    // Para a carta aparecer um pouco depois do envelope "sumir"
    setTimeout(() => {
        carta.classList.add('mostra'); // Adiciona a classe para mostrar a carta
        // A animação de scale e opacity para a carta já deve estar no CSS da classe .mostra ou #carta
        // (Verifique se #carta.mostra tem transform: scale(1) e opacity: 1)
    }, 400); // 400ms (0.4 segundos) depois do envelope começar a animar
}

// Função para fechar a carta e fazer o envelope "voltar"
function fecharCarta() {
    const envelope = document.getElementById('envelope');
    const carta = document.getElementById('carta');
    const envelopeImg = envelope.querySelector('img');

    carta.classList.remove('mostra'); // Remove a classe para esconder a carta
    // Se a carta tem uma animação de sumir, ela vai ocorrer aqui (via CSS)
    
    // Faz o envelope "voltar" após a carta sumir
    setTimeout(() => {
        envelopeImg.style.transform = 'translateY(0) scale(1) rotateX(0deg)'; // Volta ao estado original
        envelopeImg.style.opacity = '1';
    }, 400); // Dá um tempo para a carta sumir antes do envelope aparecer
}

// --- Funções do Carrossel ---
// Usando o ID 'carrossel' que você já tem no seu HTML para o div que contém as imagens
const carrosselContainer = document.getElementById('carrossel'); 

function moverCarrossel(direcao) {
    // Pega a largura da primeira imagem para o cálculo
    // Assumindo que todas as imagens têm a mesma largura e o gap é 10px (do seu CSS)
    const larguraImagem = carrosselContainer.querySelector('img').offsetWidth;
    const gap = 10; // Este valor vem do seu CSS para #carrossel, onde você tem 'gap: 10px;'
    const scrollAmount = larguraImagem + gap;

    carrosselContainer.scrollBy({
        left: scrollAmount * direcao,
        behavior: 'smooth'
    });
}