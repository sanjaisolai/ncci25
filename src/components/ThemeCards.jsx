import React from "react";
import "../styles/themeCard.css";
import iot from "../photo/IOT.jpg";
import android from "../photo/mcd.png";
import compvis from "../photo/compvis.jpeg";
import cyber from "../photo/cs.jpg";
import cloud from "../photo/cloud.jpg";
import bigdata from "../photo/bd.jpg";
import software from "../photo/ss.jpg";
import ai from "../photo/AIA.jpg";
import ml from "../photo/ml.png";
import dl from "../photo/dl.jpg";
import nlp from "../photo/nlp.jpg";
import ias from "../photo/ias.jpg";
import arvr from "../photo/av.jpg";
import collab from "../photo/collaborative.jpg";
import ontology from "../photo/ontology.jpg";
import mmhi from "../photo/MMHI.jpg";
import quantum from "../photo/quantum.jpg";
import adhoc from "../photo/adhoc.jpg";

const ThemeCards = () => {
  const formLink = "https://docs.google.com/forms/d/1W5hHTCvJaAPMP6XnKkwv_3FvV2i8bqGyKFtEnz_Z4QY/edit";

  const colorPalette = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#A78BFA",
    "#FFD166", "#06D6A0", "#118AB2", "#EF476F"
  ];

  const rawCards = [
    { id: 1, title: "CYBER SECURITY", imageUrl: cyber },
    { id: 2, title: "IOT AND DATA SCIENCE", imageUrl: iot },
    { id: 3, title: "ANDROID APPLICATIONS", imageUrl: android },
    { id: 4, title: "IMAGE PROCESSING AND COMPUTER VISION", imageUrl: compvis },
    { id: 5, title: "CLOUD COMPUTING AND ITS APPLICATIONS", imageUrl: cloud },
    { id: 6, title: "BIG DATA ANALYTICS AND GREEN CLOUD", imageUrl: bigdata },
    { id: 7, title: "SOFTWARE DEFINED NETWORKS", imageUrl: software },
    { id: 8, title: "ARTIFICIAL INTELLIGENCE APPLICATIONS", imageUrl: ai },
    { id: 9, title: "MACHINE LEARNING IN CONTROL APPLICATIONS", imageUrl: ml },
    { id: 10, title: "DEEP LEARNING", imageUrl: dl },
    { id: 11, title: "NATURAL LANGUAGE PROCESSING", imageUrl: nlp },
    { id: 12, title: "INTELLIGENT/ADAPTIVE SYSTEMS", imageUrl: ias },
    { id: 13, title: "AUGMENTED REALITY AND VIRTUAL REALITY", imageUrl: arvr },
    { id: 14, title: "COLLABORATIVE LEARNING", imageUrl: collab },
    { id: 15, title: "ONTOLOGY AND SEMANTIC WEB", imageUrl: ontology },
    { id: 16, title: "MULTIMODAL HUMAN COMPUTER INTERFACE", imageUrl: mmhi },
    { id: 17, title: "QUANTUM COMPUTING", imageUrl: quantum },
    { id: 18, title: "ADHOC AND WIRELESS SENSOR NETWORKS", imageUrl: adhoc }
  ];

  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  const cards = rawCards.map((card, index) => {
    const bgColor = colorPalette[index % colorPalette.length];
    return {
      ...card,
      buttonText: "REGISTER",
      bgColor,
      textColor: getContrastColor(bgColor),
      buttonColor: "#ffffff",
      buttonTextColor: bgColor,
      buttonHoverColor: bgColor,
      buttonHoverTextColor: "#ffffff",
      link: formLink
    };
  });

  return (
    <div className="page-container">
      <div className="themes-container">
        <h2 className="section-title">THE THEMES</h2>
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className="theme-card"
              style={{ backgroundColor: card.bgColor }}
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              ></div>
              <div className="card-content">
                <h3 className="card-title" style={{ color: card.textColor }}>
                  {card.title}
                </h3>
                <div className="view-button-container">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                    style={{
                      backgroundColor: card.buttonColor,
                      color: card.buttonTextColor,
                      border: `2px solid ${card.buttonTextColor}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = card.buttonHoverColor;
                      e.currentTarget.style.color = card.buttonHoverTextColor;
                      e.currentTarget.style.borderColor = card.buttonHoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = card.buttonColor;
                      e.currentTarget.style.color = card.buttonTextColor;
                      e.currentTarget.style.borderColor = card.buttonTextColor;
                    }}
                  >
                    {card.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeCards;
