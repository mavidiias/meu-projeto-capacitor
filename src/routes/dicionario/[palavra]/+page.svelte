<script>
    let { data } = $props(); //* importo os dados do backend pro front-end, ou seja, pego a váriavel palavra do back-end e passo para o front-end. */
    console.log(data) //* mostra as variaveis importadas do back-end.*/
</script>
<div class="card bg-body-tertiary" style="width: 18rem; align-items: center; margin: 20px auto;">
    <div class="card-body">
        <h5 class="card-title text-center">{data.palavra[0].palavra} <i class="bi bi-bookmark-heart"></i></h5>
        <h6 class="card-title">Definição:</h6>
        <p class="card-text">{data.palavra[0].definicao}</p>
        <div class="text-center">
            <button class="btn bg-primary-subtle" onclick={() => window.history.back()}>Voltar</button>
         </div>
</div>
</div>