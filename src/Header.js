import React, { useState } from 'react';

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
    setShowServices(false);
    setShowContact(false);
    setSelectedService(null);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
    setShowAbout(false);
    setShowContact(false);
    setSelectedService(null);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
    setShowAbout(false);
    setShowServices(false);
    setSelectedService(null);
  };

  const services = [
    {
      name: "Service 1",
      description: "Service 1 developer",
      price: "10,000",
      duration: "1 hour",
      includes: ["coding skills", "communication skills", "leader skiils"]
    },
    {
      name: "Service 2",
      description: "Service 2 developer",
      price: "15,000",
      duration: "2 hours",
      includes: ["coding skills", "communication skills", "leader skiils"]
    },
    {
      name: "Service 3",
      description: "Service 3 developer",
      price: "20,000",
      duration: "3 hours",
      includes: ["coding skills", "communication skills", "leader skiils"]
    }
  ];

  const handleClickService = (index) => {
    setSelectedService(services[index]);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><button onClick={toggleAbout}>About</button></li>
          <li><button onClick={toggleServices}>Services</button></li>
          <li><button onClick={toggleContact}>Contact</button></li>
        </ul>
      </nav>
      {showAbout && (
        <div className="info-section">
          <h2>About Us</h2>
          <p>"Technoheacker is a leading technology company specializing in innovative solutions for businesses."</p>
        </div>
      )}
      {showServices && (
        <div className="info-section">
          <h2>Our Services</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <button onClick={() => handleClickService(index)}>{service.name}</button>
              </li>
            ))}
          </ul>
          {selectedService && (
            <div>
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
              <p>Price: {selectedService.price}</p>
              <p>Duration: {selectedService.duration}</p>
              <p>Includes:</p>
              <ul>
                {selectedService.includes.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {showContact && (
        <div className="info-section">
          <h2>Contact</h2>
          <p>Email:technohecker@example.com</p>
          <p>Phone:+91 9392301433</p>
        </div>
      )}
    </header>
  );
}

export default Header;
