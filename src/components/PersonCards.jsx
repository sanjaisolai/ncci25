import React from "react";
import "../styles/PersonCards.css";
import img1 from '../photo/hod.png';
import img2 from '../photo/G.Sumathi.jpg';
import img3 from '../photo/yas.png';
import img4 from '../photo/devi.png';
import img5 from '../photo/jayanthi.jpg';
import img6 from '../photo/Leela Rani.jpg';
import img7 from '../photo/kala.JPG';
import img8 from '../photo/Dr.K.Kiruthika Devi INT.jpg';
import img9 from '../photo/sharon.jpeg';
import img10 from '../photo/suresh.png';
import img11 from '../photo/indhu.png';
import img13 from '../photo/sivagami.jpg';

const PersonCards = () => {
  const people = [
    {
      id: 1,
      name: "DR.V.Vidhya",
      designation: "PROFESSOR AND HEAD,IT",
      imageUrl: img1
    },
    {
      id: 2,
      name: "Dr.G.Sumathi",
      designation: "PROFESSOR",
      imageUrl: img2
    },
    {
      id: 3,
      name: "Dr.V.M.Sivagami",
      designation: "PROFESSOR",
      imageUrl: img13
    },
    {
      id: 14,
      name: "Dr.C.Yaashuwanth",
      designation: "PROFESSOR",
      imageUrl: img3
    },
    {
      id: 4,
      name: "Dr.N.Devi",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img4
    },
    {
      id: 5,
      name: "Dr.D.Jayanthi",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img5
    },
    {
      id: 6,
      name: "Dr.P.Leela Rani",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img6
    },
    {
      id: 7,
      name: "Dr.A.Kala",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img7
    },
    {
      id: 8,
      name: "Dr.K.Kiruthika Devi",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img8
    },
    {
      id: 9,
      name: "Dr.P.Sharon Femi",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img9
    },
    {
      id: 10,
      name: "Dr.K.Suresh",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img10
    },
    {
      id: 13,
      name: "Dr.A.Indumathi",
      designation: "ASSOCIATE PROFESSOR",
      imageUrl: img11
    },
  ];

  return (
    <div className="page-container" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="people-container">
        <h2 className="section-title">Session Chairs</h2>
        <div className="cards-grid">
          {people.map((person) => {
            const isSuresh = person.name === "Dr.K.Suresh";

            return (
              <div
                key={person.id}
                className="person-card"
              >
                <div className={`image-container ${isSuresh ? "suresh-style" : ""}`}>
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className={`person-image ${isSuresh ? "suresh-image" : ""}`}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
                <div className="person-info">
                  <h3 className="person-name">{person.name}</h3>
                  <p className="person-designation">{person.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonCards;
