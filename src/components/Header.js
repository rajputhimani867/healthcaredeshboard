import React from 'react';
import './Header.css';
import userAvatar from '../assets/images/user-avatar.webp';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">Healthcare.</h1>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <div className="notification-icon">🔔</div>
        <div className="user-profile">
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <span className="user-name">John Doe</span>
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
}

export default Header;