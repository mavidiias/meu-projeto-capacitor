<script>
	import { dicionario } from '$lib/dicionario';
	import { goto } from '$app/navigation';

	let palavra = $state('');
	let filtradas = $state(dicionario);

	function buscar() {
		if (palavra == '') {
			filtradas = dicionario;
			return;
		}

		filtradas = [];
		for (const termo of dicionario) {
			if (termo.palavra.startsWith(palavra)) {
				filtradas.push(termo);
			}
		}
	}

	function aleatorio() {
		const index = Math.floor(Math.random() * dicionario.length);
		palavra = dicionario[index].palavra;
		goto(`/dicionario/${palavra}`);
	}
</script>

<div class="card bg-body-tertiary" style="width: 18rem; align-items: center; margin: 20px auto;">
	<div class="card-body text-center">
		<h2 class="card-title">Dicionário <i class="bi bi-journal-bookmark"></i></h2>

		<div class="mb-3 mt-3">
			<input placeholder="digite uma palavra" oninput={buscar} bind:value={palavra} />
		</div>

		<button onclick={aleatorio} class="btn bg-primary-subtle">palavra aleatória</button>
		<br><br>

		<h5 class="card-title">Palavras:</h5>

		<div>
		
				{#each filtradas as termo}
					<p><a href="/dicionario/{termo.palavra}">{termo?.palavra}</a></p>
				{/each}

		</div>
	</div>
</div>
