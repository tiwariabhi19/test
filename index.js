import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";

import "./index.css";

const Services = () => {
  return (
    <>
      <Headers />
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="fas fa-shuttle-van"></i>
            <h3>Local Transportation</h3>
            <p>
              Reliable transport services within the city, tailored to your
              schedule and needs.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-truck"></i>
            <h3>Long-Distance Hauling</h3>
            <p>
              Nationwide transport solutions ensuring safe and timely deliveries
              across regions.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-warehouse"></i>
            <h3>Warehousing Solutions</h3>
            <p>
              Secure and spacious warehousing options for short- or long-term
              storage.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-clipboard-list"></i>
            <h3>Fleet Management</h3>
            <p>
              Comprehensive fleet management services, ensuring your goods are
              always on the move.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
