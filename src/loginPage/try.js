import React, { useState, useEffect } from 'react';
import './try.css'; // Import the CSS file for styling

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar">
      <h2>Sidebar</h2>
      <p>This is a sidebar.</p>
    </div>
  );
}

function Try() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Initialize Bootstrap popover when component mounts
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new window.bootstrap.Popover(popoverTriggerEl);
    });
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
        Popover on left
      </button>
      <>
        <button type="button" className="btn btn-primary" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        {isOpen && <Sidebar />}
      </>
    </div>
  );
}

export default Try;
