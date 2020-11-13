import React from 'react';
import './Main.scss';
import CardsFill from './card/CardsFill';
import Design from './card/Design';
import Share from './card/Share';

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
