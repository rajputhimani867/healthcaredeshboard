import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import './DashboardOverview.css';
import { anatomyData, healthStatusCards } from '../data/mockData';

function DashboardOverview() {
  return (
    <div className="dashboard-overview card">
      <h3 className="overview-title">Dashboard</h3>
      <div className="overview-content">
        <AnatomySection data={anatomyData} />
        <HealthStatusCards data={healthStatusCards} />
      </div>
    </div>
  );
}

export default DashboardOverview;