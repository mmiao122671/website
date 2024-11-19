import './AboutPage.css'
import { FaLightbulb, FaAward, FaHandshake, FaBrain } from 'react-icons/fa';

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Block Software Inc.</h1>
        <p className="subtitle">Building innovative solutions for your business</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>Block Software Inc. is a leading software development company specializing in creating cutting-edge solutions for modern businesses. We combine technical expertise with innovative thinking to deliver exceptional results for our clients.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to empower businesses through technology, delivering scalable and sustainable software solutions that drive growth and innovation. We're committed to staying at the forefront of technological advancement while maintaining the highest standards of quality and security.</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-header">
              <FaLightbulb className="card-icon" />
              <h3>Innovation</h3>
            </div>
            <p>Pushing boundaries with cutting-edge technology solutions</p>
          </div>
          <div className="about-card">
            <div className="card-header">
              <FaAward className="card-icon" />
              <h3>Quality</h3>
            </div>
            <p>Delivering excellence through rigorous development standards</p>
          </div>
          <div className="about-card">
            <div className="card-header">
              <FaHandshake className="card-icon" />
              <h3>Reliability</h3>
            </div>
            <p>Building lasting partnerships with dependable solutions</p>
          </div>
          <div className="about-card">
            <div className="card-header">
              <FaBrain className="card-icon" />
              <h3>Expertise</h3>
            </div>
            <p>Leveraging deep technical knowledge and industry experience</p>
          </div>
        </div>
      </section>
    </div>
  )
} 