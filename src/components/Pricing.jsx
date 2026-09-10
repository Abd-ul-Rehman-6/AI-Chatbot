import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [months, setMonths] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("PRO");
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Price calculation function
  const getPrice = (monthlyPrice, yearlyDiscountPercent = 20) => {
    if (monthlyPrice === 0) return 0;
    if (isYearly) {
      return Math.round(monthlyPrice * 12 * ((100 - yearlyDiscountPercent) / 100));
    }
    return monthlyPrice * months;
  };

  const handleSelectPlanAndCheckout = (planName, monthlyPrice, discount) => {
    setSelectedPlan(planName);
    const calculatedPrice = getPrice(monthlyPrice, discount);

    navigate("/checkout", {
      state: {
        plan: planName,
        billingCycle: isYearly ? "1 Year (Yearly)" : `${months} Month(s)`,
        durationMonths: isYearly ? 12 : months,
        price: calculatedPrice,
      },
    });
  };

  const periodText = isYearly ? "/ year" : ` for ${months} mo`;

  const faqData = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel or downgrade your plan at any time directly from your account settings without any extra fees.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on our Pro plan with full access to all premium features.",
    },
    {
      question: "What happens when I upgrade?",
      answer:
        "Your account will immediately unlock all features of the new plan, and billing will adjust proportionally.",
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">Chatbot pricing and plans</h2>
          <p className="pricing-subtitle">Choose the plan that fits you</p>

          <div className="toggle-wrapper" style={{ flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className={`toggle-text ${!isYearly ? "active" : ""}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => setIsYearly(!isYearly)}
                className={`switch-btn ${isYearly ? "active" : "inactive"}`}
                role="switch"
                aria-checked={isYearly}
              >
                <span className={`switch-knob ${isYearly ? "translated" : ""}`} />
              </button>
              <span className={`toggle-text ${isYearly ? "active" : ""}`}>
                Yearly
              </span>
            </div>

            {/* Custom Months Selector Input */}
            {!isYearly && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <label style={{ fontSize: "14px", fontWeight: "600", color: "#475569" }}>
                  Select Duration:
                </label>
                <input
                  type="number"
                  min="1"
                  max="36"
                  value={months}
                  onChange={(e) => setMonths(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{
                    width: "60px",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    border: "1px solid #cbd5e1",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    outline: "none"
                  }}
                />
                <span style={{ fontSize: "14px", color: "#64748b" }}>Month(s)</span>
              </div>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {/* Starter Plan */}
          <div
            onClick={() => setSelectedPlan("STARTER")}
            className={`pricing-card ${selectedPlan === "STARTER" ? "active-card" : ""}`}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="card-title">STARTER</h3>
                <span className="discount-badge">Free Forever</span>
              </div>
              <div className="price-wrapper">
                <span className="price-amount">${getPrice(0)}</span>
                <span className="price-period">{periodText}</span>
              </div>
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span> Core AI Features
                </li>
                <li>
                  <span className="check-icon">✓</span> Basic Analytics
                </li>
                <li>
                  <span className="check-icon">✓</span> 1 Team Member
                </li>
              </ul>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlanAndCheckout("STARTER", 0, 0);
              }}
              className={`card-btn ${selectedPlan === "STARTER" ? "primary-btn" : "outline-btn"}`}
            >
              Choose Starter
            </button>
          </div>

          {/* Pro Plan */}
          <div
            onClick={() => setSelectedPlan("PRO")}
            className={`pricing-card popular ${selectedPlan === "PRO" ? "active-card" : ""}`}
          >
            <div className="popular-badge">POPULAR ⭐</div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="card-title popular-title">PRO</h3>
                <span className="discount-badge">
                  {isYearly ? "Save 20%" : "Save 15% Monthly"}
                </span>
              </div>
              <div className="price-wrapper">
                <span className="price-amount">${getPrice(29, 20)}</span>
                <span className="price-period">{periodText}</span>
              </div>
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span> Advanced AI Features
                </li>
                <li>
                  <span className="check-icon">✓</span> Full Analytics
                </li>
                <li>
                  <span className="check-icon">✓</span> Workflow Automation
                </li>
                <li>
                  <span className="check-icon">✓</span> Up to 10 Team Members
                </li>
              </ul>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlanAndCheckout("PRO", 29, 20);
              }}
              className={`card-btn ${selectedPlan === "PRO" ? "primary-btn" : "outline-btn"}`}
            >
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Business Plan */}
          <div
            onClick={() => setSelectedPlan("BUSINESS")}
            className={`pricing-card ${selectedPlan === "BUSINESS" ? "active-card" : ""}`}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="card-title">BUSINESS</h3>
                <span className="discount-badge">
                  {isYearly ? "Save 25%" : "Save 20% Monthly"}
                </span>
              </div>
              <div className="price-wrapper">
                <span className="price-amount">${getPrice(99, 25)}</span>
                <span className="price-period">{periodText}</span>
              </div>
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span> Custom AI Workflows
                </li>
                <li>
                  <span className="check-icon">✓</span> Enterprise Analytics
                </li>
                <li>
                  <span className="check-icon">✓</span> Advanced Automation
                </li>
                <li>
                  <span className="check-icon">✓</span> Unlimited Team Members
                </li>
              </ul>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlanAndCheckout("BUSINESS", 99, 25);
              }}
              className={`card-btn ${selectedPlan === "BUSINESS" ? "primary-btn" : "outline-btn"}`}
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-wrapper">
          <h3 className="section-title">Compare Features</h3>
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Pro</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Tasks</td>
                  <td className="check-icon">✓</td>
                  <td className="check-icon">✓</td>
                  <td className="check-icon">✓</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td className="check-icon">✓</td>
                  <td className="check-icon">✓</td>
                  <td className="check-icon">✓</td>
                </tr>
                <tr>
                  <td>Automation</td>
                  <td style={{ color: "#94a3b8" }}>—</td>
                  <td className="check-icon">✓</td>
                  <td className="check-icon">✓</td>
                </tr>
                <tr>
                  <td>Team Members</td>
                  <td>1</td>
                  <td>10</td>
                  <td>Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="faq-wrapper">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <div className="faq-accordion">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`accordion-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-question">{item.question}</span>
                    <span className="accordion-icon">{isOpen ? "▲" : "▼"}</span>
                  </button>

                  <div className="accordion-body">
                    <div className="accordion-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <div className="cta-box">
          <h2>Ready to get started?</h2>
          <button onClick={() => navigate("/signup")} className="cta-btn">
            Start Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;