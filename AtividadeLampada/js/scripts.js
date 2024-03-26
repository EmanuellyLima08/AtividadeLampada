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

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //Valor informado pelo usuário
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  console.log(qtdImagem);

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class = "imagens" src="https://media.istockphoto.com/id/1628580367/photo/christmas-background.jpg?b=1&s=612x612&w=0&k=20&c=0Dzyh25I7dhpGDkJpvpvohwNTqoqv69TUidWD1pDzMU=" alt="" />`;
  }
};
