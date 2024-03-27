//Atividade 01
let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};
// const lampada = () => {
// };

//Atividade 02
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //Valor informado pelo usuário
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  console.log(qtdImagem);

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class = "imagens" src="https://media.istockphoto.com/id/1628580367/photo/christmas-background.jpg?b=1&s=612x612&w=0&k=20&c=0Dzyh25I7dhpGDkJpvpvohwNTqoqv69TUidWD1pDzMU=" alt="" />`;
  }
};

//Atividade 03
const validaForm = () => {
  let msgErro = document.getElementById("mensagem-erro");
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;

  //Apagando as informações de erro
  msgErro.innerText = "";

  //Validação dos dados
  inData == "" && (msgErro.innerHTML += "'Data' inválida! <br>");
  inCli == "" && (msgErro.innerHTML += "'Nome do cliente' inválido! <br>");
  inCli.length < 5 &&
    (msgErro.innerHTML += "'Nome do cliente' com tamanho inválido!");
  inFone == "" && (msgErro.innerHTML += "'Telefone' inválido! <br>");
  inMail == "" && (msgErro.innerHTML += "'E-mail' inválido! <br>");
  inMail.length < 6 &&
    (msgErro.innerHTML += "'E-mail' com tamanho inválido! <br>");
  inProd == "" && (msgErro.innerHTML += "'Produto' inválido! <br>");
  inProd.length < 6 &&
    (msgErro.innerHTML += "'Produto' com tamanho inválido! <br>");
  inQtd == "" && (msgErro.innerHTML += "'Quantidade' inválida! <br>");
  inQtd < 0 && (msgErro.innerHTML += "'Quantidade' negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "'Valor unitário' inválido! <br>");
  inVal < 0 && (msgErro.innerHTML += "'Valor unitário' negativo! <br>");

  //Mostrar | Ocultar erros
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "Enviado!"))
    : (msgErro.style.display = "block");

  msgErro.innerHTML == "Enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};


//Atividade 04
const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido");
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  if (inValorPedido.value >= 2000) {
    inPercDesc.value = 1.5;
    inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1500) {
    inPercDesc.value = 1.0;
    inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1000) {
    inPercDesc.value = 0.8;
    inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 500) {
    inPercDesc.value = 0.5;
    inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value < 500) {
    //Para valores menores que R$500, ou seja, sem desconto!
    inPercDesc.value = 0;
    inValDesc.value = inPercDesc.value;
    inValFinal.value = inValorPedido.value;
  }
};

//Outra forma de resolver (cleanCode):
// const calcular = () => {
//   let inValorPedido = document.getElementById("inValorPedido");
//   let inPercDesc = document.getElementById("inPercDesc");
//   let inValDesc = document.getElementById("inValDesc");
//   let inValFinal = document.getElementById("inValFinal");

//   if (inValorPedido.value >= 2000) {
//     inPercDesc.value = 1.5;
//   } else if (inValorPedido.value >= 1500) {
//     inPercDesc.value = 1.0;
//   } else if (inValorPedido.value >= 1000) {
//     inPercDesc.value = 0.8;
//   } else if (inValorPedido.value >= 500) {
//     inPercDesc.value = 0.5;
//   } else if (inValorPedido.value < 500) { //Para valores menores que R$500, ou seja, sem desconto!
//     inPercDesc.value = 0;
//   }
//   inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
//   inValFinal.value = inValorPedido.value - inValDesc.value;
// };

//Outra forma de resolver (switchCase)
// const calcular = () => {
//   let inValorPedido = document.getElementById("inValorPedido");
//   let inPercDesc = document.getElementById("inPercDesc");
//   let inValDesc = document.getElementById("inValDesc");
//   let inValFinal = document.getElementById("inValFinal");

//   switch (true) {
//     case inValorPedido >= 2000:
//       inPercDesc.value = 1.5;
//       break;
//     case inValorPedido >= 1500:
//       inPercDesc.value = 1;
//       break;
//     case inValorPedido >= 1000:
//       inPercDesc.value = 0.8;
//       break;
//     case inValorPedido >= 500:
//       inPercDesc.value = 0.5;
//       break;
//     };
// inValDesc.value = (inValorPedido.value / 100) * inPercDesc.value;
// inValFinal.value = inValorPedido.value - inValDesc.value;
// };
