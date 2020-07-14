import { HubConnectionBuilder } from "@microsoft/signalr";

let conexao = null;
async function conectar(url) {
  try {
    conexao = new HubConnectionBuilder().withUrl(url).build();
    await conexao.start();
    return conexao;
  } catch (e) {
    throw new Error("Falha ao Conectar");
  }
}

export { conectar, conexao };
