import React from 'react';
import './Footer.scss';
import logo from '../.././images/white_design.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__small"> Montgomery cards @2020</small>
        <a href="http://www.adalab.es" target="_blank" title="Ir a Adalab">
          {<img className="footer__logo" src={logo} title="Logo" alt="Logo" />}
        </a>
      </footer>
    );
  }
}

export default Footer;
