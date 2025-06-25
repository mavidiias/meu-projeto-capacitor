<script>
    let numeroEscolhido = 0; // O número que o usuário escolheu
    let numeroSorteado = null; // O número que a roleta sorteou
    let mensagem = 'Escolha um número de 1 a 100 e tente adivinhar!';
    let girando = false;
    let resultadoClasse = ''; // Para mudar a cor da mensagem (sucesso/perigo)

    const MIN_NUMERO = 1;
    const MAX_NUMERO = 100;

    // Função para girar a roleta
    function girarRoleta() {
        if (girando) return; // Evita cliques múltiplos enquanto gira

        // Validação da escolha do usuário
        if (numeroEscolhido < MIN_NUMERO || numeroEscolhido > MAX_NUMERO) {
            mensagem = `Por favor, escolha um número entre ${MIN_NUMERO} e ${MAX_NUMERO}.`;
            resultadoClasse = 'text-danger';
            return;
        }

        girando = true;
        numeroSorteado = null; // Limpa o número anterior
        mensagem = 'Girando... Um momento!';
        resultadoClasse = 'text-info';

        // Simula um atraso para dar a impressão de giro
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * (MAX_NUMERO - MIN_NUMERO + 1)) + MIN_NUMERO;
            numeroSorteado = numeroAleatorio;

            if (numeroEscolhido === numeroSorteado) {
                mensagem = `Parabéns! Você acertou! O número sorteado foi ${numeroSorteado}! 🎉`;
                resultadoClasse = 'text-success';
            } else if (numeroEscolhido < numeroSorteado) {
                mensagem = `Que pena! Você escolheu ${numeroEscolhido}, mas o número sorteado foi ${numeroSorteado} (maior).`;
                resultadoClasse = 'text-danger';
            } else { // numeroEscolhido > numeroSorteado
                mensagem = `Que pena! Você escolheu ${numeroEscolhido}, mas o número sorteado foi ${numeroSorteado} (menor).`;
                resultadoClasse = 'text-danger';
            }
            girando = false;
        }, 2000); // Gira por 2 segundos
    }

    // Função para resetar o jogo
    function resetarJogo() {
        numeroEscolhido = 0;
        numeroSorteado = null;
        mensagem = 'Escolha um número de 1 a 100 e tente adivinhar!';
        girando = false;
        resultadoClasse = '';
    }
</script>

<div class="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow-lg text-center" style="max-width: 500px;">
        <h1 class="mb-4 text-primary">
            <i class="bi bi-dice-6 me-2"></i> Adivinhe o Número da Roleta
        </h1>

        <p class="lead mb-4 {resultadoClasse}">{mensagem}</p>

        <div class="mb-3">
            <label for="numeroInput" class="form-label fs-5">Seu Número (1-100):</label>
            <input
                type="number"
                id="numeroInput"
                class="form-control form-control-lg text-center"
                min="{MIN_NUMERO}"
                max="{MAX_NUMERO}"
                bind:value={numeroEscolhido}
                placeholder="Ex: 42"
                disabled={girando}
            >
        </div>

        <button
            class="btn btn-primary btn-lg w-100 mb-3"
            on:click={girarRoleta}
            disabled={girando || numeroEscolhido < MIN_NUMERO || numeroEscolhido > MAX_NUMERO}
        >
            <i class="bi bi-arrow-clockwise me-2"></i> {girando ? 'Girando...' : 'Girar Roleta'}
        </button>

        {#if numeroSorteado !== null}
            <div class="mt-4 p-3 border rounded
                {numeroEscolhido === numeroSorteado ? 'bg-success text-white' : 'bg-danger text-white'}">
                <h3 class="mb-0">Número Sorteado:</h3>
                <p class="fs-1 fw-bold mb-0">{numeroSorteado}</p>
                {#if numeroEscolhido === numeroSorteado}
                    <i class="bi bi-star-fill display-4 mt-2"></i>
                {:else}
                    <i class="bi bi-x-circle-fill display-4 mt-2"></i>
                {/if}
            </div>
        {:else if girando}
            <div class="spinner-border text-primary mt-4" role="status" style="width: 5rem; height: 5rem;">
                <span class="visually-hidden">Girando...</span>
            </div>
        {/if}

        {#if numeroSorteado !== null || girando}
            <button class="btn btn-secondary mt-3 w-100" on:click={resetarJogo}>
                <i class="bi bi-arrow-counterclockwise me-2"></i> Jogar Novamente
            </button>
        {/if}
    </div>
</div>