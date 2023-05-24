const criptografar = (event) => {
  event.preventDefault();

  let imagemPessoaLupa = document.getElementById("imagem-pessoa-lupa");
  let textoProcessado = document.getElementById("texto-processado");
  let textoEntrada = document.getElementsByClassName("texto-entrada");
  let textoSaida = document.getElementById("paragrafo-processado");

  imagemPessoaLupa.style.display = "none";
  textoProcessado.style.display = "flex";
  textoSaida.innerHTML = textoEntrada[0].value;
  const texto = textoEntrada[0].value;

  let textoCriptografado = "";
  // 135246
  for (let letra in texto) {
    if (letra % 2 === 0) {
      textoCriptografado += texto[letra];
    }
  }

  for (let letra in texto) {
    if (letra % 2 === 1) {
      textoCriptografado += texto[letra];
    }
  }

  textoSaida.innerHTML = textoCriptografado;
};

const descriptografar = (event) => {
  event.preventDefault();

  let imagemPessoaLupa = document.getElementById("imagem-pessoa-lupa");
  let textoProcessado = document.getElementById("texto-processado");
  let textoEntrada = document.getElementsByClassName("texto-entrada");
  let textoSaida = document.getElementById("paragrafo-processado");

  imagemPessoaLupa.style.display = "none";
  textoProcessado.style.display = "inline-block";
  textoSaida.innerHTML = textoEntrada[0].value;
  const textoCriptografado = textoEntrada[0].value;

  let textoDescriptografado = "";
  const tamanhoCrypt = textoCriptografado.length;

  if (tamanhoCrypt % 2 === 1) {
    const metadeTamanhoTextCryp = tamanhoCrypt / 2;
    for (let letra in textoCriptografado) {
      if (letra < tamanhoCrypt / 2 - 1) {
        textoDescriptografado += textoCriptografado[letra];
        textoDescriptografado +=
          textoCriptografado[Number(letra) + metadeTamanhoTextCryp + 0.5];
      } else if (letra < tamanhoCrypt / 2) {
        textoDescriptografado += textoCriptografado[letra];
      }
    }
  }

  if (tamanhoCrypt % 2 === 0) {
    const metadeTamanhoTextCryp = tamanhoCrypt / 2;
    for (let letra in textoCriptografado) {
      if (letra < tamanhoCrypt / 2) {
        textoDescriptografado += textoCriptografado[letra];
        textoDescriptografado +=
          textoCriptografado[Number(letra) + metadeTamanhoTextCryp];
      }
    }
  }

  textoSaida.innerHTML = textoDescriptografado;
};

const copiarTexto = () => {
  var elementoTexto = document.getElementById("paragrafo-processado");
  var botaoCopiar = document.getElementById("botao-copiar");

  var areaTextoTemporaria = document.createElement("textarea");
  areaTextoTemporaria.value = elementoTexto.textContent;
  document.body.appendChild(areaTextoTemporaria);

  areaTextoTemporaria.select();
  areaTextoTemporaria.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(areaTextoTemporaria);

  botaoCopiar.textContent = "Copiado!";
};
