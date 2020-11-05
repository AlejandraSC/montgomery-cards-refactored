import React from 'react';
import './Main.scss';
import Preview from './Preview';
import Design from './Design';
import CardsFill from './Fill';
import Share from './Share';

class Main extends React.Component {
  render() {
    return (
      <main className="main__cards">
        <Preview></Preview>
        <Design></Design>
        <CardsFill></CardsFill>
        <Share></Share>
      </main>
    );
  }
}

export default Main;
