import React from 'react';
import './AnatomySection.css';
import humanBodyImage from '../assets/images/human-body.avif'; // Make sure you have this image

function AnatomySection({ data }) {
  return (
    <div className="anatomy-section">
      <div className="human-body-container">
        <img src={humanBodyImage} alt="Human Body Anatomy" className="human-body-image" />
        {data.map((item) => (
          <div
            key={item.id}
            className={`health-indicator ${item.status}`}
            style={{ top: item.top, left: item.left }}
          >
            <div className="indicator-dot"></div>
            <span className="indicator-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;