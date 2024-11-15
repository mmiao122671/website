import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Block Software Inc. All rights reserved.</p>
      </div>
    </footer>
  )
} 