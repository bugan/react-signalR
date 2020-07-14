const { conexao } = require("./Conexao");
const cards = [];

const dados = {
  titulo: "titulo",
  conteudo: "conteudo",
};

function criarCard() {
  cards.push(dados);
  conexao.invoke("CreateCard", dados);
}

function deletarCard(id) {
  cards.splice(id, 1);
  conexao.invoke("DeleteCard", id);
}

export { criarCard, deletarCard, cards };
