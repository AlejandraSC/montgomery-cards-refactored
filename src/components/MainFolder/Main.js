import React from 'react';
import './Main.scss';
import Preview from './PreviewFolder/Preview';
import Card from './CardFolder/Card';

class Main extends React.Component {
  render() {
    return (
      <main className="main__cards">
        <Preview data={this.props.data}></Preview>
        <Card handleChange={this.props.handleChange}></Card>
      </main>
    );
  }
}

export default Main;
