import React, { useState } from 'react';
import './profOpt.css'

function NavigationBar() {
  const [activeTab, setActiveTab] = useState('home');

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar-containerp">
      <div className="navbarp">
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('about')}>About</button>
        <button onClick={() => showContent('contact')}>Contact</button>
      </div>

      <div className="containerp">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'about' && <AboutContent />}
        {activeTab === 'contact' && <ContactContent />}
      </div>
    </div>
  );
}

function HomeContent() {
  return <div>Home Content Goes Here</div>;
}

function AboutContent() {
  return <div>About Content Goes Here</div>;
}

function ContactContent() {
  return <div>Contact Content Goes Here</div>;
}

export default NavigationBar;
