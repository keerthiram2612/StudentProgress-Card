import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div>
        {/* Header section */}
        <header>
          <h1 className='contact-h1'>JAYA ENGINEERING COLLEGE</h1>
        </header>

        {/* Navigation menu */}
        <nav>
          <ul>
            <Link to="/"><a className="aboutus"href="#about">About Us</a></Link><br/>
            <Link to="/contactus"><a className='contactus' href="#contact">Contact Us</a></Link>
          </ul>
        </nav>

        <div>
          <iframe className='iframe'
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.8124054921175!2d80.04538158589362!3d13.135441866356619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5288f1777c766f%3A0x2374bd5175d7ec60!2sJaya+Engineering+College!5e1!3m2!1sen!2sin!4v1394868318545"
            width="100%"
            height="350"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Footer section */}
        <footer>
          <p>&copy; jaya Engineering College, 2023. All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default Contact;
