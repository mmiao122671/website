import { useEffect } from 'react'
import './ServicesPage.css'
import { FaGlobe, FaLaptopCode, FaEthereum } from 'react-icons/fa';

const serviceDetails = {
  web: {
    title: "Web Applications",
    description: "Powerful and responsive web experiences",
    icon: FaGlobe,
    details: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "Custom Web Portals",
      "Real-time Applications"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Next.js"],
    color: "#3498db"
  },
  software: {
    title: "Software Development",
    description: "Tailored solutions for your unique needs",
    icon: FaLaptopCode,
    details: [
      "Enterprise Software Development",
      "Cloud-based Solutions",
      "API Development & Integration",
      "Database Design & Optimization",
      "Legacy System Modernization"
    ],
    technologies: ["Python", "Java", "AWS", "Docker"],
    color: "#9b59b6"
  },
  web3: {
    title: "Web3 Development",
    description: "Blockchain and decentralized applications",
    icon: FaEthereum,
    details: [
      "Smart Contract Development",
      "DeFi Applications",
      "NFT Platforms",
      "Blockchain Integration",
      "Web3 Wallets"
    ],
    technologies: ["Bitcoin","Ethereum", "Solidity", "Web3.js"],
    color: "#f7931a"
  }
}

export function ServicesPage() {
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # symbol and find the element
      const element = document.getElementById(hash.slice(1))
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-intro">Comprehensive solutions for your business needs</p>
      
      {Object.entries(serviceDetails).map(([key, service]) => (
        <div key={key} className="service-detail-section" id={key}>
          <div className="title-with-icon">
            <service.icon size={24} style={{ color: service.color }} />
            <h2 style={{ color: service.color }}>{service.title}</h2>
          </div>
          <p className="service-subtitle">{service.description}</p>
          
          <div className="service-content">
            <div className="service-features">
              <h3>What We Offer</h3>
              <ul className="service-list">
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="service-tech">
              <h3>Technologies</h3>
              <div className="tech-stack">
                {service.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 