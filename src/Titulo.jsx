import React, { useState } from "react";

function Titulo({ name, paragrafo, cor, imgs, imgs2, frase }) {
  const [texto, setTexto] = useState("estado inicial!");
  const [inputTexto, setInputTexto] = useState("");
  const [imagem, setImagem] = useState(imgs);
  const [corFundo, setCorFundo] = useState("rgb(54, 22, 82)");
  const [corTexto, setCorTexto] = useState("black");
  const [corBotao, setCorBotao] = useState("rgb(240, 177, 253)");

  const transformarImagem = () => {
    setImagem(imgs2);
    if (name =="goku"){
    setCorFundo("rgb(163,224,225)");
    setCorTexto("rgb(118,52,30)");
    setCorBotao("rgb(93,136,219)");
    }
    else{
    setCorFundo("rgb(240, 177, 253)");
    setCorTexto("white");
    setCorBotao("rgb(54, 22, 82)");
    }
  };

  const enviar = () => {
    setTexto(inputTexto);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: corFundo }}>
      <h2 style={{ paddingTop: "250px", color: corTexto }}>{texto}</h2>
      <h1 style={{ color: cor, backgroundColor: corFundo }}>
        Olá, eu sou o {name ? name : "fulano"}
      </h1>
      <img width={200} height={200} src={imagem} alt="Imagem" />
      <button onClick={transformarImagem} style={{ backgroundColor: corBotao }}>Transformar</button>
      <input
        value={inputTexto}
        onChange={(e) => {
          setInputTexto(e.target.value);
        }}
        type="text"
      />
      <button onClick={enviar} style={{ backgroundColor: corBotao }}>Enviar</button>
      {paragrafo ? <h2>{frase}</h2> : <p>Nada!</p>}
    </div>
  );
}

export default Titulo;







