<script>
	let peca1 = $state('/');
	let peca2 = $state('/');
	let peca3 = $state('/');
	let peca4 = $state('/');
	let peca5 = $state('/');
	let peca6 = $state('/');
	let peca7 = $state('/');
	let peca8 = $state('/');
	let peca9 = $state('/');

    let contcasa1 = $state(0);

	let vez = $state('X');
	let mensagem = $state('Bom Jogo!');

	let cont = 1;

	function jogada1() {
		if (cont == 1) {
			peca1 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca1 = '◯';
			cont++;
			vez = 'X';
		}

	}

	function jogada2() {
		if (cont == 1) {
			peca2 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca2 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada3() {
		if (cont == 1) {
			peca3 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca3 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada4() {
		if (cont == 1) {
			peca4 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca4 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada5() {
		if (cont == 1) {
			peca5 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca5 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada6() {
		if (cont == 1) {
			peca6 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca6 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada7() {
		if (cont == 1) {
			peca7 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca7 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada8() {
		if (cont == 1) {
			peca8 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca8 = '◯';
			cont++;
			vez = 'X';
		}
	}

	function jogada9() {
		if (cont == 1) {
			peca9 = 'X';
			cont--;
			vez = '◯';
		} else {
			peca9 = '◯';
			cont++;
			vez = 'X';
		}

	}

	function resetarJogo() {
		peca1 = '/';
		peca2 = '/';
		peca3 = '/';
		peca4 = '/';
		peca5 = '/';
		peca6 = '/';
		peca7 = '/';
		peca8 = '/';
		peca9 = '/';
		vez = 'X';

		cont = 1;
	}
</script>

<div class="card bg-body-tertiary" style="width: 18rem; align-items: center; margin: 20px auto;">
	<div class="card-body text-center">
		<h2 class="card-title">Jogo da Velha <i class="bi bi-journal-bookmark"></i></h2>
		<h5 class="card-title">Agora é a vez do: {vez}</h5>
		<h6 class="card-title">{mensagem}</h6>

		<table class="table table-borderless">
			<tbody>
				<tr>
					<td
						><button type="button" class="btn w-100 rounded-0" onclick={jogada1}>{peca1}</button
						></td
					>
					<td
						><button
							type="button"
							class="btn border border-black border-top-0 border-bottom-0 w-100 rounded-0"
							onclick={jogada2}>{peca2}</button
						></td
					>
					<td
						><button type="button" class="btn w-100 rounded-0" onclick={jogada3}>{peca3}</button
						></td
					>
				</tr>
				<tr>
					<td
						><button
							type="button"
							class="btn border border-black border-start-0 border-end-0 w-100 rounded-0"
							onclick={jogada4}>{peca4}</button
						></td
					>
					<td
						><button type="button" class="btn border border-black w-100 rounded-0" onclick={jogada5}
							>{peca5}</button
						></td
					>
					<td
						><button
							type="button"
							class="btn border border-black border-start-0 border-end-0 w-100 rounded-0"
							onclick={jogada6}>{peca6}</button
						></td
					>
				</tr>
				<tr>
					<td
						><button type="button" class="btn w-100 rounded-0" onclick={jogada7}>{peca7}</button
						></td
					>
					<td
						><button
							type="button"
							class="btn border border-black border-top-0 border-bottom-0 w-100 rounded-0"
							onclick={jogada8}>{peca8}</button
						></td
					>
					<td
						><button type="button" class="btn w-100 rounded-0" onclick={jogada9}>{peca9}</button
						></td
					>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<button class="btn bg-primary-subtle" onclick={resetarJogo}>Reiniciar</button>
		</div>
	</div>
</div>
