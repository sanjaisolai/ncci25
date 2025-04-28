import React from "react";
import img1 from '../photo/rv.jpg';
import img15 from '../photo/Meghavarshinj.jpg';
import img2 from '../photo/Madhu.jpg';
import img7 from '../photo/Keerthana.jpg';
import img13 from '../photo/Sanjana.jpg';
import img8 from '../photo/Dhanesh.jpg';
import img14 from '../photo/Swathi.jpg';
import img9 from '../photo/sachin.jpg';
import img11 from '../photo/rahul.jpg';
import img6 from '../photo/bhuvana.jpg';
import img10 from '../photo/naveen.jpg';
import img5 from '../photo/Aarthi.jpg';
import img3 from '../photo/sanjai.jpg';
import img4 from '../photo/dheekshitha.jpg';
import img18 from '../photo/vignesh.jpg';
import img16 from '../photo/shajini.jpg';
import img17 from '../photo/devasena.jpeg';
import img19 from '../photo/sanjeev.jpg';

const StudentCoord = () => {
  const people = [
    { id: 1, name: "R MADHUMITHA", designation: "General Secretary", imageUrl: img2 },
    { id: 2, name: "G RAJA VISHALINI", designation: "Treasurer", imageUrl: img1 },
    { id: 6, name: "BUVARNA RITHIKA", designation: "Executive Member", imageUrl: img6 },
    { id: 8, name: "DHANESH", designation: "Executive Member", imageUrl: img8 },
    { id: 13, name: "SANJANA", designation: "Executive Member", imageUrl: img13 },
    { id: 14, name: "SWATHI A", designation: "Executive Member", imageUrl: img14 },
    { id: 15, name: "MEGAVARSHINI", designation: "Executive Member", imageUrl: img15 },
    { id: 3, name: "SANJAI SOLAIRAJA", designation: "Technical wing Lead", imageUrl: img3 },
    { id: 19, name: "J SANJEEV KUMAR", designation: "Design wing Lead", imageUrl: img19 },
    { id: 4, name: "DHEEKSHITHA", designation: "Operational wing lead", imageUrl: img4 },
    { id: 5, name: "AARTHI", designation: "Technical wing member", imageUrl: img5 },
    { id: 7, name: "KEERTHANA", designation: "Design wing member", imageUrl: img7 },
    { id: 9, name: "SACHIN KRISHNAA", designation: "Technical wing member", imageUrl: img9 },
    { id: 10, name: "NAVEEN S", designation: "Technical wing member", imageUrl: img10 },
    { id: 11, name: "RAHUL K", designation: "Technical wing member", imageUrl: img11 },
    { id: 16, name: "SHAJINI", designation: "Design wing member", imageUrl: img16 },
    { id: 17, name: "DEVASENA", designation: "Operational wing member", imageUrl: img17 },
    { id: 18, name: "SHRI VIGNESH", designation: "Operational wing member", imageUrl: img18 },
  ];

  const styles = {
    pageContainer: { padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" },
    peopleContainer: { maxWidth: "1200px", margin: "0 auto", padding: "20px" },
    sectionTitle: { textAlign: "center", marginBottom: "30px", color: "#333", fontSize: "2rem" },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // 👈 Auto adjust columns
      gap: "20px",
      justifyItems: "center",
    },
    personCard: {
      width: "100%",
      maxWidth: "250px",
      background: "white",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
      textAlign: "center",
    },
    imageWrapper: {
      width: "100%",
      aspectRatio: "1/1",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f0f0f0"
    },
    personImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 20%"
    },
    personInfo: {
      padding: "12px",
    },
    personName: {
      margin: "0",
      fontSize: "1rem", // Default for desktop
      fontWeight: "600",
      color: "#333",
    },
    personDesignation: {
      margin: "4px 0 0",
      fontSize: "0.85rem",
      color: "#777",
    },
    // Responsive styles
    '@media (max-width: 600px)': {
      sectionTitle: {
        fontSize: "1.5rem"
      },
      personName: {
        fontSize: "0.9rem", // 👈 Smaller name on small screens
      },
      personDesignation: {
        fontSize: "0.75rem", // 👈 Smaller designation on small screens
      }
    }
  };
  

  return (
    <div style={styles.pageContainer}>
      <div style={styles.peopleContainer}>
        <h2 style={styles.sectionTitle}>Student Coordinators</h2>
        <div style={styles.cardsGrid}>
          {people.map((person) => (
            <div 
              key={`${person.id}-${person.name}`} 
              style={styles.personCard}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
            >
              <div style={styles.imageWrapper}>
                <img 
                  src={person.imageUrl} 
                  alt={person.name}
                  style={styles.personImage}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/250";
                  }}
                />
              </div>
              <div style={styles.personInfo}>
                <h3 style={styles.personName}>{person.name}</h3>
                <p style={styles.personDesignation}>{person.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCoord;
