import React from 'react';
import '../Main.scss';
import CardsFill from '../CardFolder/../../../components/AppFolder/CardsFolder/CardsFill';
import Design from '../../AppFolder/DesignFolder/Design';
import Share from '../././../AppFolder/ShareFolder/Share';

class Card extends React.Component {
  render() {
    return (
      <form className="form">
        <Design></Design>
        <CardsFill handleChange={this.props.handleChange}></CardsFill>
        <Share></Share>
      </form>
    );
  }
}

export default Card;
