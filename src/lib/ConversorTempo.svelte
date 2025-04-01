<script>
    let valor = 1;
    let unidadeInicial = "segundos";
    let unidadeFinal = "minutos";
    let resultado = 0;
  
    function converter() {
      const unidades = {
        segundos: 1,
        minutos: 60,
        horas: 3600,
        dias: 86400,
        semanas: 604800,
        meses: 2592000, // Aproximação
        anos: 31536000,
      };
  
      resultado = (valor * unidades[unidadeInicial]) / unidades[unidadeFinal];
    }
  </script>
  
  <div class="container mt-4">
    <h1 class="titulo">Conversor de Tempo</h1>
  
    <div class="mb-3">
      <label for="valor" class="form-label">Valor:</label>
      <input type="number" id="valor" class="form-control" bind:value={valor} />
    </div>
  
    <div class="mb-3">
      <label for="unidadeInicial" class="form-label">De:</label>
      <select id="unidadeInicial" class="form-select" bind:value={unidadeInicial}>
        <option value="segundos">Segundos</option>
        <option value="minutos">Minutos</option>
        <option value="horas">Horas</option>
        <option value="dias">Dias</option>
        <option value="semanas">Semanas</option>
        <option value="meses">Meses</option>
        <option value="anos">Anos</option>
      </select>
    </div>
  
    <div class="mb-3">
      <label for="unidadeFinal" class="form-label">Para:</label>
      <select id="unidadeFinal" class="form-select" bind:value={unidadeFinal}>
        <option value="segundos">Segundos</option>
        <option value="minutos">Minutos</option>
        <option value="horas">Horas</option>
        <option value="dias">Dias</option>
        <option value="semanas">Semanas</option>
        <option value="meses">Meses</option>
        <option value="anos">Anos</option>
      </select>
    </div>
  
    <button class="btn btn-primary" on:click={converter}>Converter</button>
  
    <div class="mt-3">
      <strong>Resultado:</strong> {resultado} {unidadeFinal}
    </div>
  </div>

  <style>
    .btn {
        background-color: rgb(3, 22, 51);
        border-color: rgb(3, 22, 51);
    }

    .form-label {
        font-family: Apple Chancery, cursive;
        font-size: 17px;
    }

    .titulo {
        font-family: Brush Script MT, Brush Script Std, cursive;
        font-size: 40px;
        text-align: center;
    }

	:global(body) {
			background-color: #dae5ec;
		}
  </style>
