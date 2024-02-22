import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, recipeName, pdfFile }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "livro_de_receitas.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="overlay">
        <button className="download-button" onClick={handleDownload}>
          Fazer download da receita
        </button>
      </div>
      <h3>{recipeName}</h3>
    </div>
  );
};

export default Card;
