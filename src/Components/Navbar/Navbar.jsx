import React from 'react';
import './Navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import jack from '../../assets/jack.png';

const Navbar = ({ setSidebar }) => {
  const handleMenuToggle = () => {
    setSidebar(prev => !prev);  // Toggle the sidebar state
  };

  return (
    <nav className='flex-div'>
      {/* Left Side: Menu and Logo */}
      <div className='nav-left'>
        <div className='flex-div'>
          <button className='menu_icon' onClick={handleMenuToggle} aria-label="Toggle Sidebar">
            <img src={menu} alt="Menu" />
          </button>
          <img className='logo' src={logo} alt="Logo" />
        </div>
      </div>

      {/* Middle: Search Box */}
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <img src={search} alt="Search Icon" />
        </div>
      </div>

      {/* Right Side: Upload, More, Notifications, User Icon */}
      <div className='nav-right flex-div'>
        <img src={upload} alt="Upload Icon" />
        <img src={more} alt="More Options" />
        <img src={notification} alt="Notifications" />
        <img src={jack} className='user_icon' alt="User Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
