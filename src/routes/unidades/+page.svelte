<script>
    import UnitButton from '$lib/componentes/UnitButton.svelte';
  
    const commonCategories = [
      { name: 'Tempo', path: '/unidades/categoriacomum/tempo' },
      { name: 'Comprimento', path: '/unidades/categoriacomum/comprimento' },
      { name: 'Área', path: '/unidades/categoriacomum/area' },
      { name: 'Moeda', path: '/unidades/categoriacomum/moeda' },
      { name: 'Peso', path: '/unidades/categoriacomum/peso' },
      { name: 'Velocidade', path: '/unidades/categoriacomum/velocidade' }
    ];
  
    const engineeringCategories = [
      { name: 'Aceleração', path: '/unidades/categoriaengenharia/aceleracao' },
      { name: 'Ângulo', path: '/unidades/categoriaengenharia/angulo' },
      { name: 'Potência', path: '/unidades/categoriaengenharia/potencia' },
      { name: 'Pressão', path: '/unidades/categoriaengenharia/pressao' },
      { name: 'Temperatura', path: '/unidades/categoriaengenharia/temperatura' }
    ];
  </script>
  
  <div class="container text-center">
    <h1>Conversor de Unidades</h1>
  
    <div class="mt-5">
      <h2>Categorias Comuns</h2>
      <div class="d-flex flex-wrap justify-content-center">
        {#each commonCategories as category}
          <UnitButton name={category.name} path={category.path} />
        {/each}
      </div>
    </div>
  
    <div class="mt-5">
      <h2>Categorias da Engenharia</h2>
      <div class="d-flex flex-wrap justify-content-center">
        {#each engineeringCategories as category}
          <UnitButton name={category.name} path={category.path} />
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    h1, h2 {
      color: rgb(3, 22, 51);
    }
  </style>