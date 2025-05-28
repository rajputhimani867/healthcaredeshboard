import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule({ data }) {
  return (
    <div className="upcoming-schedule card">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {data.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h4 className="day-heading">On {daySchedule.day}</h4>
          <div className="appointments-list">
            {daySchedule.appointments.map((appt, apptIndex) => (
              <SimpleAppointmentCard key={apptIndex} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;