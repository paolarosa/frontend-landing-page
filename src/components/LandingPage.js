import React from "react";
import "./LandingPage.css";
//import foodImage from "../assets/food.png";
import foodImage2 from "../assets/food2.png";
import foodImage3 from "../assets/food3.png";
import logoImage from "../assets/logo.png";
import receita2 from "../assets/2.png";
import receita3 from "../assets/3.png";
import receita4 from "../assets/4.png";
import receita5 from "../assets/5.png";
import receita6 from "../assets/6.png";
import receita7 from "../assets/7.png";
import receitas3 from "../assets/receita3.png";
import pdfFile from "../assets/certificado 4.pdf";
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
        <p>Entra e gusta subito i nostri piatti!</p>
      </div>
      <div className="content-logo">
        <div className="content">
          <img className="3pratos" src={receitas3} alt="Pratos de Comida" />
        </div>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
          <p className="textDownload">
            Faça download gratuito do nosso livro de receitas!
          </p>
          <button className="buttonDownload" onClick={handleDownload}>
            Download
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
        />
        <Card
          imageSrc={receita4}
          title="Card 4"
          recipeName="Piatto Esplorazione"
        />
        <Card
          imageSrc={receita5}
          title="Card 5"
          recipeName="Piatto Esplorazione"
        />
        <Card
          imageSrc={receita6}
          title="Card 6"
          recipeName="Piatto Esplorazione"
        />
        <Card
          imageSrc={receita7}
          title="Card 6"
          recipeName="Piatto Esplorazione"
        />
      </div>{" "}
      *
    </div>
  );
};

export default LandingPage;
