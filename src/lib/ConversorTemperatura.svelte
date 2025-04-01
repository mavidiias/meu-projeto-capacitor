<script>
    let valor = 0;
    let unidadeInicial = "celsius";
    let unidadeFinal = "fahrenheit";
    let resultado = 0;
  
    function converter() {
      const celsiusParaFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
      const fahrenheitParaCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
      const celsiusParaKelvin = (celsius) => celsius + 273.15;
      const kelvinParaCelsius = (kelvin) => kelvin - 273.15;
      const fahrenheitParaKelvin = (fahrenheit) => celsiusParaKelvin(fahrenheitParaCelsius(fahrenheit));
      const kelvinParaFahrenheit = (kelvin) => celsiusParaFahrenheit(kelvinParaCelsius(kelvin));
      const celsiusParaRankine = (celsius) => (celsius + 273.15) * 9 / 5;
      const rankineParaCelsius = (rankine) => (rankine - 491.67) * 5 / 9;
      const celsiusParaDelisle = (celsius) => (100 - celsius) * 3 / 2;
      const delisleParaCelsius = (delisle) => 100 - delisle * 2 / 3;
  
      switch (unidadeInicial) {
        case "celsius":
          switch (unidadeFinal) {
            case "fahrenheit":
              resultado = celsiusParaFahrenheit(valor);
              break;
            case "kelvin":
              resultado = celsiusParaKelvin(valor);
              break;
            case "rankine":
              resultado = celsiusParaRankine(valor);
              break;
            case "delisle":
              resultado = celsiusParaDelisle(valor);
              break;
            default:
              resultado = valor;
          }
          break;
        case "fahrenheit":
          switch (unidadeFinal) {
            case "celsius":
              resultado = fahrenheitParaCelsius(valor);
              break;
            case "kelvin":
              resultado = fahrenheitParaKelvin(valor);
              break;
            case "rankine":
              resultado = celsiusParaRankine(fahrenheitParaCelsius(valor));
              break;
            case "delisle":
              resultado = celsiusParaDelisle(fahrenheitParaCelsius(valor));
              break;
            default:
              resultado = valor;
          }
          break;
        case "kelvin":
          switch (unidadeFinal) {
            case "celsius":
              resultado = kelvinParaCelsius(valor);
              break;
            case "fahrenheit":
              resultado = kelvinParaFahrenheit(valor);
              break;
            case "rankine":
              resultado = celsiusParaRankine(kelvinParaCelsius(valor));
              break;
            case "delisle":
              resultado = celsiusParaDelisle(kelvinParaCelsius(valor));
              break;
            default:
              resultado = valor;
          }
          break;
        case "rankine":
          switch (unidadeFinal) {
            case "celsius":
              resultado = rankineParaCelsius(valor);
              break;
            case "fahrenheit":
              resultado = celsiusParaFahrenheit(rankineParaCelsius(valor));
              break;
            case "kelvin":
              resultado = celsiusParaKelvin(rankineParaCelsius(valor));
              break;
            case "delisle":
              resultado = celsiusParaDelisle(rankineParaCelsius(valor));
              break;
            default:
              resultado = valor;
          }
          break;
          case "delisle":
          switch (unidadeFinal) {
            case "celsius":
              resultado = delisleParaCelsius(valor);
              break;
            case "fahrenheit":
              resultado = celsiusParaFahrenheit(delisleParaCelsius(valor));
              break;
            case "kelvin":
              resultado = celsiusParaKelvin(delisleParaCelsius(valor));
              break;
            case "rankine":
              resultado = celsiusParaRankine(delisleParaCelsius(valor));
              break;
            default:
              resultado = valor;
          }
          break;
        default:
          resultado = valor;
      }
    }
  </script>
  
  <div class="container mt-4">
    <h1 class="titulo">Conversor de Temperatura</h1>
  
    <div class="mb-3">
      <label for="valor" class="form-label">Valor:</label>
      <input type="number" id="valor" class="form-control" bind:value={valor} />
    </div>
  
    <div class="mb-3">
      <label for="unidadeInicial" class="form-label">De:</label>
      <select id="unidadeInicial" class="form-select" bind:value={unidadeInicial}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        <option value="rankine">Rankine</option>
        <option value="delisle">Delisle</option>
      </select>
    </div>
  
    <div class="mb-3">
      <label for="unidadeFinal" class="form-label">Para:</label>
      <select id="unidadeFinal" class="form-select" bind:value={unidadeFinal}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        <option value="rankine">Rankine</option>
        <option value="delisle">Delisle</option>
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
  </style>