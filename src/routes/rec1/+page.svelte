<script>
   let tentativa = $state();
   let contador = $state(0);
   let secreto = $derived(Math.floor(Math.random() * 1024) + 1);
   let resposta = $state('');

   

   function verificar() {
    if (tentativa == secreto) resposta = 'Parabens!', contador++;
    if (tentativa > secreto) resposta = 'O segredo é menor...', contador++;
    if (tentativa < secreto) resposta = 'O segredo é maior...', contador++;
   
   }

   function reiniciar() {
    contador = 0;
    tentativa = {};
    resposta = '';
   
   }
   

</script>

<h1 class="titulo">Jogo de adivinhar 🔢</h1>


<p>Digite seu palpite...</p>
<input type="number" bind:value={tentativa} min="1" max="1024" />


<button onclick={verificar}>Tentar</button>

<p>{resposta}</p>

<p>Você tentou {contador} vezes</p>

<button onclick={reiniciar}>Reiniciar</button>

<style>
    .titulo {
        font-family: 'Lucida Sans';
    }

     button {
        background-color: #1983f5;
     }

     p {
        font-family: 'Lucida Sans';
     }
</style>
