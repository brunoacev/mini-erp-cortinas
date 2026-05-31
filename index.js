let opcao = "";
let pedidos = [];

while (opcao !== "0") {
  opcao = prompt(
    "=================================\n" +
      "   MINI ERP - FÁBRICA DE CORTINAS\n" +
      "=================================\n\n" +
      "1 - Criar Pedido\n" +
      "2 - Listar Pedidos\n" +
      "0 - Sair\n\n" +
      "Digite a opção: ",
  );

  switch (opcao) {
    case "1":
      criarPedido();
      break;

    case "2":
      listarPedidos();
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
  let cliente = prompt("\nDigite o nome do cliente: ");

  let modelo = prompt(
    "\nEscolha o modelo:\n\n" +
      "1 - Cortina Tradicional\n" +
      "2 - Cortina Motorizada\n\n" +
      "Digite a opção: ",
  );

  let nomeModelo = "";

  if (modelo === "1") {
    nomeModelo = "Cortina Tradicional";
  } else if (modelo === "2") {
    nomeModelo = "Cortina Motorizada";
  } else {
    console.log("Modelo inválido.");
    return;
  }

  let quantidade = Number(prompt("Digite a quantidade: "));

  if (quantidade <= 0) {
    console.log("Quantidade inválida.");
    return;
  }

  let pedido = [];
  // [0] = ID -- [1] = Nome Cliente -- [2] = Modelo -- [3] = Quantidade do produto -- [4] = Status do pedido.

  pedido[0] = pedidos.length + 1;
  pedido[1] = cliente;
  pedido[2] = nomeModelo;
  pedido[3] = quantidade;
  pedido[4] = "Pedido Criado";

  console.log(
    "\n\nPEDIDO CRIADO COM SUCESSO!\n\n" +
      "ID: " +
      pedido[0] +
      "\n" +
      "Cliente: " +
      pedido[1] +
      "\n" +
      "Modelo: " +
      pedido[2] +
      "\n" +
      "Quantidade: " +
      pedido[3] +
      "\n\n",
  );

  pedidos.push(pedido);
}

function listarPedidos() {
  if (pedidos.length === 0) {
    console.log("\nNenhum pedido cadastrado. \n\n");
    return;
  }

  let relatorio = "===== LISTA DE PEDIDOS =====\n\n";

  for (let i = 0; i < pedidos.length; i++) {
    relatorio +=
      "ID: " +
      pedidos[i][0] +
      "\n" +
      "Cliente: " +
      pedidos[i][1] +
      "\n" +
      "Modelo: " +
      pedidos[i][2] +
      "\n" +
      "Quantidade: " +
      pedidos[i][3] +
      "\n" +
      "Status: " +
      pedidos[i][4] +
      "\n\n";
  }

  console.log(relatorio);
}
