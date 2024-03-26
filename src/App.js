import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1>Welcome to Our Website</h1>
        <p>We offer innovative solutions to help your business grow.</p>
        <button onClick={toggleContactInfo}>Contact Us</button>
        {showContactInfo && (
          <div className="contact-info">
            <p>Email: technohecker@gmail.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main St, hyderabad, india</p>
          </div>
        )}
        <h2>About Us</h2>
        <p>"We provide top-notch IT training and cutting-edge products to help businesses and individuals stay ahead in the everevolving tech landscape. Our team of experts is dedicated to helping you achieve your goals and reach your full potential."</p>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
