// Função chamada quando o botão "Buscar" é clicado
function pesquisar() {
  // Obtém a referência ao elemento HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhuma área foi encontrada.</p>";
    section.classList.add("show");
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Limpa qualquer conteúdo existente na seção antes de adicionar novos resultados
  //section.innerHTML = "";

  // Variável para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Percorre sobre cada item no array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para cada item e adiciona à variável 'resultados'
      resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
        `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados;

  // Adiciona a classe 'show' para a animação

  section.classList.add("show");
}

function voltarHome() {
  let section = document.getElementById("resultados-pesquisa");

  // Adiciona a classe 'hide' para a animação de desaparecimento
  section.classList.add("hide");

  // Aguarda a animação terminar antes de redirecionar para a página "Home"
  setTimeout(() => {
    window.location.href = "index.html"; // Redireciona para a página "Home"
  }, 500); // Tempo de 500ms, igual ao da animação
}
