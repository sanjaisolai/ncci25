import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../photo/IT.jpg';
import img1 from '../photo/t.jpg'; 
import img2 from '../photo/sivagami.jpg'; // Import Sivagami's image

const ConferenceAbout = () => {
    const teamMembers = [
        {
          id: 1,
          name: ' SIVAGAMI V M ',
          position: 'PROFESSOR',
          image: img2,
        },
        {
          id: 2,
          name: 'THIYAGARAJAN',
          position: 'ASSISTANT PROFESSOR',
          image: img1,
        }
    ];

    return (
      <div 
        className="py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4 fw-bold text-white">About the Conference</h2>
              
              <div className="border border-white p-3 mb-3 bg-dark bg-opacity-75">
                <div className="card-body p-4 p-md-5">
                  <p className="lead mb-4 text-white">
                    The fields of <strong className="text-primary">communications and informatics</strong> are undergoing revolutionary changes, 
                    driven by cutting-edge research and technological breakthroughs. This conference brings together 
                    leading researchers, industry experts, and innovators to explore the frontiers of these 
                    transformative disciplines.
                  </p>
  
                  <h4 className="mb-3 fw-semibold text-white">Conference Highlights</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <span className="me-2 text-primary fs-5">•</span>
                      <span className="text-white">
                        <strong>Knowledge Exchange:</strong> Present and discuss groundbreaking research in communication 
                        systems, AI algorithms, and informatics paradigms.
                      </span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="me-2 text-primary fs-5">•</span>
                      <span className="text-white">
                        <strong>Industry-Academia Collaboration:</strong> Bridge theory and practice through 
                        strategic partnerships and joint initiatives.
                      </span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="me-2 text-primary fs-5">•</span>
                      <span className="text-white">
                        <strong>Innovation Showcase:</strong> Feature transformative concepts and next-generation 
                        technological solutions.
                      </span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2 text-primary fs-5">•</span>
                      <span className="text-white">
                        <strong>Future Trends:</strong> Explore emerging challenges in quantum communications, 
                        edge computing, and sustainable informatics.
                      </span>
                    </li>
                  </ul>
  
                  <div className="mt-4 p-3 rounded-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                    <h5 className="fw-semibold mb-2 text-primary">Why Participate?</h5>
                    <p className="mb-0 text-white">
                      Engage with leading experts across the country to exchange ideas, build valuable connections, and play a key role in advancing the future of communication technologies and informatics research at the national level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key People Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <h3 className="text-center mb-4 fw-bold text-white">ORGANIZERS</h3>
            </div>
            <div className="col-lg-8">
              <div className="row justify-content-center g-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="col-md-6 col-lg-5 d-flex">
                    <div className="card w-100 border-0 bg-dark text-white shadow-lg d-flex flex-column bg-opacity-75">
                      <div className="card-img-top" style={{ 
                        height: '300px', 
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#343a40'
                      }}>
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="img-fluid h-100 w-auto"
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="d-flex align-items-center justify-content-center h-100 w-100">
                            <span className="text-muted">No Image Available</span>
                          </div>
                        )}
                      </div>
                      <div className="card-body d-flex flex-column text-center">
                        <h5 className="card-title fw-bold text-info">{member.name}</h5>
                        <h6 className="card-subtitle mb-2 text-warning">{member.position}</h6>
                        <p className="card-text mt-auto">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConferenceAbout;
