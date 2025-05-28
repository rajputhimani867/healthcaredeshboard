import React from 'react';
import './Sidebar.css';
import { navLinks } from '../data/mockData';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Healthcare.</h2> {/* Replicate title from image */}
      </div>
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-heading">General</h3>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">
                  <span className="nav-icon">{link.icon}</span>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Potentially other sections if the image implies them below the fold */}
      </nav>
      <div className="sidebar-footer">
        {/* Settings icon or "Activate Windows" text goes here, if static */}
        <div className="setting-link">
          <span className="setting-icon">⚙️</span>
          <span>Setting</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;