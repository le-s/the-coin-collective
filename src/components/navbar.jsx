import React from 'react';
import '../stylesheets/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="title-container">
            <h1>The Coin Collective</h1>
            <h4>Powered by Coingecko API</h4>
          </div>
          <div className="social-container">
            <div className="portfolio">
              <div className="linkedin-align">
                <a href="https://www.le-steven.com">Portfolio</a>
              </div>
            </div>
            <div className="github">
              <a href="https://github.com/le-s">Github</a>
            </div>
            <div className="linkedin">
              <div className="linkedin-align">
                <a href="https://www.linkedin.com/in/sle94/">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;