    function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <div className="logo">
            <div className="logo-icon">✦</div>
            <span>IX AI Chatbot</span>
          </div>

          <p>
            Intelligent tools for modern teams.
            Build smarter and work faster.
          </p>

        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#dashboard">Platform</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Documentation</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>© 2026 NovaAI. All rights reserved.</p>

        <div>
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;