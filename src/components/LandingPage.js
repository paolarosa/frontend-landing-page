import React from "react";
import "./LandingPage.css";
//import foodImage from "../assets/food.png";
import foodImage2 from "../assets/food2.png";
import foodImage3 from "../assets/food3.png";
import fundo from "../assets/fundosemfundo.png";
import logoImage from "../assets/logo.png";
import receita2 from "../assets/2.png";
import receita3 from "../assets/3.png";
import receita4 from "../assets/4.png";
import receita5 from "../assets/5.png";
import receita6 from "../assets/6.png";
import receita7 from "../assets/7.png";
import receita8 from "../assets/8.png";
import receita9 from "../assets/9.png";
import receitas3 from "../assets/receita3.png";
import pratos2 from "../assets/2pratos.png";
import pdfFile from "../assets/todasreceitas.pdf";
import Card from "./Card/Card";

const LandingPage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "livro_de_receitas.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="landing-page">
      <div className="header">
        <div>
          <p>Entra e gusta subito i nostri piatti!</p>
        </div>
      </div>
      <div className="content-logo">
        <div className="content">
          <img className="3pratos" src={pratos2} alt="Pratos de Comida" />
        </div>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
          <p className="textDownload">
            Scarica gratuitamente il nostro ricettario!
          </p>
          <button className="buttonDownload" onClick={handleDownload}>
            Scaricamento
          </button>
        </div>
      </div>
      <div className="cards-container">
        <Card
          imageSrc={receita2}
          title="Card 2"
          recipeName="Piatto Unico"
          pdfFile={require("../assets/2.pdf")}
        />
        <Card
          imageSrc={receita3}
          title="Card 3"
          recipeName="Zuppe e Minestre"
          pdfFile={require("../assets/3.pdf")}
        />
        <Card
          imageSrc={receita4}
          title="Card 4"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/4.pdf")}
        />
        <Card
          imageSrc={receita5}
          title="Card 5"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/5.pdf")}
        />
        <Card
          imageSrc={receita6}
          title="Card 6"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/6.pdf")}
        />
        <Card
          imageSrc={receita7}
          title="Card 7"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/7.pdf")}
        />
        <Card
          imageSrc={receita8}
          title="Card 8"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/8.pdf")}
        />
        <Card
          imageSrc={receita9}
          title="Card 9"
          recipeName="Piatto Esplorazione"
          pdfFile={require("../assets/9.pdf")}
        />
      </div>{" "}
      *
    </div>
  );
};

export default LandingPage;
