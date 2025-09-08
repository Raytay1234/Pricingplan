import React, { useState } from "react";
import "./PricingTable.css";

const plans = [
  {
    name: "Basic",
    price: "$9/month",
    features: ["1 Project", "Basic Support", "Email Access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/month",
    features: ["10 Projects", "Priority Support", "Analytics Dashboard"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    features: ["Unlimited Projects", "Dedicated Support", "Advanced Analytics"],
    popular: false,
  },
];

const PricingPlan = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Toggle Button */}
      <div className="toggle-container" style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="cta-btn primary"
        >
          {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>
      </div>

      <div className="pricing-container">
        <h2 className="pricing-title">Pricing Plans</h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <span className="badge">Most Popular</span>}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>

              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => alert(`You selected the ${plan.name} plan.`)}
                className={`cta-btn ${plan.popular ? "primary" : "secondary"} `}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
