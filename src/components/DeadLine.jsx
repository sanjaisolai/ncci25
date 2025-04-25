import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../photo/IT.jpg';
import { FaRegCalendarCheck, FaEnvelopeOpenText, FaRegClock } from 'react-icons/fa';

const TimelineSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div className="container">
        <h1 className="text-center text-white fw-bold mb-5">Timeline</h1>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline-card bg-dark bg-opacity-75 border border-white rounded-4 p-4">
              
              {/* Timeline Item 1 */}
              <div className="d-flex align-items-start mb-4">
                <FaRegCalendarCheck className="text-primary fs-3 me-3 mt-1" />
                <div>
                  <h5 className="text-white mb-1 fw-semibold">Abstract Submission Deadline</h5>
                  <p className="text-white mb-0">
                    Submit your abstract before <strong>28th April 2025</strong> (Along with your IEEE Format paper + Registration form + Bonafide Certificate to the mentioned email-<b>ncci2025@svce.ac.in</b>).
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="d-flex align-items-start mb-4">
                <FaEnvelopeOpenText className="text-primary fs-3 me-3 mt-1" />
                <div>
                  <h5 className="text-white mb-1 fw-semibold">Shortlisted Papers</h5>
                  <p className="text-white mb-0">
                    Selected authors will be notified via <strong>email (On or Before May 3<sup>rd</sup>)</strong>.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="d-flex align-items-start">
                <FaRegClock className="text-primary fs-3 me-3 mt-1" />
                <div>
                  <h5 className="text-white mb-1 fw-semibold">On-Day Event</h5>
                  <p className="text-white mb-0">
                    Present your paper to the expert panel during the <strong>conference day (On May 8<sup>th</sup>)</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
