import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../photo/siva.jpg';
import image2 from '../photo/ganesh.jpg';
import image3 from '../photo/hod.jpg';
import backgroundImage from '../photo/hp.jpeg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr.M.Sivanandham',
      position: 'CHIEF PATRON',
      image: image1,
      description: 'Secretary, SVEHT'
    },
    {
      id: 2,
      name: 'Dr.S.Ganesh Vaidyanathan',
      position: 'PATRON',
      image: image2,
      description: 'PRINCIPAL, SVCE'
    },
    {
      id: 3,
      name: 'DR.V.VIDHYA',
      position: 'CONFERENCE CHAIR',
      image: image3,
      description: 'HOD/IT, SVCE'
    }
  ];

  return (
    <div 
      className="text-white py-3 px-2 min-vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3 text-center">ABOUT</h2>

        <div className="border border-white p-3 mb-3 bg-dark bg-opacity-75">
        <p className="mb-3">
            <strong>Sri Venkateswara College of Engineering</strong>, established in 1985, is a leading self-financing engineering institution
            managed by the Sri Venkateswara Educational and Health Trust. The college offers programs that are approved by the Government of
            Tamil Nadu and the AICTE, and it is affiliated with Anna University. It has also received accreditation from the National Assessment
            and Accreditation Council, reflecting its commendable standards.
          </p>

          <p className="mb-0">
            <strong>The Department of Information Technology</strong> has well qualified faculty and is running undergraduate courses in
            Information Technology and post graduate course in M Tech Cyber Forensics and Information Security. This is the first of its kind in
            Indian Universities. B.Tech Information Technology has been accredited by National Board of Accreditation till 2028.
          </p>
        </div>

        {/* Key People Section */}
        <h3 className="text-center mb-3 fw-bold">KEY PEOPLE</h3>
        <div className="row g-2 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <div className="card w-100 border-0 bg-dark text-white shadow-sm d-flex flex-column bg-opacity-75">
                <div className="card-img-top" style={{ 
                  height: '200px', 
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="img-fluid h-100 w-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body d-flex flex-column p-2 text-center">
                  <h5 className="card-title fw-bold text-info mb-1" style={{ fontSize: '1rem' }}>{member.name}</h5>
                  <h6 className="card-subtitle mb-1 text-warning" style={{ fontSize: '0.8rem' }}>{member.position}</h6>
                  <p className="card-text mt-1 mb-0" style={{ fontSize: '0.8rem' }}>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;