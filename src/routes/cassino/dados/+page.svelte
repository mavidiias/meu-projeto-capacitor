<script>
    import { onMount } from 'svelte';
  
    let numberOfDice = 1;
    let diceResults = [];
  
    // Função para carregar o Bootstrap JavaScript
    onMount(() => {
      // Certifique-se de que o Bootstrap JS é carregado se você precisar de componentes interativos.
      // Para ícones, o CSS do Bootstrap é o mais importante, que será importado no app.html.
    });
  
    function rollDice() {
      diceResults = []; // Limpa resultados anteriores
      for (let i = 0; i < numberOfDice; i++) {
        const result = Math.floor(Math.random() * 6) + 1; // Rola um dado de 1 a 6
        diceResults.push(result);
      }
    }
  
    // Mapeia o valor do dado para o ícone correspondente do Bootstrap Icons
    function getDiceIcon(value) {
      switch (value) {
        case 1: return 'bi-dice-1-fill';
        case 2: return 'bi-dice-2-fill';
        case 3: return 'bi-dice-3-fill';
        case 4: return 'bi-dice-4-fill';
        case 5: return 'bi-dice-5-fill';
        case 6: return 'bi-dice-6-fill';
        default: return 'bi-question-circle-fill'; // Caso algo dê errado
      }
    }
  </script>
  
  <div class="container mt-5">
    <h1 class="mb-4">Rolador de Dados</h1>
  
    <div class="mb-3">
      <label for="numDice" class="form-label">Quantos dados você quer rolar?</label>
      <input
        type="number"
        id="numDice"
        class="form-control"
        bind:value={numberOfDice}
        min="1"
        max="10"
      />
    </div>
  
    <button class="btn btn-primary mb-4" on:click={rollDice}>
      <i class="bi bi-dice-5 me-2"></i> Rolar Dados
    </button>
  
    <div class="d-flex flex-wrap gap-3 justify-content-center">
      {#each diceResults as result, index (index)}
        <div class="p-3 border rounded shadow-sm bg-light">
          <i class="bi {getDiceIcon(result)}" style="font-size: 4rem; color: #0d6efd;"></i>
        </div>
      {/each}
    </div>
  </div>
  