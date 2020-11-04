import React from 'react';
import white_design from '../images/white_design.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="./index.html">
          <img className="header--logo" src={white_design} />
        </a>
      </header>
    );
  }
}

export default Header;
