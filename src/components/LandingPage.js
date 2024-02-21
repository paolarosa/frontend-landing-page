import React from 'react';
import './LandingPage.css';
import foodImage from '../assets/food.png';
import foodImage2 from '../assets/food2.png';
import foodImage3 from '../assets/food3.png';
import logoImage from '../assets/logo.png';
import receitas from '../assets/receitas.png';
import receitas2 from '../assets/receita2.png';
import receitas3 from '../assets/receita3.png'
import pdfFile from '../assets/certificado 4.pdf'
import Card from './Card/Card';

const LandingPage = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'livro_de_receitas.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="landing-page">
            <div className="header">
                <p>Entra e gusta subito i nostri piatti!</p>
            </div>
            <div className='content-logo'>
                <div className="content">
                    <img className="3pratos" src={receitas3} alt="Pratos de Comida" />


                </div>
                <div className="logo">
                    <img src={logoImage} alt="Logo" />
                    <p>Faça download gratuito do nosso livro de receitas!</p>
                    <button onClick={handleDownload}>Download</button>
                </div>
            </div>
            <div className="cards-container">
                <Card imageSrc={foodImage2} title="Card 2" />
                <Card imageSrc={foodImage3} title="Card 3" />
                <Card imageSrc={foodImage3} title="Card 3" />
                <Card imageSrc={foodImage3} title="Card 3" />
                <Card imageSrc={foodImage3} title="Card 3" />
            </div> *

        </div>
    );
}

export default LandingPage;