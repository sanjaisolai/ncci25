import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../photo/IOT.jpg";

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const deadline = new Date('2025-05-08T00:00:00');
    const now = new Date();
    const difference = deadline - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="position-relative text-white d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>

      <div className="position-relative text-center px-3 z-1">
        <h1 className="display-5 fw-bold mb-3" style={{ fontWeight: '700' }}>
          NATIONAL CONFERENCE
        </h1>
        <p className="h3 fw-semibold mb-3">ON COMMUNICATION AND INFORMATICS (NCCI-2025)</p>
        <p className="h3 fw-semibold mb-3">IN HYBRID MODE</p>
        <p className="h3 fw-semibold mb-3">ON</p>
        <p className="display-4 fw-bold mb-4" style={{ fontSize: '2.8rem' }}>MAY 8<sup>th</sup>, 2025</p>
        <p className="h3 fw-bold mt-3">
          SRI VENKATESWARA COLLEGE OF ENGINEERING, SRIPERUMBUDUR
        </p>

        <div className="mt-4">
          <p className="h5 mb-3">Countdown Begins..</p>
          <div className="d-flex justify-content-center gap-4 mt-2 flex-wrap text-center">
            <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <span>{timeLeft.days || '00'}</span>
              <div className="h6">Days</div>
            </div>
            <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <span>{timeLeft.hours || '00'}</span>
              <div className="h6">Hours</div>
            </div>
            <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <span>{timeLeft.minutes || '00'}</span>
              <div className="h6">Minutes</div>
            </div>
            <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <span>{timeLeft.seconds || '00'}</span>
              <div className="h6">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
