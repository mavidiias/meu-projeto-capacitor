import { dicionario } from '$lib/dicionario.js'; //** importei a biblioteca do dicionário */
export async function load({ params }) { //* importei os parametros */
  const name = params.palavra;  //* o name vai ser a palavra que está nos parametros do url. */
  let palavra = dicionario.filter((palavra) => palavra.palavra == name); //* para definir a variavel palavra, sera executado um filtro dentro da biblioteca do dicionario /* 
  
  return { palavra }; //* retorna a váriavel palavra para o front ed */
}