const listaPerguntas = [
  {
    pergunta: "Em que ano estamos?",
    opcoes: ["2021", "2022", "2032", "2023"],
    resposta: 3,
  },
  {
    pergunta: "Em que século estamos?",
    opcoes: ["XX", "XXI", "XIX", "XV"],
    resposta: 1,
  },
  {
    pergunta: "Em que país nasceu Pelé?",
    opcoes: ["USA", "Canada", "Brasil", "África do Sul"],
    resposta: 2,
  },
];


let perguntaAtual = 0;
let pontos = 0;

const textoPergunta = document.getElementById("perguntas");
const caixaOpcoes = document.getElementById("container-opcoes");
const resultadoTexto = document.getElementById("resultado");
const elementoResultado = document.getElementById("container-resultado");
const botaoJogarNovamente = document.getElementById("novamente-btn");

function pergunta() {
  if (perguntaAtual < listaPerguntas.length) {
    const perguntaMomento = listaPerguntas[perguntaAtual];
    textoPergunta.textContent = perguntaMomento.pergunta;
    caixaOpcoes.textContent = "";

    selecionaPergunta(perguntaMomento);
    
  } else {
    mostraResultado();
  }
}

// novo: for of / lambda
function selecionaPergunta(perguntaMomento) {
  for (const opcao of perguntaMomento.opcoes) {
    const elementoOpcoes = document.createElement("button"); //cria botao com alternativas
    elementoOpcoes.textContent = opcao;
    // elementoOpcoes.onclick = respostaClicada
    elementOpcoes.onclick = function() {
      respostaClicada(opcao);
    };
    // elementoOpcoes.addEventListener("click", () => respostaClicada(opcao));
    caixaOpcoes.appendChild(elementoOpcoes);
  }
}

function respostaClicada(opcaoSelecionada) {
  const perguntaMomento = listaPerguntas[perguntaAtual];
  
  // suporte a respostas posicionais
  const posicao = perguntaMomento.resposta;
  const respostaEsperada = perguntaMomento.opcoes[posicao];

  // para saber mais
  // boa pratica é usar o ===
  // pode ser ==
  // === vai ser importante comentar ===> 1 !== "1", 1 == "1"
  if (opcaoSelecionada === respostaEsperada) {
    pontos++;
  }
  
  perguntaAtual++;
  pergunta();
}
function mostraResultado() {
  textoPergunta.textContent = "Acabou!!!!";
  caixaOpcoes.textContent = "";
  resultadoTexto.textContent = `Voce acertou ${pontos} de ${listaPerguntas.length}.`;
  elementoResultado.classList.add("mostrar");
}

pergunta();
