<script>
    export let name;
    export let path;
  </script>
  
  <a href={path} class="btn btn-primary m-2">{name}</a>

  <style>
    .btn {
        background-color: rgb(3, 22, 51);
        border-color: rgb(3, 22, 51);
    }
  </style>