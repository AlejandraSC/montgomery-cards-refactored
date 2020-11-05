import React from 'react';
import whiteDesign from '../images/white_design.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="./index.html">
          <img className="header--logo" src={whiteDesign} />
        </a>
      </header>
    );
  }
}

export default Header;
