<script>
    let escolhaDoUsuario = ''; // 'cara' ou 'coroa'
    let resultadoDoJogo = ''; // 'cara' ou 'coroa'
    let mensagem = 'Escolha cara ou coroa e jogue a moeda!';
    let ganhouPerdeu = ''; // 'ganhou' ou 'perdeu'

    function jogarMoeda() {
        if (escolhaDoUsuario === '') {
            mensagem = 'Por favor, escolha Cara ou Coroa antes de jogar!';
            resultadoDoJogo = ''; // Limpa o resultado se não houver escolha
            ganhouPerdeu = ''; // Limpa o status de ganho/perda
            return;
        }

        const resultadoAleatorio = Math.random();
        resultadoDoJogo = resultadoAleatorio < 0.5 ? 'cara' : 'coroa';

        if (escolhaDoUsuario === resultadoDoJogo) {
            mensagem = `Parabéns! Você escolheu ${escolhaDoUsuario} e caiu ${resultadoDoJogo}!`;
            ganhouPerdeu = 'ganhou';
        } else {
            mensagem = `Que pena! Você escolheu ${escolhaDoUsuario}, mas caiu ${resultadoDoJogo}.`;
            ganhouPerdeu = 'perdeu';
        }
    }

    function resetarJogo() {
        escolhaDoUsuario = '';
        resultadoDoJogo = '';
        mensagem = 'Escolha cara ou coroa e jogue a moeda!';
        ganhouPerdeu = ''; // Reseta o status de ganho/perda
    }
</script>

<div class="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow-lg text-center" style="max-width: 500px;">
        <h1 class="mb-4 text-primary">
            <i class="bi bi-coin me-2"></i> Cara ou Coroa
        </h1>

        <p class="lead mb-4">{mensagem}</p>

        <div class="btn-group mb-4" role="group" aria-label="Escolha Cara ou Coroa">
            <input type="radio" class="btn-check" name="coinChoice" id="cara" autocomplete="off" value="cara" bind:group={escolhaDoUsuario}>
            <label class="btn btn-outline-success" for="cara">
                <i class="bi bi-emoji-smile me-2"></i> Cara
            </label>

            <input type="radio" class="btn-check" name="coinChoice" id="coroa" autocomplete="off" value="coroa" bind:group={escolhaDoUsuario}>
            <label class="btn btn-outline-warning" for="coroa">
                <i class="bi bi-award me-2"></i> Coroa
            </label>
        </div>

        <button class="btn btn-primary btn-lg w-100 mb-3" on:click={jogarMoeda}>
            <i class="bi bi-dice-five me-2"></i> Jogar Moeda
        </button>

        {#if resultadoDoJogo}
            <div class="mt-4 p-3 border rounded
                {ganhouPerdeu === 'ganhou' ? 'bg-success text-white' : 'bg-danger text-white'}">
                <h3 class="mb-0">Resultado: {resultadoDoJogo.toUpperCase()}</h3>
                {#if ganhouPerdeu === 'ganhou'}
                    <p class="fs-4 mt-2">Você GANHOU! <i class="bi bi-emoji-laughing"></i></p>
                {:else}
                    <p class