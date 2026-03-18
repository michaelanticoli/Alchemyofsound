import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router for links

const Strategy = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <ul className="nav-links">
          <li><a href="https://michaelanticoli.com">Home</a></li>
          <li><a href="https://marketing.michaelanticoli.com">Marketing & Strategy</a></li>
          <li><a href="https://audio.michaelanticoli.com">Audio</a></li>
          <li><a href="https://michaelanticoli.com/about">About</a></li>
          <li><a href="https://michaelanticoli.com/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Existing Content */}
      <div className="existing-content">  
        {/* Your existing content goes here */}
      </div>

      {/* Secondary Row for In-Page Links */}
      <div className="secondary-links">
        {/* Existing in-page anchor links */}
      </div>

      <style jsx>{`
        /* Example CSS styling */
        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff; 
          padding: 1rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .existing-content {
          /* Existing styles */
        }
        .secondary-links {
          /* Styles for secondary links */
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; // Hide on smaller screens
          }
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex; // Show on medium and larger screens
          }
        }
      `}</style>
    </div>
  );
};

export default Strategy;