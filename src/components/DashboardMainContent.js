import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';
import { calendarData, upcomingSchedule, activityData } from '../data/mockData';

function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-grid">
        <div className="grid-item dashboard-overview-area">
          <DashboardOverview />
        </div>
        <div className="grid-item calendar-view-area">
          <CalendarView data={calendarData} />
        </div>
        <div className="grid-item upcoming-schedule-area">
          <UpcomingSchedule data={upcomingSchedule} />
        </div>
        <div className="grid-item activity-feed-area">
          <ActivityFeed data={activityData} />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;