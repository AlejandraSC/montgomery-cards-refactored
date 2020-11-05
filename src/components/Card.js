import React from 'react';
import './Main.scss';
import CardsFill from './CardsFill';
import Design from './Design';
import Share from './Share';

class Card extends React.Component {
  render() {
    return (
      <form class="form">
        <Design></Design>
        <CardsFill></CardsFill>
        <Share></Share>
      </form>
    );
  }
}

export default Card;
