let opcao = "";
let pedidos = [];

while (opcao !== "0") {
  opcao = prompt(
    "=================================\n" +
      "   MINI ERP - FÁBRICA DE CORTINAS\n" +
      "=================================\n\n" +
      "1 - Criar Pedido\n" +
      "0 - Sair\n\n" +
      "Digite a opção: ",
  );

  switch (opcao) {
    case "1":
      criarPedido();
      break;

    case "0":
      console.log("Sistema encerrado.");
      break;

    default:
      console.log("Opção inválida.");
      break;
  }
}

function criarPedido() {
  let cliente = prompt("Digite o nome do cliente: ");

  let modelo = prompt(
    "\n\nEscolha o modelo:\n\n" +
      "1 - Cortina Tradicional\n" +
      "2 - Cortina Motorizada\n" +
      "Digite a opção: ",
  );
}
