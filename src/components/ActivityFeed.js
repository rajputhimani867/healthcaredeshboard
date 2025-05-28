import React from 'react';
import './ActivityFeed.css';

function ActivityFeed({ data }) {
  const { appointmentCount, weeklyActivity } = data;
  const maxBarHeight = 100; // Max height for a bar in pixels for visual scaling

  return (
    <div className="activity-feed card">
      <h3 className="activity-title">Activity</h3>
      <p className="appointment-count">{appointmentCount} appointments on this week</p>
      <div className="activity-chart">
        {weeklyActivity.map((day, index) => (
          <div key={index} className="chart-bar-container">
            <div
              className="chart-bar"
              style={{ height: `${(day.value / 100) * maxBarHeight}px` }} /* Scale height based on value */
            ></div>
            <div className="chart-day-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;