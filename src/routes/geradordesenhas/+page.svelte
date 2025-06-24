<script>
	//faça um código JavaScript que crie um gerador de senhas numéricas aleatórias
	// com um botão para gerar a nova senha 
	// um botão para copiar a senha criada 
	// slider e campo de tamanho da senha 
	// caixas de seleção (cheeckbox) para incluir classes de caracteres: 
	//       letras maíusculas 
	//       minusculas
	//       simbolos 
	//       digitos
	// botão que habilita a geração de várias senhas de uma vez 
	// com cada senha em uma linha 
	// e com botão de copiar 
	// Função para gerar senha aleatória
	
    // Função para gerar senha aleatória
  let tamanhodasenha = 8;
  let contadorsenha = 1;
  let letrasminusculas = true;
  let letrasmaiusculas = true;
  let incluirnumeros = true;
  let incluircaracteresespeciais = true;
  
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const caracteresespeciais = '!@#$%^&*()_-+=<>?';

  function gerarsenha() {
    let caracteres = '';
    let senha = '';

    if (letrasminusculas) caracteres += minusculas;
    if (letrasmaiusculas) caracteres += maiusculas;
    if (incluirnumeros) caracteres += numeros;
    if (incluircaracteresespeciais) caracteres += caracteresespeciais;

    if (!caracteres) return ''; // Caso nenhuma opção esteja selecionada

    for (let i = 0; i < tamanhodasenha; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
  }

  function gerarvariassenhas() {
    let senhas = [];
    for (let i = 0; i < contadorsenha; i++) {
      senhas.push(gerarsenha());
    }
    return senhas;
  }

  function copiarparatransferencia(senha) {
    navigator.clipboard.writeText(senha).then(() => {
      alert('Senha copiada para a área de transferência!');
    }).catch((err) => {
      console.error('Erro ao copiar a senha: ', err);
    });
  }

  let senhas = gerarvariassenhas();
</script>

<div class="card bg-body-tertiary" style="width: 18rem; align-items: center; margin: 20px auto;">
  <h2 class="card-title">Gerador de Senhas <i class="bi bi-lock"></i></h2>

  <div>
    <label for="tamanhodasenha">Comprimento da senha:</label>
    <input type="number" id="tamanhodasenha" bind:value={tamanhodasenha} min="4" max="32" />
  </div>

  <div>
    <label for="contadorsenha">Número de senhas:</label>
    <input type="number" id="contadorsenha" bind:value={contadorsenha} min="1" max="10" />
  </div>

  <div>
    <label>
      <input type="checkbox" class="form-check-input" bind:checked={letrasminusculas} /> Incluir letras minúsculas
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" class="form-check-input" bind:checked={letrasmaiusculas} /> Incluir letras maiúsculas
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" class="form-check-input" bind:checked={incluirnumeros} /> Incluir números
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" class="form-check-input" bind:checked={incluircaracteresespeciais} /> Incluir caracteres especiais
    </label>
  </div>

  <button on:click={() => senhas = gerarvariassenhas()}>Gerar Senhas</button>

  {#if senhas.length > 0}
    <h2 class="card-title">Senhas Geradas:</h2>
    <ul>
      {#each senhas as senha}
        <li>
          {senha} 
          <button on:click={() => copiarparatransferencia(senha)}>Copiar</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>



<style>
  div {
    font-family: Arial, sans-serif;
    padding: 10px;
	text-align: center;
  }

  input {
    margin: 5px;
	border-radius: 10px;
	border: none;
	width: 40px;
  }

  .form-check-input:checked {
	background-color: rgb(3, 22, 51);
    border-color: rgb(3, 22, 51);
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: rgb(3, 22, 51);
    color: white;
    border: none;
    cursor: pointer;
	border-radius: 10px;
  }

  button:hover {
    background-color: #06386d;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background: #f0f0f0;
    padding: 10px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li button {
    background-color: rgb(3, 22, 51);
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }

  li button:hover {
    background-color: #06386d;
  }
</style>
