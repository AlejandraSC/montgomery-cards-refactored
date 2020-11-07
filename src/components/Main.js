import React from 'react';
import './Main.scss';
import Preview from './Preview';
import Card from './Card';

class Main extends React.Component {
  render() {
    return (
      <main className="main__cards">
        <Preview data={this.props.data}></Preview>
        <Card></Card>
      </main>
    );
  }
}

export default Main;
