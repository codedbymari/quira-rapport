// Header.jsx
import React from 'react';
import './Header.css'; // Importer CSS-filen

function Header() {
  return (
    <header className="app-header">
      {/* Left panel with user info */}
      <div className="left-panel">
        <div className="user-info">
          <div className="user-details">
            <span className="user-name">Therese Engen</span>
            <span className="user-id">Nordre Follo.</span>
          </div>
        </div>
      </div>

      {/* Reservering title on the right */}
      <div className="header-title">
        <br></br>Reservering
      </div>
    </header>
  );
}

export default Header;
