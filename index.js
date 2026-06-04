let opcao = "";
let pedidos = [];
let estoqueTradicional = [0, 0, 0];
let estoqueMotorizada = [0, 0, 0, 0, 0];
let producaoTradicional = [0, 0, 0];
let producaoMotorizada = [0, 0, 0, 0, 0];
let pedidosConcluidos = [];

while (opcao !== "0") {
  opcao = prompt(
    "=================================\n" +
      "   MINI ERP - FÁBRICA DE CORTINAS\n" +
      "=================================\n\n" +
      "1 - Criar Pedido\n" +
      "2 - Listar Pedidos\n" +
      "3 - Almoxarifado\n" +
      "4 - Produção\n" +
      "5 - Consultar Estoque\n" +
      "6 - Expedição / Finalizar Pedido\n" +
      "7 - Pedidos Concluídos\n" +
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

    case "3":
      menuAlmoxarifado();
      break;

    case "4":
      menuProducao();
      break;

    case "5":
      consultarEstoque();
      break;

    case "6":
      finalizarProducao();
      break;

    case "7":
      listarPedidosConcluidos();
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

  pedidos[pedidos.length] = pedido;
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

function menuAlmoxarifado() {
  // estoqueMotorizada
  // [0] = trilho
  // [1] = tecido
  // [2] = argolas
  // [3] = motor
  // [4] = controle

  // estoqueTradicional
  // [0] = trilho
  // [1] = tecido
  // [2] = argolas

  let opcaoAlmoxarifado = "";

  while (opcaoAlmoxarifado !== "0") {
    opcaoAlmoxarifado = prompt(
      "=========== ALMOXARIFADO ===========\n\n" +
        "1 - Inserir materiais Tradicional\n" +
        "2 - Inserir materiais Motorizada\n" +
        "0 - Voltar\n\n" +
        "Digite a opção: ",
    );

    switch (opcaoAlmoxarifado) {
      case "1":
        estoqueTradicional[0] += 1; // trilho
        estoqueTradicional[1] += 1; // tecido
        estoqueTradicional[2] += 8; // argolas

        console.log("\nMaterial enviado para produção Tradicional.\n");

        break;

      case "2":
        estoqueMotorizada[0] += 1; // trilho
        estoqueMotorizada[1] += 1; // tecido
        estoqueMotorizada[2] += 8; // argolas
        estoqueMotorizada[3] += 1; // motor
        estoqueMotorizada[4] += 1; // controle

        console.log("\nMaterial enviado para produção Motorizada.\n");

        break;

      case "0":
        console.log("\nVoltando ao menu principal.\n");
        break;

      default:
        console.log("\nOpção inválida.\n");
        break;
    }
  }
}

function menuProducao() {
  let opcaoProducao = "";

  while (opcaoProducao !== "0") {
    opcaoProducao = prompt(
      "============= PRODUÇÃO =============\n\n" +
        "1 - Receber material Tradicional\n" +
        "2 - Receber material Motorizada\n" +
        "0 - Voltar\n\n" +
        "Digite a opção: ",
    );

    switch (opcaoProducao) {
      case "1":
        let quantidade = Number(
          prompt("Quantas cortinas tradicionais deseja produzir?: "),
        );

        if (
          estoqueTradicional[0] >= quantidade &&
          estoqueTradicional[1] >= quantidade &&
          estoqueTradicional[2] >= quantidade * 8
        ) {
          estoqueTradicional[0] -= quantidade;
          estoqueTradicional[1] -= quantidade;
          estoqueTradicional[2] -= quantidade * 8;

          producaoTradicional[0] += quantidade;
          producaoTradicional[1] += quantidade;
          producaoTradicional[2] += quantidade * 8;

          console.log(
            "\nProdução recebeu material para " +
              quantidade +
              " cortina tradicional.\n",
          );
        } else {
          console.log(
            "\nEstoque insuficiente para produzir " +
              quantidade +
              " cortina.\n",
          );
        }

        break;

      case "2":
        let quantidadeMotorizada = Number(
          prompt("Quantas cortinas motorizadas deseja produzir?: "),
        );

        if (quantidadeMotorizada <= 0) {
          console.log("\nQuantidade inválida.\n");
          break;
        }

        if (
          estoqueMotorizada[0] >= quantidadeMotorizada &&
          estoqueMotorizada[1] >= quantidadeMotorizada &&
          estoqueMotorizada[2] >= quantidadeMotorizada * 8 &&
          estoqueMotorizada[3] >= quantidadeMotorizada &&
          estoqueMotorizada[4] >= quantidadeMotorizada
        ) {
          estoqueMotorizada[0] -= quantidadeMotorizada;
          estoqueMotorizada[1] -= quantidadeMotorizada;
          estoqueMotorizada[2] -= quantidadeMotorizada * 8;
          estoqueMotorizada[3] -= quantidadeMotorizada;
          estoqueMotorizada[4] -= quantidadeMotorizada;

          producaoMotorizada[0] += quantidadeMotorizada;
          producaoMotorizada[1] += quantidadeMotorizada;
          producaoMotorizada[2] += quantidadeMotorizada * 8;
          producaoMotorizada[3] += quantidadeMotorizada;
          producaoMotorizada[4] += quantidadeMotorizada;

          console.log(
            "\nProdução recebeu material para " +
              quantidadeMotorizada +
              " cortina motorizada.\n",
          );
        } else {
          console.log(
            "\nEstoque insuficiente para produzir " +
              quantidadeMotorizada +
              " cortina motorizada.\n",
          );
        }

        break;
      case "0":
        console.log("\nVoltando ao menu principal.\n");
        break;

      default:
        console.log("\nOpção inválida.\n");
        break;
    }
  }
}

function consultarEstoque() {
  console.log(
    "\n===== ESTOQUE DO ALMOXARIFADO =====\n\n" +
      "CORTINA TRADICIONAL\n" +
      "Trilho: " +
      estoqueTradicional[0] +
      "\n" +
      "Tecido: " +
      estoqueTradicional[1] +
      "\n" +
      "Argolas: " +
      estoqueTradicional[2] +
      "\n\n" +
      "CORTINA MOTORIZADA\n" +
      "Trilho: " +
      estoqueMotorizada[0] +
      "\n" +
      "Tecido: " +
      estoqueMotorizada[1] +
      "\n" +
      "Argolas: " +
      estoqueMotorizada[2] +
      "\n" +
      "Motor: " +
      estoqueMotorizada[3] +
      "\n" +
      "Controle: " +
      estoqueMotorizada[4] +
      "\n\n" +
      "===== MATERIAL RECEBIDO NA PRODUÇÃO =====\n\n" +
      "PRODUÇÃO TRADICIONAL\n" +
      "Trilho: " +
      producaoTradicional[0] +
      "\n" +
      "Tecido: " +
      producaoTradicional[1] +
      "\n" +
      "Argolas: " +
      producaoTradicional[2] +
      "\n\n" +
      "PRODUÇÃO MOTORIZADA\n" +
      "Trilho: " +
      producaoMotorizada[0] +
      "\n" +
      "Tecido: " +
      producaoMotorizada[1] +
      "\n" +
      "Argolas: " +
      producaoMotorizada[2] +
      "\n" +
      "Motor: " +
      producaoMotorizada[3] +
      "\n" +
      "Controle: " +
      producaoMotorizada[4] +
      "\n",
  );
}

function finalizarProducao() {
  if (pedidos.length === 0) {
    console.log("\nNenhum pedido cadastrado.\n");
    return;
  }

  let idPedido = Number(prompt("Digite o ID do pedido que deseja finalizar: "));
  let pedidoEncontrado = -1;

  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i][0] === idPedido) {
      pedidoEncontrado = i;
      break;
    }
  }

  if (pedidoEncontrado === -1) {
    console.log("\nPedido não encontrado.\n");
    return;
  }

  let pedido = pedidos[pedidoEncontrado];
  let modelo = pedido[2];
  let quantidade = pedido[3];

  if (pedido[4] === "Pedido Concluído") {
    console.log("\nEste pedido já foi concluído.\n");
    return;
  }

  if (modelo === "Cortina Tradicional") {
    if (
      producaoTradicional[0] >= quantidade &&
      producaoTradicional[1] >= quantidade &&
      producaoTradicional[2] >= quantidade * 8
    ) {
      producaoTradicional[0] -= quantidade;
      producaoTradicional[1] -= quantidade;
      producaoTradicional[2] -= quantidade * 8;

      pedido[4] = "Pedido Concluído";
      pedidosConcluidos[pedidosConcluidos.length] = pedido;

      console.log(
        "\nPEDIDO CONCLUÍDO COM SUCESSO!\n\n" +
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
          "\n" +
          "Status: " +
          pedido[4] +
          "\n",
      );
    } else {
      console.log(
        "\nMaterial insuficiente na produção para concluir este pedido.\n",
      );
    }
  } else if (modelo === "Cortina Motorizada") {
    if (
      producaoMotorizada[0] >= quantidade &&
      producaoMotorizada[1] >= quantidade &&
      producaoMotorizada[2] >= quantidade * 8 &&
      producaoMotorizada[3] >= quantidade &&
      producaoMotorizada[4] >= quantidade
    ) {
      producaoMotorizada[0] -= quantidade;
      producaoMotorizada[1] -= quantidade;
      producaoMotorizada[2] -= quantidade * 8;
      producaoMotorizada[3] -= quantidade;
      producaoMotorizada[4] -= quantidade;

      pedido[4] = "Pedido Concluído";
      pedidosConcluidos[pedidosConcluidos.length] = pedido;

      console.log(
        "\nPEDIDO CONCLUÍDO COM SUCESSO!\n\n" +
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
          "\n" +
          "Status: " +
          pedido[4] +
          "\n",
      );
    } else {
      console.log(
        "\nMaterial insuficiente na produção para concluir este pedido.\n",
      );
    }
  }
}

function listarPedidosConcluidos() {
  if (pedidosConcluidos.length === 0) {
    console.log("\nNenhum pedido concluído.\n");
    return;
  }

  let relatorio = "===== PEDIDOS CONCLUÍDOS =====\n\n";

  for (let i = 0; i < pedidosConcluidos.length; i++) {
    relatorio +=
      "ID: " +
      pedidosConcluidos[i][0] +
      "\n" +
      "Cliente: " +
      pedidosConcluidos[i][1] +
      "\n" +
      "Modelo: " +
      pedidosConcluidos[i][2] +
      "\n" +
      "Quantidade: " +
      pedidosConcluidos[i][3] +
      "\n" +
      "Status: " +
      pedidosConcluidos[i][4] +
      "\n\n";
  }

  console.log(relatorio);
}
