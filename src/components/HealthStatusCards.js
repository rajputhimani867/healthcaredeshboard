import React from 'react';
import './HealthStatusCards.css';

function HealthStatusCards({ data }) {
  return (
    <div className="health-status-cards">
      {data.map((card, index) => (
        <div key={index} className="status-card">
          <div className="status-header">
            <span className="status-icon" style={{ backgroundColor: card.color }}></span>
            <span className="status-organ">{card.organ}</span>
            <span className="status-date">{card.date}</span>
          </div>
          <span className="status-details">Details</span>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;