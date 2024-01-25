import React from 'react';
import companyLogo from './images/code.gif'; 
const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src={companyLogo} alt="Company Logo" style={{ maxWidth: '100px' , marginLeft: '262%' }} />
        </div>
        <div style={{
            marginRight: '25%'
        }}>
          <p>&copy; 2024 The TownHall. All rights reserved.</p>
          <p>Address: Hinjewadi Phase 1 , Pune, India</p>
          <p>Email: thetownhall@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
