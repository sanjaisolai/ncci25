import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HeroSection from "./components/home.jsx"
import About from "./components/About.jsx"
import Header from "./components/Header.jsx"
import ConferenceAbout from "./components/ConferenceAbout.jsx"
import ThemeCards from "./components/ThemeCards.jsx"
import PersonCards from "./components/PersonCards.jsx"
import ContactPage from "./components/ContactPage.jsx"
import StudentCoord from "./components/StudentCoord.jsx"
import DeadLine from "./components/DeadLine.jsx"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/ConferenceAbout" element={<ConferenceAbout />} />
        <Route path="/ThemeCards" element={<ThemeCards />} />
        <Route path="/PersonCards" element={<PersonCards />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/StudentCoord" element={<StudentCoord />} />
        <Route path="/TimeLine" element={<DeadLine />} />
      </Routes>
    </Router>
  );
}

export default App;