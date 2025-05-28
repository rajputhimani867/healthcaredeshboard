import React from 'react';
import './CalendarView.css';

function CalendarView({ data }) {
  const { month, year, days, appointmentDetails } = data;

  // For visual representation only, not actual calendar logic
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="calendar-view card">
      <div className="calendar-header">
        <h3 className="month-year">{month} {year}</h3>
        <span className="this-week-text">This Week </span>
        <div className="calendar-nav-arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>
      <div className="calendar-grid">
        {weekdays.map((dayName, index) => (
          <div key={index} className="calendar-day-header">
            {dayName}
          </div>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`calendar-day ${day.appointments.length > 0 ? 'has-appointments' : ''}`}>
            <div className="day-number">{day.day}</div>
            {day.appointments.map((time, idx) => (
              <div key={idx} className="appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="appointment-details-section">
        {appointmentDetails.map((detail, index) => (
          <div key={index} className="appointment-card-detail">
            <span className="detail-icon">{detail.icon}</span>
            <div className="detail-info">
              <div className="detail-type">{detail.type}</div>
              <div className="detail-time">{detail.time}</div>
              <div className="detail-doctor">{detail.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;