import React from 'react';

function TrustedCompanies() {
  const companies = [
    { logo: '▲', name: 'Vercel' },
    { logo: '◉', name: 'lumio' },
    { logo: '⬢', name: 'NEXUS' },
    { logo: '◈', name: 'orbit' },
    { logo: '◉', name: 'vertex' },
  ];

  // Seamless loop ke liye array ko multiple times repeat karein
  const repeatedCompanies = [
    ...companies, 
    ...companies, 
    ...companies, 
    ...companies
  ];

  return (
    <section className="trusted">
      <div className="container">
        <p>TRUSTED BY MODERN TEAMS</p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {repeatedCompanies.map((company, index) => (
              <span className="company-item" key={index}>
                {company.logo} {company.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;