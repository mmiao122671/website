import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

// Import the background image
import bgImage from './assets/background.jpg'
console.log('Background image path:', bgImage)

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home" className="hero-section" style={{
                backgroundImage: `linear-gradient(
                  135deg,
                  rgba(36, 113, 163, 0.8),
                  rgba(46, 64, 83, 0.8)
                ),
                url("${bgImage}")`,
                minHeight: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#2471a3'
              }}>
                <h1>Building Tomorrow's Software Today</h1>
                <p className="hero-main">Innovative solutions for modern businesses</p>
              </section>

              <section id="services" className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                  <Link to="/services#web" className="service-card">
                    <h3>Web Applications</h3>
                    <p>Powerful and responsive web experiences</p>
                  </Link>
                  <Link to="/services#software" className="service-card">
                    <h3>Software Development</h3>
                    <p>Tailored solutions for your unique needs</p>
                  </Link>
                  <Link to="/services#web3" className="service-card">
                    <h3>Web3 Development</h3>
                    <p>Blockchain and decentralized applications</p>
                  </Link>
                </div>
              </section>

              <section id="contact" className="contact-section">
                <h2>Get in Touch</h2>
                <p>Ready to start your next project? Contact us today!</p>
                <Link to="/contact" className="contact-button">Contact Us</Link>
              </section>
            </main>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
