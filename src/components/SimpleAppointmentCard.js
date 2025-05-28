import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-appointment-card">
      <span className="card-icon">{icon}</span>
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-time">{time}</div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;