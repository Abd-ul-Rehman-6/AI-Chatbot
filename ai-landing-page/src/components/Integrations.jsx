function Integrations() {
  const integrations = [
    ["S", "Slack"],
    ["G", "Google Drive"],
    ["N", "Notion"],
    ["D", "Discord"],
    ["M", "Microsoft"],
    ["T", "Trello"]
  ];

  return (
    <section className="integrations-section" id="integrations">

      <div className="container">

        <div className="section-heading">
          <span className="section-label">INTEGRATIONS</span>

          <h2>
            Works with the tools
            <br />
            <span>you already use</span>
          </h2>

          <p>
            Connect your favorite apps and build powerful
            automated workflows without complicated setup
          </p>
        </div>

        <div className="integration-grid">

          {integrations.map((item, index) => (
            <div className="integration-card" key={index}>
              <div className="integration-icon">
                {item[0]}
              </div>

              <div>
                <strong>{item[1]}</strong>
                <small>Connected</small>
              </div>

              <span className="connected">✓</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Integrations;