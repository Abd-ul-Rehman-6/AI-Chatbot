function Features() {
  const features = [
    {
      icon: "✦",
      title: "AI Automation",
      text: "Automate repetitive work and let AI handle your everyday workflows."
    },
    {
      icon: "◈",
      title: "Smart Analytics",
      text: "Turn complex data into clear insights and actionable decisions."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      text: "Powerful infrastructure designed to keep your team moving."
    },
    {
      icon: "◎",
      title: "Real-time Insights",
      text: "Monitor your business and get instant visibility into performance."
    },
    {
      icon: "⌘",
      title: "Easy Integrations",
      text: "Connect the tools your team already uses in just a few clicks."
    },
    {
      icon: "◇",
      title: "Enterprise Security",
      text: "Keep your data protected with modern security standards."
    }
  ];

  return (
    <section className="features-section" id="features">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">POWERFUL FEATURES</span>

          <h2>
            Everything you need to
            <br />
            <span>work smarter</span>
          </h2>

          <p>
            One intelligent platform designed to simplify
            your workflow and improve productivity
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (
            <div className="feature-card" key={index}>

              {/* Mobile layout ke liye Icon aur Title wrapper */}
              <div className="feature-header">
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
              </div>

              <p>{feature.text}</p>

              <a href="#dashboard">
                Learn more 
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;