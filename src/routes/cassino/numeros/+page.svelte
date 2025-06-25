<script>
    const MAX_NUMBERS_TO_CHOOSE = 5;
    const MAX_NUMBER_VALUE = 50;
    const MIN_NUMBER_VALUE = 1;

    let numerosEscolhidos = [];
    let numerosSorteados = [];
    let quantidadeAcertos = 0;
    let mensagem = 'Escolha seus 5 números (de 1 a 50) e jogue!';
    let podeJogar = false;

    // Função para adicionar/remover números escolhidos
    function toggleNumero(numero) {
        const index = numerosEscolhidos.indexOf(numero);
        if (index > -1) {
            numerosEscolhidos.splice(index, 1);
        } else {
            if (numerosEscolhidos.length < MAX_NUMBERS_TO_CHOOSE) {
                numerosEscolhidos.push(numero);
            }
        }
        numerosEscolhidos = numerosEscolhidos.sort((a, b) => a - b); // Mantém ordenado
        verificarPodeJogar();
    }

    // Verifica se o botão "Jogar" deve estar ativo
    function verificarPodeJogar() {
        podeJogar = numerosEscolhidos.length === MAX_NUMBERS_TO_CHOOSE;
    }

    // Função para sortear os números da loteria
    function sortearNumeros() {
        if (!podeJogar) {
            mensagem = 'Por favor, escolha exatamente 5 números para jogar!';
            return;
        }

        numerosSorteados = [];
        while (numerosSorteados.length < MAX_NUMBERS_TO_CHOOSE) {
            const numeroAleatorio = Math.floor(Math.random() * (MAX_NUMBER_VALUE - MIN_NUMBER_VALUE + 1)) + MIN_NUMBER_VALUE;
            if (!numerosSorteados.includes(numeroAleatorio)) {
                numerosSorteados.push(numeroAleatorio);
            }
        }
        numerosSorteados = numerosSorteados.sort((a, b) => a - b); // Mantém ordenado

        // Contar acertos
        quantidadeAcertos = 0;
        numerosEscolhidos.forEach(num => {
            if (numerosSorteados.includes(num)) {
                quantidadeAcertos++;
            }
        });

        mensagem = `Você acertou ${quantidadeAcertos} número(s)!`;
        if (quantidadeAcertos === MAX_NUMBERS_TO_CHOOSE) {
            mensagem = 'PARABÉNS! VOCÊ ACERTOU TODOS OS NÚMEROS! 🎉';
        } else if (quantidadeAcertos > 0) {
            mensagem = `Você acertou ${quantidadeAcertos} número(s)! Continue tentando!`;
        } else {
            mensagem = 'Nenhum acerto desta vez. Tente novamente!';
        }
    }

    // Função para resetar o jogo
    function resetarJogo() {
        numerosEscolhidos = [];
        numerosSorteados = [];
        quantidadeAcertos = 0;
        mensagem = 'Escolha seus 5 números (de 1 a 50) e jogue!';
        podeJogar = false;
    }
</script>

<div class="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow-lg text-center" style="max-width: 700px;">
        <h1 class="mb-4 text-primary">
            <i class="bi bi-dice-5 me-2"></i> Loteria Simples
        </h1>

        <p class="lead mb-4">{mensagem}</p>

        <h3 class="mb-3">Seus Números Escolhidos:</h3>
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {#if numerosEscolhidos.length > 0}
                {#each numerosEscolhidos as num (num)}
                    <span class="badge bg-primary fs-5 p-3">{num}</span>
                {/each}
            {:else}
                <span class="text-muted">Nenhum número selecionado</span>
            {/if}
        </div>

        <div class="mb-4">
            <h3 class="mb-3">Escolha seus {MAX_NUMBERS_TO_CHOOSE} Números:</h3>
            <div class="d-flex flex-wrap justify-content-center gap-2" style="max-height: 250px; overflow-y: auto; border: 1px solid #dee2e6; padding: 10px; border-radius: 5px;">
                {#each Array(MAX_NUMBER_VALUE).fill(0).map((_, i) => i + MIN_NUMBER_VALUE) as num (num)}
                    <button
                        class="btn btn-outline-secondary {numerosEscolhidos.includes(num) ? 'active bg-primary text-white' : ''}"
                        on:click={() => toggleNumero(num)}
                        disabled={numerosEscolhidos.length === MAX_NUMBERS_TO_CHOOSE && !numerosEscolhidos.includes(num)}
                    >
                        {num}
                    </button>
                {/each}
            </div>
        </div>

        <button
            class="btn btn-success btn-lg w-100 mb-3"
            on:click={sortearNumeros}
            disabled={!podeJogar}
        >
            <i class="bi bi-gift me-2"></i> Sortear Números!
        </button>

        {#if numerosSorteados.length > 0}
            <div class="mt-4 p-3 border rounded bg-info text-white">
                <h3 class="mb-2">Números Sorteados:</h3>
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {#each numerosSorteados as num (num)}
                        <span class="badge bg-light text-dark fs-5 p-3">{num}</span>
                    {/each}
                </div>
                <h4 class="mb-0">Total de Acertos: {quantidadeAcertos}</h4>
                {#if quantidadeAcertos > 0}
                    <i class="bi bi-star-fill display-4 mt-2"></i>
                {:else}
                    <i class="bi bi-arrow-down-up display-4 mt-2"></i>
                {/if}
            </div>
        {/if}

        <button class="btn btn-secondary mt-3 w-100" on:click={resetarJogo}>
            <i class="bi bi-arrow-counterclockwise me-2"></i> Reiniciar Jogo
        </button>
    </div>
</div>